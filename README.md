# Vue Practice

Портфолио практических заданий на Vue 3.  
Каждое задание — отдельный мини-проект: UI-компоненты, состояние, composables, работа с API.

## Стек

- Vue 3 (Composition API, `script setup`)
- TypeScript (точечно: todo, fetch-list)
- Pinia, Vue Router
- Axios
- SCSS (BEM)

## Запуск

```sh
npm install
npm run dev
```

## Что внутри

- **Todo** — CRUD, фильтры, `localStorage`, логика в composable `useTodos` (TS)
- **Fetch list** — REST через axios, слой API, состояния loading / error / empty
- **Toast** — очередь уведомлений, provide/inject, автозакрытие
- **Modal** — Pinia, Teleport, Escape (composable)
- **Catalog** — список → карточка, `useRouter` / `useRoute`, params
- **Auth** — Pinia, роли admin/user, скрытие UI и защита роута

Также: счётчик, форма, табы, аккордеон, dropdown, поиск/фильтр, пагинация.
