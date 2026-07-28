# 02 — Angular

Angular CLI commands used in this project.

---

## Prerequisites

| Tool | Version |
|---|---|
| Node.js | 20.x |
| npm | 10.x |
| Angular CLI | 18.x (project-local via npx) |

---

## Install dependencies

```bash
cd frontend
npm install
```

---

## Development server

```bash
cd frontend
npx ng serve
```

Application starts at: `http://localhost:4200`

Hot module replacement is enabled by default.

---

## Build

### Development build

```bash
cd frontend
npx ng build --configuration development
```

Output: `frontend/dist/luxsoft-dxc-demo/`

### Production build

```bash
cd frontend
npx ng build --configuration production
```

Production build includes:
- AOT compilation
- Tree shaking
- Output hashing
- Bundle optimization

---

## Lint

```bash
cd frontend
npx ng lint
```

---

## Format (Prettier)

```bash
cd frontend
npm run format
```

Formats all `.ts` and `.html` and `.scss` files under `src/`.

---

## Generate components (Angular CLI schematics)

### Component

```bash
cd frontend
npx ng generate component <path/name> --standalone --change-detection OnPush
```

Example — add a feature component:

```bash
npx ng generate component features/exchange-rate/exchange-rate-list \
  --standalone \
  --change-detection OnPush
```

### Service

```bash
cd frontend
npx ng generate service core/services/<name>
```

### Guard

```bash
cd frontend
npx ng generate guard core/guards/<name> --functional
```

### Pipe

```bash
cd frontend
npx ng generate pipe shared/pipes/<name> --standalone
```

### Directive

```bash
cd frontend
npx ng generate directive shared/directives/<name> --standalone
```

---

## Project structure overview

```
frontend/src/app/
├── core/           # Singleton infrastructure (services, interceptors, guards)
├── shared/         # Reusable UI (components, pipes, directives)
├── features/       # Business features — lazy-loaded route modules
└── layouts/        # Application layout wrappers
```

See `docs/development/milestones/M1.0-angular-foundation.md` for full architecture details.

---

## Environment configuration

| File | Purpose |
|---|---|
| `src/environments/environment.ts` | Development config (local backend URL) |
| `src/environments/environment.production.ts` | Production config (relative `/api` URL) |

The Angular build system swaps environment files automatically based on `--configuration`.

---

## Routing

Routes are defined in `src/app/app.routes.ts`.

All feature routes use `loadComponent` or `loadChildren` for lazy loading:

```typescript
{
  path: 'feature-name',
  loadChildren: () =>
    import('./features/feature-name/feature-name.routes')
      .then(m => m.FEATURE_NAME_ROUTES),
}
```

To add a new feature route, append an entry to `APP_ROUTES` in `app.routes.ts`.
