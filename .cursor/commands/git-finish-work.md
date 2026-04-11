# /git-finish-work

Finalize a branch of work, push it to the remote, and open a PR.

## Usage

`/git-finish-work`

No arguments. Operates on the current branch.

## Steps

1. Confirm we're not on main:
   - If the current branch is `main`, STOP.

2. Run all pre-commit checks one final time:
   - `pnpm typecheck`
   - `pnpm lint`
   - `pnpm test`
   - `pnpm build`  (final work should also build cleanly)
   - If any fails, STOP and report.

3. Check for uncommitted changes:
   - If there are uncommitted changes, ask the user if they should be
     committed as a final commit on the branch. If yes, use
     `/git-commit-progress` flow internally.
   - If the user wants to stash or discard them, follow their
     instruction.

4. Push the branch to the remote:
   - `git push -u origin <branch-name>`
   - If the push fails (e.g., remote has new commits), STOP and tell
     the user. Do not force push.

5. Open the PR via GitHub CLI:
   - `gh pr create --base main --head <branch-name> --title "<title>" --body "<body>"`
   - Title: match the most significant commit on the branch, or
     summarize if multiple features
   - Body: include
     - **What changed** — 1–3 sentence summary
     - **Why** — reasoning or reference to planning
     - **Follow-ups** — anything left for a future branch
     - **Checks** — confirmation that typecheck/lint/test/build all pass

6. Report the PR URL to the user.

7. Tell the user: "Branch pushed and PR opened at <url>. Review it in
   the GitHub UI, squash-merge when ready, and delete the branch
   after merge."

## Do not

- Do not merge the PR. That's the user's job.
- Do not force push.
- Do not close or modify existing PRs without explicit instruction.
- Do not skip final checks, even if the user is in a hurry.