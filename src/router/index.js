import { createRouter, createWebHashHistory } from "vue-router"
import { useAuth } from "@/components/practice/AuthDemo/store/useAuth"

import Home from "@/pages/Home.vue"
import Tasks from "@/pages/Tasks.vue"
import About from "@/pages/About.vue"
import Layouts from "@/pages/Layouts.vue"
import Pam from "@/pages/Pam.vue"
import Counter from "@/pages/projects/Counter.vue"
import Modal from "@/pages/projects/Modal.vue"
import Form from "@/pages/projects/Form.vue"
import Tabs from "@/pages/projects/Tabs.vue"
import Accordion from "@/pages/projects/Accordion.vue"
import Todo from "@/pages/projects/Todo.vue"
import Dropdown from "@/pages/projects/Dropdown.vue"
import Toast from "@/pages/projects/Toast.vue"
import Pagination from "@/pages/projects/Pagination.vue"
import SearchFilter from "@/pages/projects/SearchFilter.vue"
import FetchList from "@/pages/projects/FetchList.vue"
import Catalog from "@/pages/projects/Catalog.vue"
import CatalogItem from "@/pages/projects/CatalogItem.vue"
import Auth from "@/pages/projects/Auth.vue"
import AuthAdmin from "@/pages/projects/AuthAdmin.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Tasks,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/layouts",
    name: "layouts",
    component: Layouts,
  },
  {
    path: "/layouts/pam",
    name: "layout-pam",
    component: Pam,
    meta: { hideHeader: true },
  },
  {
    path: "/projects/counter",
    name: "project-counter",
    component: Counter,
  },
  {
    path: "/projects/modal",
    name: "project-modal",
    component: Modal,
  },
  {
    path: "/projects/form",
    name: "project-form",
    component: Form,
  },
  {
    path: "/projects/tabs",
    name: "project-tabs",
    component: Tabs,
  },
  {
    path: "/projects/accordion",
    name: "project-accordion",
    component: Accordion,
  },
  {
    path: "/projects/todo",
    name: "project-todo",
    component: Todo,
  },
  {
    path: "/projects/dropdown",
    name: "project-dropdown",
    component: Dropdown,
  },
  {
    path: "/projects/toast",
    name: "project-toast",
    component: Toast,
  },
  {
    path: "/projects/pagination",
    name: "project-pagination",
    component: Pagination,
  },
  {
    path: "/projects/search-filter",
    name: "project-search-filter",
    component: SearchFilter,
  },
  {
    path: "/projects/fetch-list",
    name: "project-fetch-list",
    component: FetchList,
  },
  {
    path: "/projects/catalog",
    name: "project-catalog",
    component: Catalog,
  },
  {
    path: "/projects/catalog/:id",
    name: "project-catalog-item",
    component: CatalogItem,
  },
  {
    path: "/projects/auth",
    name: "project-auth",
    component: Auth,
  },
  {
    path: "/projects/auth/admin",
    name: "project-auth-admin",
    component: AuthAdmin,
    beforeEnter(_to, _from, next) {
      const auth = useAuth()

      if (auth.isAdmin) {
        next()
      } else {
        next({ name: "project-auth" })
      }
    },
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
