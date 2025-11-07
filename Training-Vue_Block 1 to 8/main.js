//Block 1
/*const { createApp } = vue

createApp({
    data(){
    return {
        message: "Hello vue!"
    }
}
})
.mount("#")
*/
//Block2
/*const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'My Vue App'
    };
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <img src="https://vuejs.org/images/logo.png" :alt="title" width="100">
    </div>
  `
}).mount('#app');*/

//Block 3
/*
const { createApp } = Vue;
createApp({
  data() {
    return {
      tools: [] //['Learn Vue', 'Practice Vue', 'Build a mini app']
    };
  },
  template: `
    <div>
      <ul>
        <li v-for="todo in tools" :key="todo">{{ todo }}</li>
      </ul>
      <p v-if="tools.length === 0">No tasks yet</p>
    </div>
  `
}).mount('#app'); */

//Block 4

/*const { createApp } = Vue;
 createApp({
    data() {
        return {
            count: 0
        };
    },
    template: `
    <div>
    <button @click="count ++"> Click me</button>
    <p> You clicked {{ count }} times </p>
    </div>
    `
 }).mount ('#app');*/

 //Block 5
 /*const {createApp, ref, reactive} =Vue;
  createApp ({
    setup(){
        const name = ref('');
const person =reactive({
    firstName: 'Haifa',
    lastName: 'Chemengui'
});

return{name, person};
    },
template:`
<div>
    <input v-model ="name" placeholder = "enter your name">
    <p>Hello, {{ name }}
    <p>{{ person.firstName }} {{ person.lastName }}</p>
</div>
`

  }).mount('#app');*/

  //Block 6
 /* const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const firstName = ref('');
      const lastName = ref('');
  
      const fullName = computed(() => `${firstName.value} ${lastName.value}`);
  
      return { firstName, lastName, fullName };
    },
    template: `
      <div>
        <input v-model="firstName" placeholder="First name">
        <input v-model="lastName" placeholder="Last name">
        <p>Hello {{ fullName }}</p>
      </div>
    `
  }).mount('#app');*/

  //Block 7
  /*const { createApp, ref, watch } = Vue;

  createApp({
    setup() {
      const search = ref('');
  
      watch(search, (newValue) => {
        console.log(`Searching for: ${newValue}`);
      });
  
      return { search };
    },
    template: `
      <div>
        <input v-model="search" placeholder="Search...">
        <p>Type something to trigger the watcher</p>
      </div>
    `
  }).mount('#app');*/

  //Block 8
  const { createApp, ref } = Vue;

createApp({
  setup() {
    const username = ref('');
    const password = ref('');

    return { username, password };
  },
  template: `
    <div>
      <h2>Login Form</h2>
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password" type="password">
      <p>Username: {{ username }}</p>
      <p>Password: {{ password }}</p>
    </div>
  `
}).mount('#app');


