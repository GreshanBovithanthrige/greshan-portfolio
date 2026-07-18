# AI Engineering Guide

This repository is a production-quality engineering portfolio hosted on GitHub Pages. Treat it as a long-term software project, not a prototype.

## Project Goal

Build and maintain a professional engineering portfolio that demonstrates infrastructure engineering, Microsoft technologies, automation, documentation, and software engineering skills.

## Deployment

- Use GitHub Pages only.
- Deploy from the repository root.
- Keep `index.html` in the repository root.
- Keep `assets/` in the repository root.
- Use `docs/` for documentation only.
- Ensure the site works when `index.html` is opened locally and when it is deployed to GitHub Pages.

## Technology

Use only:

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript
- Bootstrap Icons
- Google Fonts

Never introduce:

- React, Vue, Angular, or TypeScript
- Node.js runtime, npm, webpack, or Vite
- Server-side code
- Localhost dependencies
- Absolute filesystem paths

## Design Language

- Create a GitHub-inspired design without copying GitHub.
- Maintain a professional engineering-portfolio feel.
- Use a white background with Microsoft blue accents.
- Use modern, readable typography.
- Keep animation minimal and respect reduced-motion preferences.
- Build mobile first and support responsive layouts.
- Meet accessibility expectations.
- Keep the interface clean and maintainable.

## Engineering Standards

Always:

- Understand the existing project before making changes.
- Improve existing code instead of rewriting it where practical.
- Preserve working functionality.
- Reuse existing components where practical.
- Write semantic HTML.
- Follow accessibility best practices.
- Keep CSS and JavaScript modular.
- Avoid duplicate code.
- Keep code readable, maintainable, and deployable.

Never introduce unnecessary technical debt, broken pages, placeholder implementations, or unfinished work.

## Required Workflow

For every task:

1. Understand the requested feature.
2. Modify existing files whenever practical.
3. Create files only when they improve the architecture.
4. Validate the work in proportion to the change.
5. Show every changed file.
6. Explain why each file changed.
7. Summarise the completed work.
8. Wait for approval.

Do not commit, push, or merge unless explicitly approved.

## Git Workflow

After implementation approval:

1. Stage the approved changes.
2. Create a meaningful commit.
3. Show the commit message.
4. Wait for approval before pushing.
5. Push to GitHub only after explicit approval.

## Definition of Done

Every sprint must leave the repository in a deployable state from the repository root, with all references compatible with direct GitHub Pages hosting.
