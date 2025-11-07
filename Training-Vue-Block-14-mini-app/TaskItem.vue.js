const { defineComponent } = Vue;

export default defineComponent({
  name: 'TaskItem',
  props: { task: Object },
  emits: ['delete-task', 'toggle-task'],
  template: `
    <div class="task-item">
      <input type="checkbox" :checked="task.done" @change="$emit('toggle-task')" />
      <span :class="{ completed: task.done }">{{ task.text }}</span>
      <button @click="$emit('delete-task')">
        <slot name="button-content">Delete</slot>
      </button>
    </div>
  `
});