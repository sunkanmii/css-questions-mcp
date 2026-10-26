/** CSS-Questions challenge card: shows one question, checks the answer on the server, explains it. */
import {
  useCallTool,
  useOpenExternal,
  useToolContext,
  useViewTheme,
} from "mcp-use/react";
import { Fragment, useState, type ReactNode } from "react";

import "./view.css";

type Challenge = {
  id: number;
  label: string;
  topic: string;
  question: string;
  code: string;
  answers: string[];
};

// Answers in the bank wrap code in backticks; render those parts as <code>.
function withInlineCode(text: string): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") && part.length > 1 ? (
      <code key={i}>{part.slice(1, -1)}</code>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function CssChallenge() {
  const view = useToolContext<"get-daily-challenge">();
  const theme = useViewTheme();
  const openExternal = useOpenExternal();
  const check = useCallTool("check-answer");
  const practice = useCallTool("practice-question");

  // A question loaded from the "Another question" button replaces the one the host rendered.
  const [override, setOverride] = useState<Challenge | null>(null);
  const [picked, setPicked] = useState<number | null>(null);

  const challenge: Challenge | undefined =
    override ?? (view.status === "ready" ? view.toolOutput : undefined);
  const result = picked !== null ? check.data?.structuredContent : undefined;

  async function choose(index: number) {
    if (!challenge || picked !== null) return;
    setPicked(index);
    try {
      await check.callTool({ questionId: challenge.id, answerIndex: index });
    } catch {
      setPicked(null);
    }
  }

  async function next() {
    try {
      const res = await practice.callTool({ topic: challenge?.topic });
      setOverride(res.structuredContent);
      setPicked(null);
    } catch {
      // practice.error is shown below
    }
  }

  return (
    <div className="cq" data-theme={theme}>
      <header className="cq-head">
        <span className="cq-brand">CSS-Questions</span>
        {challenge && <span className="cq-label">{challenge.label}</span>}
      </header>

      {view.status === "pending" && !override && (
        <div className="cq-skeleton" aria-busy="true" aria-label="Loading question">
          <span />
          <span />
          <span />
        </div>
      )}

      {view.status === "error" && !override && (
        <p className="cq-error">Couldn't load a question: {view.error.message}</p>
      )}

      {challenge && (
        <>
          <p className="cq-topic">{challenge.topic}</p>
          <h2 className="cq-question">{withInlineCode(challenge.question)}</h2>
          {challenge.code && (
            <pre className="cq-code">
              <code>{challenge.code}</code>
            </pre>
          )}

          <ol className="cq-answers">
            {challenge.answers.map((answer, i) => {
              let state = "";
              if (result) {
                if (i === result.correctIndex) state = "right";
                else if (i === picked) state = "wrong";
              } else if (i === picked) {
                state = "checking";
              }
              return (
                <li key={i}>
                  <button
                    type="button"
                    className="cq-answer"
                    data-state={state || undefined}
                    disabled={picked !== null}
                    onClick={() => void choose(i)}
                  >
                    <span className="cq-letter">{String.fromCharCode(65 + i)}</span>
                    <span>{withInlineCode(answer)}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          {check.error && picked === null && (
            <p className="cq-error">Couldn't check that answer: {check.error.message}</p>
          )}

          {result && (
            <div className="cq-result" data-correct={result.correct} role="status">
              <strong>{result.correct ? "Correct!" : "Not quite."}</strong>
              <p>{withInlineCode(result.explanation)}</p>
            </div>
          )}

          <footer className="cq-foot">
            <button
              type="button"
              className="cq-secondary"
              disabled={practice.isPending}
              onClick={() => void next()}
            >
              {practice.isPending ? "Loading…" : "Another question"}
            </button>
            <button
              type="button"
              className="cq-link"
              onClick={() => void openExternal({ url: "https://css-questions.com" })}
            >
              Practise more on css-questions.com
            </button>
          </footer>
          {practice.error && (
            <p className="cq-error">Couldn't load another question: {practice.error.message}</p>
          )}
        </>
      )}
    </div>
  );
}
