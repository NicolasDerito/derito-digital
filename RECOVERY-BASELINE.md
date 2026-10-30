# React/Vite recovery base — 2026-10-30

## Status and provenance

This branch, `source/react-vite-recovery`, is a **new locally versioned maintenance baseline assembled from a recovered snapshot**, not the original React/Vite Git source repository. The owner explicitly accepted that complete provenance need not be proven (authorization in the conversation, 2026-10-30 08:55 GMT-3).

Snapshot used: `/Users/nicolas/.openclaw/workspace-derito/isolated/derito-digital-recovery-final-2026-10-29/catalog-app/`, itself extracted from `/Users/nicolas/.openclaw/workspace-derito/delivery-review/final-review/source/RECOVERED-SOURCE.zip` (SHA-256 `fe6f6efdcc574e07382d2f3d0ef7507be54252063d915ba4ee2bdf336f53369a`). Its `package.json`, lockfile, Vite/TypeScript config, main application source, CSS and most public assets were carried into this branch; the snapshot tree had no usable source Git history.

Reproducible reference recorded in `isolated/derito-digital-recovery-full-2026-10-29/SOURCE-IDENTIFICATION-STATUS.md`: a clean build of the snapshot with `V10Experience.tsx` adjusted to the then-tracked live version reproduced that production JS bundle byte-for-byte (SHA-256 `148261afcfb1e05e41a5320592bc498d09900d05d9b7e4d7ff4f0fb2e0be4a3f`) and CSS (SHA-256 `1d27cc57adb0b40940460054acdaeb7810fd08f12308971dfea8281e34ff82b0`). This supports identification of that snapshot as the React/Vite baseline for that production bundle; it does not restore original source history or establish that this branch's subsequent widget changes are production-equivalent.

The verified clean build of this branch on 2026-10-30 produced `dist/assets/index-CU2YFSpz.js` (SHA-256 `57a9eabba4b90463b08a4305228d76d46f691bd4a1078326fa03316619773b10`) and `dist/assets/index-CG354nNk.css` (SHA-256 `3ba33cdb4f4529cce6409ff20ce2adb7670ed86b2bafa85579ea3887064da34e`). These do **not** byte-match the published asset pair recorded in the public Git commit `c31d25f` (`assets/index-CnhD63nK.js`, SHA-256 `59b5364b9b26fa397a2965e89c07d3fd09386924a3528f65c7296e33d23ce1a0`; `assets/index-B5n_JjND.css`, SHA-256 `bd7591737e21099e44377ec65e1cd1fdf9b4dbe4a0d56b13ba7a4c92872d5d69`). Both public asset URLs returned HTTP 200 on 2026-10-30. Therefore this new build is verified as compilable, not an exact reproduction of the currently referenced public assets.

Differences intentionally present in this recovery branch:
- `src/components/AgentWidget.tsx` is from the separately preserved restore candidate, SHA-256 `91610fdd0ae9a01a120800fabda4e7fd02fc777f3366b41103e85ed9a9753e56`; it was integrated to preserve the original chat endpoint/contract/session and responsive UI.
- Root `index.html` points at `/src/main.tsx` for Vite development/build instead of referring to the previous published asset names. It retains the recovered SEO metadata and has no added Worker/IA request in HTML.
- `public/chat-endpoint.json` remains the recovered staging/offline metadata with an empty URL. This metadata file is separate from the restored widget's hardcoded historical API endpoint.

## Production and safety boundaries

No public bundles were replaced. No push, merge, deploy, Worker, DNS, billing, or credential changes were made. The production checkout remains separate; its observed state was `main` at `993d5fb63424583936ffd97108a888306a11f23d`, behind origin by five commits, with existing untracked `PLAN.md`, `assets/index-C-54S7k1.js`, and `v2/`. Preserve these. This source branch is not a deployment branch or an instruction to publish its build output.

## Reproducing this maintenance build

On a clean checkout of this branch, use the committed lockfile (`npm ci`), then `npm run build`. The output is `dist/`; GitHub Pages output preparation must happen in a separate deployment worktree/release copy based on the intended publication commit, not by copying files into production. Before any later release, compare the complete built `dist/` with that release's expected public artifact, preserve the published `index.html` head/SEO and required static assets, validate CNAME and path behavior, run browser QA, and obtain explicit release authorization. This document intentionally does **not** provide a deploy/push command.

## QA and rollback boundaries

`node --test tests/agent-widget.integration.test.cjs` checks the preserved endpoint, exact `{session,message}` request shape, `{reply}` response, session key, local history, error fallback and WhatsApp handoff. Previous mocked Chromium and WebKit mobile browser runs are recorded in the task context; they made no actual Worker/model calls. A clean build and static tests do not verify the deployed Worker, production response, billing caps, or full behavioral/visual equivalence.

The recovery commit is rollback for this **source baseline only**. Production remains untouched and therefore needs no production rollback from this action. For future release planning, preserve the then-current Pages artifact/commit in a separate release backup before any authorized deployment; do not use `git reset --hard`, `git clean`, or overwrite the public checkout's untracked files. Reverting this source commit in this branch restores the pre-recovery static-only branch state, but does not perform or imply a production rollback.

## Files and secrets

The source tree includes `src/` (15 files), package metadata, Vite/TypeScript configuration, tests, and `public/` assets (21 files). `node_modules/`, `dist/`, Playwright results, tsbuildinfo, generated Vite JS/declarations, local environment files and credentials are excluded from Git. No `.env` file was included. Never add public production secrets or API keys to this repository.
