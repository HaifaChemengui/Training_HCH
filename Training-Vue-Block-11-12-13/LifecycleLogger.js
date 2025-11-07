export default {
    template: `
      <div>
        <p>Lifecycle component is active</p>
      </div>
    `,
    mounted() {
      console.log('Mounted')
    },
    updated() {
      console.log('Updated')
    },
    unmounted() {
      console.log('Destroyed')
    }
  }