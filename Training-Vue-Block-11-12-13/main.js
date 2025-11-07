import Card from './Card.js'
import ToggleButton from './ToggleButton.js'
import LifecycleLogger from './LifecycleLogger.js'

const app = Vue.createApp({
  components: {
    Card,
    ToggleButton,
    LifecycleLogger
  },

  data() {
    return {
      showLifecycle: true
    }
  },

  template: `
    <h1>Blocks 11, 12 & 13</h1>

    <h2>Block 11  Card with Slots</h2>
    <Card>
      <h3>Title inside Card</h3>
      <p>Vue Training @ Neoxam ❤️</p>
    </Card>

    <h2>Block 12Toggle Button</h2>
    <ToggleButton />

    <h2>Block 13 Lifecycle Logger</h2>
    <button @click="showLifecycle = !showLifecycle">
      Toggle Lifecycle Component
    </button>
    <LifecycleLogger v-if="showLifecycle" />
  `
})

app.mount('#app')