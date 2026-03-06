# @uwckit — Universal Web Component Kit

A **TypeScript-first** monorepo of cross-framework UI components, built on Lit web components with native wrappers for Angular, React, and Vue.

```
packages/
├── code-core/     @uwckit/code-core     — Lit web components (framework-agnostic)
├── code-angular/  @uwckit/code-angular  — Angular wrappers
├── code-react/    @uwckit/code-react    — React wrappers
└── code-vue/      @uwckit/code-vue      — Vue 3 wrappers
```

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (workspaces support)

### Install

```bash
# Clone the repo
git clone https://github.com/your-org/uwckit.git
cd uwckit

# Install all workspace dependencies
npm install
```

---

## 🛠 Development

Each package has a Vite dev server with a live demo page.

### Run all dev servers concurrently

```bash
npm run dev
```

### Run individual packages

```bash
# Lit core components  → http://localhost:3001
npm run dev:core

# Angular wrappers     → http://localhost:3002
npm run dev:angular

# React wrappers       → http://localhost:3004
npm run dev:react

# Vue wrappers         → http://localhost:3003
npm run dev:vue
```

---

## 🏗 Build

```bash
# Build everything (core must build first)
npm run build:core
npm run build:angular
npm run build:react
npm run build:vue

# OR build all at once (respects dependency order)
npm run build
```

Build outputs land in `packages/<name>/dist/`.

---

## 📦 Components

| Component     | `uwc-button` | `uwc-badge` | `uwc-card` | `uwc-input` |
|---------------|:---:|:---:|:---:|:---:|
| code-core     | ✅  | ✅  | ✅  | ✅  |
| code-angular  | ✅  | ✅  | ✅  | ✅  |
| code-react    | ✅  | ✅  | ✅  | ✅  |
| code-vue      | ✅  | ✅  | ✅  | ✅  |

---

## 🚀 Publishing to npm

### One-time setup

1. Create an npm account and organisation scope `@uwckit`:
   ```bash
   npm login
   npm org create uwckit   # if scope doesn't exist
   ```

2. Generate an npm **Automation token** (for CI):
   - npm → Account Settings → Access Tokens → Generate New Token → **Automation**
   - Copy the token value.

3. Add the token as a GitHub repository secret:
   - GitHub repo → Settings → Secrets and variables → Actions → **New repository secret**
   - Name: `NPM_TOKEN`, Value: the token you copied.

### Manual publish (first time / emergency)

```bash
# Make sure you're logged in
npm login

# Build everything
npm run build:core
npm run build:angular && npm run build:react && npm run build:vue

# Publish all packages
npm publish -w packages/code-core
npm publish -w packages/code-angular
npm publish -w packages/code-react
npm publish -w packages/code-vue
```

### Automated publish with Changesets (recommended)

This monorepo uses [Changesets](https://github.com/changesets/changesets) for versioning and changelogs.

#### Day-to-day flow

```bash
# 1. After making changes, add a changeset
npm run changeset
#    → Select affected packages
#    → Choose semver bump (patch/minor/major)
#    → Write a summary of the change

# 2. Commit the changeset file with your PR
git add .changeset/
git commit -m "feat: add new uwc-tooltip component"
git push
```

#### What happens on merge to `main`

The `release.yml` GitHub Action runs and does one of two things:

| Condition | Action |
|-----------|--------|
| Unreleased changesets exist | Opens / updates a **"Version Packages" PR** that bumps versions & updates `CHANGELOG.md` |
| "Version Packages" PR is merged | **Publishes to npm** automatically and creates GitHub releases |

---

## 🔄 CI/CD Workflows

| File | Trigger | What it does |
|------|---------|--------------|
| `.github/workflows/ci.yml` | Push / PR to `main`, `develop` | Lint → Type check → Build → Test |
| `.github/workflows/release.yml` | Push to `main` | Build → Changesets release action |
| `.github/workflows/preview.yml` | Pull Requests | Build → `npm pack --dry-run` → PR comment |

### Required GitHub Secrets

| Secret | Where to get it |
|--------|----------------|
| `NPM_TOKEN` | npm → Account Settings → Access Tokens (Automation type) |
| `GITHUB_TOKEN` | Automatically provided by GitHub Actions — no setup needed |

---

## 🔧 Workspace Commands

```bash
# Run a command in a single package
npm run build -w packages/code-core
npm run test  -w packages/code-vue

# Add a dependency to one package
npm install some-lib -w packages/code-react

# Add a shared dev dependency to root
npm install -D typescript --save
```

---

## 📋 Adding a New Component

1. Create the Lit component in `packages/code-core/src/components/`
2. Export it from `packages/code-core/src/index.ts`
3. Create framework wrappers in each `packages/code-{fw}/src/components/`
4. Export from each package's `src/index.ts`
5. Add a usage example to each package's demo page
6. Run `npm run changeset` and describe the new component
7. Open a PR

---

## 📁 Project Structure

```
uwckit/
├── .changeset/          # Changesets configuration
├── .github/
│   └── workflows/
│       ├── ci.yml       # Continuous Integration
│       ├── release.yml  # npm publish via Changesets
│       └── preview.yml  # PR pack preview
├── packages/
│   ├── code-core/       # @uwckit/code-core (Lit)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   ├── index.html   # Dev demo page
│   │   ├── vite.config.ts
│   │   └── package.json
│   ├── code-angular/    # @uwckit/code-angular
│   ├── code-react/      # @uwckit/code-react
│   └── code-vue/        # @uwckit/code-vue
├── tsconfig.json        # Root TS config (extended by packages)
├── .npmrc               # npm access & provenance settings
└── package.json         # Root — workspaces + scripts
```

---

## 📄 License

MIT © uwckit contributors
