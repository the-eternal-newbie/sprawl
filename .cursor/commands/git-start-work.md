# /git-start-work

Start a new piece of work on a fresh branch.

## Usage

`/git-start-work <type> <scope> <description>`

- `type`: feat | fix | chore | docs | refactor | test
- `scope`: mlo | bc | nm | mm | sprawl
- `description`: 2–5 word description (will be kebab-cased)

Example: `/git-start-work feat mlo scaffold`

## Steps

1. Check current git state:
   - Run `git status` and `git branch --show-current`
   - If there are uncommitted changes on the current branch, stop and
     tell the user: "You have uncommitted changes on <branch>. Commit
     or stash them before starting new work."
   - If there are untracked files that look like work-in-progress
     (not generated output, not .gitignore candidates), flag them.

2. Ensure we're branching from up-to-date main:
   - `git checkout main`
   - `git pull origin main`

3. Create the new branch with the format `<type>/<scope>-<description>`:
   - `git checkout -b <branch-name>`

4. Confirm the new branch is active and clean. Report the branch name
   and the last commit hash on main to the user.

5. Tell the user: "Branch <name> is ready. Make your changes, then
   run `/git-commit-progress` to commit as you work, or
   `/git-finish-work` when you're done."

## Do not

- Do not create a branch without pulling main first — you'll start
  from stale state.
- Do not create a branch if there are uncommitted changes on the
  current branch.
- Do not create a branch with a name that doesn't match the format
  in `.cursor/rules/git-discipline.mdc`.