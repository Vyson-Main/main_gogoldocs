# Git Workflow Rules

## Pull Request Policy
- All changes must go through Pull Requests (PRs).
- Direct pushes to the main branch are prohibited.
- Each PR must:
  - Include a clear summary
  - Provide screenshots (if UI changes exist)
  - Include testing evidence
  - Reference a linked issue
- At least one reviewer approval is required before merging.
- PRs must pass all tests before approval.

# Branch Naming Rules

## Feature Branches
feature/<name>

Example:
feature/login-page

## Bug Fix Branches
bugfix/<name>

Example:
bugfix/attendance-calculation

## Hotfix Branches
hotfix/<name>

Example:
hotfix/security-patch

## Rules
- Use lowercase letters
- Separate words with hyphens
- Keep names short and descriptive
