# NOVA Admin

> پنل مدیریت فروشگاه NOVA با React، Vite و TypeScript (چالش فنی Frontend).

Admin panel for the NOVA online store, built as part of a frontend technical
challenge. It uses [FakeStoreAPI](https://fakestoreapi.com) as a mock backend.

Companion project: **NOVA Store** (Next.js storefront), `<link-to-nova-store-repo>`.

## Tech Stack

React 19 · Vite · TypeScript · React Router 7 · Axios · styled-components 6 ·
Formik + Yup · Redux Toolkit (installed, wiring in progress) · Vazirmatn font
(`@fontsource-variable/vazirmatn`)

## Features

Status is listed honestly, so you know what to expect.

- [x] Products list (API data, search, client-side pagination, loading / error / empty / no-results states)
- [x] Product details modal (view)
- [x] Product delete with confirmation modal (extra, see Assumptions)
- [x] Product create form (Formik + Yup, localized validation messages)
- [x] Users list (API data, search, loading / error / empty / no-results states)
- [x] FA/EN dictionary with a typed `Dictionary` shared by both languages
- [x] Light/Dark theme tokens, applied through `ThemeProvider`
- [ ] Login against `/auth/login` with token handling 🚧
- [ ] Route protection bound to auth state (currently a placeholder) 🚧
- [ ] User create form 🚧
- [ ] Redux Toolkit slices for theme, language, auth and lists 🚧
- [ ] Working theme and language switchers (UI is in place, not yet connected) 🚧
- [ ] Edit product (button present but disabled; out of scope per the brief)

## Getting Started

### Prerequisites

- Node.js >= 20.19 (required by current Vite)
- npm >= 10

### Installation

```bash
git clone <repo-url>
cd nova-admin
cp .env.example .env
npm install
```

On Windows CMD use `copy .env.example .env` instead of `cp`.

### Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server (http://localhost:5173) |
| `npm run build`   | Type-check and create a production build     |
| `npm run preview` | Preview the production build                 |
| `npm run lint`    | Run oxlint                                   |

## Environment Variables

| Name                | Description         | Example                    |
| ------------------- | ------------------- | -------------------------- |
| `VITE_API_BASE_URL` | Base URL of the API | `https://fakestoreapi.com` |

Restart the dev server after changing `.env`. Variables prefixed with `VITE_`
are bundled into client code, so **no secrets** are stored there.

## Project Structure

```
src/
├── assets/          fonts, icons, images
├── components/      page-specific components (layout, products, users)
├── dictionary/      fa/en translations and the shared Dictionary type
├── modals/          modal contents (product details, delete confirmation, add product)
├── pages/           route-level pages (login, products, users, notFound)
├── redux/           store and slices (in progress)
├── routes/          centralized route definitions and ProtectedRoute
├── shared/          reusable UI (modal, table styles, pagination, search input, form field, theme)
├── storage/         persisted client data helpers (in progress)
├── types/           interfaces; types/Enums holds enums
├── utils/
│   ├── api/         axios instance
│   ├── services/    API calls and UI-independent helpers
│   └── constants/   shared constants
└── validations/     Yup schemas
```

Layering rules used throughout:

- **Pages** own data fetching and state, and compose components.
- **Components / Shared** receive data and callbacks through props and know nothing about the API.
- **Services** know the endpoints and nothing about React.

Folder names are lowercase (e.g. `utils`, `pages`) instead of the capitalized
names in the brief, to stay consistent across case-sensitive file systems.

## State Management

- Local UI state (search text, page number, open modals, form values) lives in
  `useState` or Formik, in the lowest component that needs it.
- Server data for each page is fetched in the page and held in local state for now.
- Redux Toolkit is installed for global state (auth, theme, language, lists).
  🚧 This is the next step; components already receive data via props, so
  moving the lists into slices only changes the pages, not the tables or modals.

## API Layer

- One `axiosInstance` (`utils/api`) reads the base URL from `VITE_API_BASE_URL`
  and sets a timeout and default headers.
- Each resource has a service file (`productService`, `userService`) with typed
  functions (`getProducts`, `createProduct`, `deleteProduct`, `getCategories`,
  `getUsers`). All requests go through the axios instance.
- Responses are typed with TypeScript interfaces; `any` is not used.
- 🚧 Centralized error handling through an axios interceptor is planned.

## Internationalization

- All static UI text comes from `dictionary/fa.ts` and `dictionary/en.ts`. The
  Persian dictionary is typed from the English one, so a missing key is a
  compile error.
- Dynamic messages use `{{placeholder}}` and the `interpolate` helper.
- Product categories are translated through the dictionary.
- Prices use `Intl.NumberFormat` with the active locale.
- Product titles and descriptions come from FakeStoreAPI in English only and
  are displayed as-is.

## FakeStoreAPI Limitations & Decisions

| Limitation                        | Our approach                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------- |
| POST and DELETE are not persisted | On success the change is applied to the in-memory list. It resets on refresh. |
| POST always returns the same `id` | A local id (`max id + 1`) is generated so list keys stay unique.              |
| No real pagination parameters     | Pagination is client-side on the fetched array (4 items per page).            |
| Product prices are USD, no Toman  | Prices are shown in USD, not converted with an invented rate.                 |
| No user avatar images             | The users table shows text data only.                                         |

## Assumptions & Out of Scope

- The admin panel is desktop-only (minimum width 1280px), as allowed by the brief.
- View and delete product actions were added beyond the brief; delete only
  affects local state because the API does not persist it.
- Edit product is intentionally disabled (not required by the brief).
- Fonts are installed through `@fontsource-variable/vazirmatn` instead of
  committing font files to `assets/fonts`. It keeps the repo light and makes
  updates a one-line change. The folder is kept to match the required structure.
- Logical CSS properties (`margin-inline`, `padding-inline`, `text-align: start`)
  are used so the layout flips correctly between RTL and LTR.
- Pre-existing out-of-scope items: payments, orders, inventory, multi-level
  roles and a custom backend.

## Time Spent

🚧 To be filled in before submission (hours per day and per area).

## Screenshots

🚧 To be added: login, products (light / dark, FA / EN), users, add-product form.
