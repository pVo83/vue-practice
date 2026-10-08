# Vue Practice

Демо: [pvo83.github.io/vue-practice](https://pvo83.github.io/vue-practice/)

Учебный практикум на Vue 3: небольшие задания, которые делаю руками — компоненты, состояние, роутер, API.

## Стек

- Vue 3 (Composition API, `script setup`)
- TypeScript — пока точечно (todo, fetch-list)
- Pinia, Vue Router
- Axios
- SCSS (BEM)

## Запуск

```sh
npm install
npm run dev
```

## Что внутри

Чуть подробнее разобраны:

- **Todo** — CRUD, фильтры, `localStorage`, `useTodos` на TS
- **Fetch list** — axios, слой API, loading / error / empty, удаление
- **Toast** — очередь, provide/inject, автозакрытие
- **Modal** — Pinia, Teleport, Escape
- **Catalog** — список → карточка через `useRoute` / params
- **Auth** — роли admin/user, скрытие UI, guard на роуте

Плюс проще: счётчик, форма, табы, аккордеон, dropdown, поиск, пагинация.
