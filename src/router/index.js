import { createRouter, createWebHashHistory } from "vue-router"

import Home from "@/pages/Home.vue"
import TasksPage from "@/pages/TasksPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import CounterPage from "@/pages/projects/CounterPage.vue"
import ModalPage from "@/pages/projects/ModalPage.vue"
import FormPage from "@/pages/projects/FormPage.vue"
import TabsPage from "@/pages/projects/TabsPage.vue"
import AccordionPage from "@/pages/projects/AccordionPage.vue"
import TodoPage from "@/pages/projects/TodoPage.vue"
import DropdownPage from "@/pages/projects/DropdownPage.vue"
import ToastPage from "@/pages/projects/ToastPage.vue"
import PaginationPage from "@/pages/projects/PaginationPage.vue"
import SearchFilterPage from "@/pages/projects/SearchFilterPage.vue"
import FetchListPage from "@/pages/projects/FetchListPage.vue"
import CatalogPage from "@/pages/projects/CatalogPage.vue"
import CatalogItemPage from "@/pages/projects/CatalogItemPage.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/projects/counter",
    name: "project-counter",
    component: CounterPage,
  },
  {
    path: "/projects/modal",
    name: "project-modal",
    component: ModalPage,
  },
  {
    path: "/projects/form",
    name: "project-form",
    component: FormPage,
  },
  {
    path: "/projects/tabs",
    name: "project-tabs",
    component: TabsPage,
  },
  {
    path: "/projects/accordion",
    name: "project-accordion",
    component: AccordionPage,
  },
  {
    path: "/projects/todo",
    name: "project-todo",
    component: TodoPage,
  },
  {
    path: "/projects/dropdown",
    name: "project-dropdown",
    component: DropdownPage,
  },
  {
    path: "/projects/toast",
    name: "project-toast",
    component: ToastPage,
  },
  {
    path: "/projects/pagination",
    name: "project-pagination",
    component: PaginationPage,
  },
  {
    path: "/projects/search-filter",
    name: "project-search-filter",
    component: SearchFilterPage,
  },
  {
    path: "/projects/fetch-list",
    name: "project-fetch-list",
    component: FetchListPage,
  },
  {
    path: "/projects/catalog",
    name: "project-catalog",
    component: CatalogPage,
  },
  {
    path: "/projects/catalog/:id",
    name: "project-catalog-item",
    component: CatalogItemPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    return { left: 0, top: 0 }
  },
})

export default router
