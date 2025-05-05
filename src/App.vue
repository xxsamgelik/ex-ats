<template>
  <div class="max-w-md mx-auto bg-red p-6 rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Список задач</h1>
    <form @submit.prevent="addTask" class="flex gap-2 mb-4">
      <input
          v-model="newTask"
          class="flex-1 border border-gray-300 rounded px-2 py-1"
          placeholder="Новая задача"
      />
      <button class="bg-blue-500 text-white px-4 rounded cursor-pointer">Добавить</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center mb-2">
        <div :class="{ 'line-through text-gray-500': task.done }" @click="toggleTask(index)" class="cursor-pointer">
          {{ task.title }}
        </div>
        <button @click="removeTask(index)" class="text-red-500 cursor-pointer">✕</button>
      </li>
    </ul>
    <div
        v-if="message"
        :class="[
        'fixed top-4 right-4 px-4 py-2 rounded shadow transition duration-300',
        messageType === 'success' ? 'bg-green-500' : '',
        messageType === 'error' ? 'bg-red-500' : '',
        'text-white'
      ]"
    >
      {{ message }}
    </div>
  </div>
</template>
<script setup>
import { useTasks } from './composables/useTasks'

const {
  newTask,
  tasks,
  message,
  messageType,
  addTask,
  toggleTask,
  removeTask
} = useTasks()
</script>

