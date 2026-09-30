export const attentionItems = [
  {
    id: 1,
    title: "Истекает учётка root@db-prod",
    meta: "Через 2 дня · критично",
    icon: "#key-round",
    tone: "error",
  },
  {
    id: 2,
    title: "MFA выключен у 3 сотрудников",
    meta: "Политика кабинета",
    icon: "#circle-alert",
    tone: "warning",
  },
  {
    id: 3,
    title: "Ошибка сессии SSH #1842",
    meta: "Сегодня 11:24 · timeout",
    icon: "#monitor",
    tone: "error",
  },
]

export const healthItems = [
  {
    id: 1,
    title: "db-prod-01",
    meta: "10.0.1.14",
    icon: "#monitor",
    tone: "error",
    status: "Офлайн",
  },
  {
    id: 2,
    title: "jump-host-eu",
    meta: "10.0.2.8",
    icon: "#monitor",
    tone: "error",
    status: "Офлайн",
  },
  {
    id: 3,
    title: "win-rdp-finance",
    meta: "10.0.3.21",
    icon: "#monitor",
    tone: "warning",
    status: "Обслуживание",
  },
]

export const activityItems = [
  {
    id: 1,
    title: "Одобрен запрос #412 · bastion-ssh",
    meta: "Ирина Ковалёва · 12 мин назад",
    icon: "#circle-check",
    tone: "success",
  },
  {
    id: 2,
    title: "Сессия SSH завершена · db-prod-01",
    meta: "Владислав Польшин · 28 мин назад",
    icon: "#monitor",
    tone: "muted",
  },
  {
    id: 3,
    title: "Сбой подключения RDP · win-rdp-finance",
    meta: "Система · 1 ч назад",
    icon: "#circle-alert",
    tone: "error",
  },
]

export const sessionItems = [
  {
    id: 1,
    title: "bastion-ssh · prod",
    meta: "Владислав Польшин · SSH · 14:02",
    icon: "#monitor",
    tone: "success",
    status: "Активна",
  },
]

export const requestItems = []
