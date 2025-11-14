<template>
  <div class="min-h-screen flex flex-col items-center p-6">
    <h1 class="text-3xl font-bold mb-6 text-blue-600">My Todo App</h1>

    <div class="w-full max-w-md bg-white p-4 rounded-lg shadow">
      <form @submit.prevent="addTodo" class="flex mb-4">
        <input
          v-model="newTodo"
          type="text"
          placeholder="Add a new todo..."
          class="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      <ul>
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @toggle="toggleTodo(index)"
          @remove="removeTodo(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from './components/TodoItem.vue'

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  if (newTodo.value.trim() === '') return
  todos.value.push({ text: newTodo.value, done: false })
  newTodo.value = ''
}

function toggleTodo(index) {
  todos.value[index].done = !todos.value[index].done
}

function removeTodo(index) {
  todos.value.splice(index, 1)
}
</script>