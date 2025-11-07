export default {
    data() {
      return {
        isActive: false
      }
    },
    template: `
      <button 
        @click="isActive = !isActive" 
        :class="{ active: isActive }"
        style="padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;"
      >
        Click me
      </button>
    `,
    mounted() {
      // ajout d'un style dynamique pour .active
      const style = document.createElement('style')
      style.textContent = `
        .active {
          background-color: green;
          color: white;
        }
      `
      document.head.appendChild(style)
    }
  }