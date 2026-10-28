# CSS-Questions MCP App

Play the [CSS-Questions](https://css-questions.com) daily challenge inside ChatGPT, Claude or any client that supports MCP Apps. Built with [mcp-use](https://github.com/mcp-use/mcp-use) and deployed on [Manufact Cloud](https://manufact.com).

Ask your assistant for "today's CSS challenge" or "a grid question". A card appears, you pick an answer, and the server checks it and explains why.

## Try it

It's live on Manufact Cloud:

```
https://dark-forge-j111f.run.mcp-use.com/mcp
```

Add that URL as a custom connector in Claude or ChatGPT, then ask for today's CSS challenge.

## Tools

| Tool | What it does | View |
| --- | --- | --- |
| `get-daily-challenge` | Today's question. The same UTC day always gives the same question. | `css-challenge` |
| `practice-question` | A random question, optionally from one topic such as `grid` or `view-transitions`. | `css-practice` |
| `check-answer` | Checks an answer and returns the explanation. The card calls it for you. | none |

The correct answer never leaves the server until `check-answer` runs, so the model can't spoil the question.

## Run it locally

Needs Node.js 22.22.2 or newer.

```bash
npm install
npm run dev
```

- MCP endpoint: http://localhost:3000/mcp
- Inspector: http://localhost:3000/mcp/inspector

In the Inspector, open **Tools**, pick `get-daily-challenge` and run it with no arguments.

## Deploy to Manufact Cloud

```bash
npx mcp-use login
npm run deploy
```

Then add the deployed `/mcp` URL as a connector in ChatGPT or Claude.

## Project layout

```
index.ts                  server and tools
src/questions.ts          snapshot of 108 questions from the CSS-Questions bank
views/css-challenge/      the question card (React + CSS)
views/css-practice/       re-exports the card, because each view binds to one tool
```

## Updating the questions

`src/questions.ts` is generated from the CSS-Questions export (`questions_and_answers_rows.csv`). It keeps single-answer questions that have an explanation. Regenerate it rather than editing it by hand.
