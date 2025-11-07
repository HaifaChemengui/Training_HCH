import CounterButton from './CounterButton.js'

const { createApp, ref } = Vue

createApp({
  components: { CounterButton },

  setup() {
    const total = ref(0)

    const handleIncrement = () => {
      total.value++
    }

    return { total, handleIncrement }
  },

  template: `
    <h1>Block 10 Events (Child → Parent)</h1>
    <p>Total clicks: {{ total }}</p>
    <CounterButton @increment="handleIncrement" />
  `
}).mount('#app')
