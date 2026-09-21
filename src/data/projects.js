export const projects = [
  {
    slug: "counter",
    title: "Счётчик",
    skills: ["ref", "computed", "события"],
    description: "Инкремент, декремент, сброс. Computed для чётности/цвета.",
  },
  {
    slug: "modal",
    title: "Модалка",
    skills: ["Teleport", "Pinia", "composable"],
    description: "Состояние в Pinia. Оверлей, Escape, Teleport.",
  },
  {
    slug: "form",
    title: "Форма с валидацией",
    skills: ["v-model", "watch", "валидация"],
    description: "Имя, email, пароль. Ошибки под полями, disabled submit.",
  },
  {
    slug: "tabs",
    title: "Табы",
    skills: ["props", "slots", "состояние"],
    description: "Переключение панелей, активный таб, слоты.",
  },
  {
    slug: "accordion",
    title: "Аккордеон",
    skills: ["v-for", "состояние", "анимация"],
    description: "Список секций, одна или несколько открытых.",
  },
  {
    slug: "todo",
    title: "Todo-список",
    skills: ["CRUD", "composable", "TypeScript", "localStorage"],
    description: "CRUD и фильтры. Логика в composable useTodos на TypeScript.",
  },
  {
    slug: "dropdown",
    title: "Dropdown",
    skills: ["клик снаружи", "клавиатура", "a11y"],
    description: "Меню по клику, закрытие снаружи, роли ARIA.",
  },
  {
    slug: "toast",
    title: "Toast",
    skills: ["provide/inject", "очередь", "таймеры"],
    description: "Стек уведомлений success/error/info с автоскрытием.",
  },
  {
    slug: "pagination",
    title: "Пагинация",
    skills: ["ref", "computed", "slice"],
    description: "Список по страницам: slice, prev/next, активная страница.",
  },
  {
    slug: "search-filter",
    title: "Поиск и фильтр",
    skills: ["computed", "v-model"],
    description: "Клиентский поиск по списку + фильтр по категории.",
  },
  {
    slug: "fetch-list",
    title: "Загрузка списка (API)",
    skills: ["async", "loading", "error", "retry", "axios"],
    description: "Fetch с состояниями loading / data / error(+retry) / empty.",
  },
  {
    slug: "catalog",
    title: "Каталог (useRoute / useRouter)",
    skills: ["useRouter", "useRoute", "params"],
    description: "Список → push с id. Карточка читает id из URL через useRoute.",
  },
  {
    slug: "auth",
    title: "Auth / роли",
    skills: ["Pinia", "router guard", "roles"],
    description: "Логин-заглушка, роли admin/user, скрытие UI и защита роута.",
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null
}
