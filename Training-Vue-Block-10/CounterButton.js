export default {
    emits: ['increment'],
  
    template: `
      <button @click="$emit('increment')">
        Increment
      </button>
    `
  }