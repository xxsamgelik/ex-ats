import { ref, onMounted, watch } from 'vue'

export function useTasks() {
    const newTask = ref('')
    const tasks = ref([])
    const message = ref('')
    const messageType = ref('')
    let timeout = null

    const showMessage = (text, type) => {
        message.value = text
        messageType.value = type
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            message.value = ''
            messageType.value = ''
        }, 3000)
    }

    const addTask = () => {
        if (newTask.value.trim() === '') return
        tasks.value.push({ title: newTask.value, done: false })
        newTask.value = ''
        showMessage('Задача добавлена', 'success')
    }

    const toggleTask = (index) => {
        tasks.value[index].done = !tasks.value[index].done
    }

    const removeTask = (index) => {
        tasks.value.splice(index, 1)
        showMessage('Задача удалена', 'error')
    }

    onMounted(() => {
        const saved = localStorage.getItem('tasks')
        if (saved) tasks.value = JSON.parse(saved)
    })

    watch(tasks, (newVal) => {
        localStorage.setItem('tasks', JSON.stringify(newVal))
    }, { deep: true })

    return {
        newTask,
        tasks,
        message,
        messageType,
        addTask,
        toggleTask,
        removeTask,
    }
}
