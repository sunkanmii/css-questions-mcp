# Build log: CSS-Questions as an MCP App

Raw notes for the article "I Turned My CSS Quiz Into an MCP App. Here's Every Place It Broke." and scene 5 of the Manufact film. Times are from the first build on 26 to 27 October 2026, mcp-use 2.12.0, Node 24.18.0, Windows 11.

## What went smoothly

- `npx create-mcp-use-app css-questions-mcp --template mcp-apps --npm` scaffolded and installed in one step.
- `npm run dev` started the server, the view build and the Inspector together. Hot reload picked up data changes without a restart.
- `mcp-use typecheck` generated tool types for the view. `useCallTool("check-answer")` was typed from the server's zod schema with no extra work.
- `mcp-use screenshot` rendered the view headlessly in light and dark themes. Very handy for checking a card without opening a chat.

## Where it broke

1. **One view per tool.** I pointed two tools (`get-daily-challenge` and `practice-question`) at the same card. Typecheck passed, but the build failed:

   > View "css-challenge" is already bound to tool "get-daily-challenge"; tool "practice-question" cannot bind the same view. Each view may be bound to one tool.

   Fix: a second view folder whose `view.tsx` is one line, `export { default } from "../css-challenge/view.js";`. Worth a docs note, since sharing one card across tools is a common need.

2. **`useOpenExternal` takes an object.** I wrote `openExternal("https://css-questions.com")`. Typecheck caught it: the call is `openExternal({ url })`. Good DX, the type error was clear.

3. **Docs and scaffolder disagree.** The MCP Apps quickstart describes a `search-fruits` tool and a `views/product-search-result/` folder. The scaffolder created `show-app` and `views/my-view/`. Different pages also list different minimum Node versions (22.22.2 vs 20.19 or 22.12).

4. **Screenshot CLI and `@mcp-use/client`.** The first `mcp-use screenshot` run stopped and asked me to install `@mcp-use/client`, even though it then appeared in package.json. The second run worked. This looks like open issue #2870 on Node 24.

5. **My own data, not mcp-use.** Every answer ended in a stray "Â". The CSS-Questions export uses `£` as a separator and it was double-encoded as `Â£`. Splitting on `Â£` first fixed it. Lesson for the article: check your data in the rendered card, not just in JSON.

## Design choices worth writing about

- The correct answer stays on the server. The view sends the picked index to `check-answer`, so the model never sees the answer and can't spoil it.
- The card reads the host's theme with `useViewTheme()` and sets its own colours for light and dark, instead of assuming the chat's background.
- A container query switches answers to two columns only when the host gives the card enough width.

## Deploying and running it in Claude

- Pushed the repo to GitHub and connected it from the Manufact Cloud onboarding (Connect GitHub, access limited to this one repo).
- The deploy screen detected everything from package.json: build `npm run build`, start `npm start`, port 3000. Region left on Auto, no environment variables.
- Live at `https://dark-forge-j111f.run.mcp-use.com/mcp`. The first request after a quiet spell took about 1.7 s, probably a cold start.
- `mcp-use screenshot --mcp <live url>` rendered both cards from the deployed server in light and dark themes.
- Added the URL as a custom connector in Claude. Asking for today's CSS challenge rendered the card in the chat, and answering it worked end to end.

## Still to do

- [ ] Time a fresh `git push` to live URL for the article
- [ ] Measure cold start vs warm response a few times for the "Cold Starts, Measured" idea
- [ ] Check question 275's distractor "fonto-synthesis": typo or intentional?
