import TaskItem from './TaskItem.vue.js';
const { defineComponent, ref, onMounted } = Vue;

export default defineComponent({
  name: 'App',
  components: { TaskItem },
  template: `
    <div class="todo-app">
      <h1>Todo App Block 14</h1>

      <!-- Ajouter tâche -->
      <input v-model="newTask" placeholder="Add a task" />
      <button @click="addTask">Add</button>

      <!-- Liste des tâches -->
      <div v-if="tasks.length > 0">
        <TaskItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          @delete-task="deleteTask(index)"
          @toggle-task="toggleTask(index)"
        >
          <template #button-content>❌</template>
        </TaskItem>
      </div>

      <p v-else>No tasks yet</p>
    </div>
  `,
  setup() {
    const newTask = ref('');
    const tasks = ref([]);

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push({ text: newTask.value, done: false });
        newTask.value = '';
      }
    };

    const deleteTask = (index) => tasks.value.splice(index, 1);
    const toggleTask = (index) => tasks.value[index].done = !tasks.value[index].done;

    onMounted(() => console.log('Todo App loaded'));

    return { newTask, tasks, addTask, deleteTask, toggleTask };
  }
});
