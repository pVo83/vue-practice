export const layouts = [
  {
    slug: "pam",
    title: "PAM",
    skills: ["SCSS", "BEM", "адаптив", "layout"],
    description: "Каркас кабинета: сайдбар, шапка, зона контента.",
  },
]

export function getLayoutBySlug(slug) {
  return layouts.find((item) => item.slug === slug) ?? null
}
