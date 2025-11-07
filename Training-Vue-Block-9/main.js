import UserCard from './UserCard.js';
const { createApp } = Vue;

createApp({
  components: { UserCard },
  template: `<UserCard name="Haifa" age="18" />`
}).mount('#app');