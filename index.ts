import { MCPServer } from "mcp-use";
import { z } from "zod";

import { questions, type Question } from "./src/questions.js";

const server = new MCPServer({
  name: "css-questions-mcp",
  title: "CSS-Questions",
  version: "1.0.0",
  description:
    "Daily CSS challenges and topic practice from the CSS-Questions bank, playable inside your AI chat.",
  instructions:
    "Use get-daily-challenge when the user wants today's CSS question, and practice-question for a question on a topic. The view collects the answer and calls check-answer itself, so do not reveal or guess the correct answer before the user picks one.",
  websiteUrl: "https://css-questions.com",
  icons: [
    {
      src: "icon.svg",
      mimeType: "image/svg+xml",
      sizes: ["512x512"],
    },
  ],
});

const topics = [...new Set(questions.map((q) => q.topic))].sort();

// The same date always maps to the same question, so everyone gets one challenge per day.
function questionForDate(date: string): Question {
  let hash = 0;
  for (const char of date) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return questions[hash % questions.length];
}

function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

// What the view and the model see. The correct answer stays on the server until check-answer.
const challengeSchema = z.object({
  id: z.number().describe("Question id, passed back to check-answer"),
  label: z.string().describe("Heading for the card, e.g. the date or topic"),
  topic: z.string().describe("CSS topic the question covers"),
  question: z.string().describe("The question text"),
  code: z.string().describe("Optional CSS snippet the question refers to"),
  answers: z.array(z.string()).describe("Answer options, in order"),
});

function toChallenge(q: Question, label: string) {
  return {
    id: q.id,
    label,
    topic: q.topic,
    question: q.question,
    code: q.code,
    answers: q.answers,
  };
}

function challengeText(q: Question) {
  const options = q.answers.map((a, i) => `${i + 1}. ${a}`).join("\n");
  return `CSS question (#${q.id}, ${q.topic}): ${q.question}\n${q.code ? `\n${q.code}\n` : ""}\n${options}`;
}

const challengeView = {
  name: "css-challenge",
  description: "Interactive CSS question card with instant feedback",
  prefersBorder: false,
  csp: {
    resourceDomains: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ],
  },
};

const readOnly = {
  readOnlyHint: true,
  destructiveHint: false,
  openWorldHint: false,
};

export const getDailyChallenge = server.tool(
  {
    name: "get-daily-challenge",
    title: "Daily CSS challenge",
    description:
      "Show today's CSS-Questions daily challenge as an interactive card. Everyone gets the same question on the same UTC day.",
    inputSchema: z.object({
      date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional()
        .describe("Day to load in YYYY-MM-DD. Leave empty for today (UTC)."),
    }),
    outputSchema: challengeSchema,
    view: challengeView,
    annotations: readOnly,
  },
  async ({ date }) => {
    const day = date ?? todayUtc();
    const q = questionForDate(day);
    return {
      content: [{ type: "text", text: challengeText(q) }],
      structuredContent: toChallenge(q, `Daily challenge · ${day}`),
    };
  }
);

export const practiceQuestion = server.tool(
  {
    name: "practice-question",
    title: "Practice a CSS topic",
    description: `Show a random CSS question as an interactive card, optionally from one topic. Topics: ${topics.join(", ")}.`,
    inputSchema: z.object({
      topic: z
        .string()
        .optional()
        .describe(`One of: ${topics.join(", ")}. Leave empty for any topic.`),
    }),
    outputSchema: challengeSchema,
    view: { ...challengeView, name: "css-practice" },
    annotations: readOnly,
  },
  async ({ topic }) => {
    const pool = topic ? questions.filter((q) => q.topic === topic) : questions;
    if (pool.length === 0) {
      throw new Error(
        `Unknown topic "${topic}". Use one of: ${topics.join(", ")}.`
      );
    }
    const q = pool[Math.floor(Math.random() * pool.length)];
    return {
      content: [{ type: "text", text: challengeText(q) }],
      structuredContent: toChallenge(q, `Practice · ${q.topic}`),
    };
  }
);

export const checkAnswer = server.tool(
  {
    name: "check-answer",
    title: "Check a CSS answer",
    description:
      "Check the user's chosen answer for a CSS-Questions question and return the explanation.",
    inputSchema: z.object({
      questionId: z.number().int().describe("Question id from the card"),
      answerIndex: z
        .number()
        .int()
        .min(0)
        .describe("Zero-based index of the answer the user picked"),
    }),
    outputSchema: z.object({
      correct: z.boolean().describe("Whether the picked answer is right"),
      correctIndex: z.number().describe("Zero-based index of the right answer"),
      correctAnswer: z.string().describe("Text of the right answer"),
      explanation: z.string().describe("Why the right answer is right"),
    }),
    annotations: readOnly,
  },
  async ({ questionId, answerIndex }) => {
    const q = questions.find((item) => item.id === questionId);
    if (!q) throw new Error(`No question with id ${questionId}.`);
    const result = {
      correct: answerIndex === q.correctIndex,
      correctIndex: q.correctIndex,
      correctAnswer: q.answers[q.correctIndex],
      explanation: q.explanation,
    };
    return {
      content: [
        {
          type: "text",
          text: `${result.correct ? "Correct" : "Not quite"}. The answer is ${result.correctAnswer}. ${result.explanation}`,
        },
      ],
      structuredContent: result,
    };
  }
);

export default server;
