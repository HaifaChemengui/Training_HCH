class TodoApp extends HTMLElement {
    constructor() {
      super();
  
      
      this.attachShadow({ mode: 'open' });
  
      
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
      //  HTML + CSS
      this.shadowRoot.innerHTML = `
        <style>
          h2 { color: #0078D7; text-align: center; }
          input { width: 70%; padding: 5px; font-size: 1em; }
          button { padding: 5px 10px; cursor: pointer; }
          ul { list-style: none; padding: 0; }
          li { display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid #ccc; }
          li button { background-color: red; color: white; border: none; }
        </style>
  
        <h2>Todo List</h2>
        <div>
          <input type="text" placeholder="Ajouter une tâche"/>
          <button id="addBtn">Ajouter</button>
        </div>
        <ul id="taskList"></ul>
      `;
    }
  
    connectedCallback() {
   
      this.input = this.shadowRoot.querySelector('input');
      this.addBtn = this.shadowRoot.querySelector('#addBtn');
      this.taskList = this.shadowRoot.querySelector('#taskList');
  
      
      this.renderTasks();
  
     
      this.addBtn.addEventListener('click', () => this.addTask());
      this.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.addTask();
      });
    }
  
    renderTasks() {
      this.taskList.innerHTML = '';
      this.tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${task}</span>
          <button data-index="${index}">Supprimer</button>
        `;
        li.querySelector('button').addEventListener('click', (e) => {
          this.removeTask(e.target.dataset.index);
        });
        this.taskList.appendChild(li);
      });
    }
  
    addTask() {
      const value = this.input.value.trim();
      if (!value) return;
      this.tasks.push(value);
      this.updateStorage();
      this.renderTasks();
      this.input.value = '';
    }
  
    removeTask(index) {
      this.tasks.splice(index, 1);
      this.updateStorage();
      this.renderTasks();
    }
  
    updateStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  

  customElements.define('todo-app', TodoApp);