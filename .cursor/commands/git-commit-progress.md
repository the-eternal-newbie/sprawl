# /git-commit-progress

Commit in-progress work on the current branch with full pre-commit
checks.

## Usage

`/git-commit-progress <type> <description>`

- `type`: feat | fix | chore | docs | refactor | test
- `description`: commit description in imperative mood, 50 chars max

Example: `/git-commit-progress feat "add semantic token vocabulary"`

## Steps

1. Confirm we're not on main:
   - Run `git branch --show-current`
   - If the current branch is `main`, STOP. Tell the user: "You're on
     main. Create a branch first with `/git-start-work`."

2. Derive the scope from the branch name:
   - Branch format is `<type>/<scope>-<description>`
   - Extract `<scope>` and use it in the commit message

3. Run pre-commit checks from the monorepo root:
   - `pnpm typecheck`
   - `pnpm lint`
   - `pnpm test`
   - If any fails, STOP and report the failure. Do not commit.
   - Exception: if the user's request explicitly includes the phrase
     "tests are broken" or "wip commit" or "skip checks", allow the
     commit but add `[wip]` to the commit message prefix.

4. Show the user `git status` and `git diff --stat` so they can see
   what's about to be staged.

5. Ask the user what to stage:
   - Propose a specific list of files based on the work done in this
     session. Do NOT propose `git add .`
   - Wait for confirmation before staging.

6. Stage the confirmed files:
   - `git add <file> <file> <file>`

7. Commit with the Conventional Commits format:
   - `git commit -m "<type>(<scope>): <description>"`
   - If the description is long enough to need a body, use
     `git commit` with a heredoc or `-F -` instead of `-m`

8. Report: the commit hash, the commit message, and the number of
   files changed.

## Do not

- Do not push after committing (that's `/git-finish-work`'s job for
  the final commit, or the user's choice for intermediate commits).
- Do not `git add .` without showing the user what would be staged.
- Do not skip the pre-commit checks unless explicitly told.
- Do not commit to main, ever.