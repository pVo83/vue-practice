import { computed, ref, watch } from "vue"

export function useTodos() {
  interface Todo {
    id: number
    text: string
    done: boolean
  }

  const newTodoText = ref("")
  const filter = ref("all")
  const saved = localStorage.getItem("todos")
  const todos = ref<Todo[]>(saved ? JSON.parse(saved) : [])

  watch(
    todos,
    (value) => {
      localStorage.setItem("todos", JSON.stringify(value))
    },

    { deep: true },
  )

  function addTodo() {
    const text = newTodoText.value.trim()
    if (!text) return

    todos.value.push({
      id: Date.now(),
      text: text,
      done: false,
    })

    newTodoText.value = ""
  }

  const todosFilter = computed(() => {
    if (filter.value === "active") {
      return todos.value.filter((todo) => !todo.done)
    }
    if (filter.value === "completed") {
      return todos.value.filter((todo) => todo.done)
    }

    return todos.value
  })

  function removeTodo(todoId: number) {
    todos.value = todos.value.filter((todo) => todo.id !== todoId)
  }

  return {
    newTodoText,
    filter,
    todos,
    todosFilter,
    addTodo,
    removeTodo,
  }
}
