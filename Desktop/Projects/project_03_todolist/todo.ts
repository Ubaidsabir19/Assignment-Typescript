class Todo {
    private todos: string[];
  
    constructor() {
      this.todos = [];
    }
  
    addTask(task: string): void {
      this.todos.push(task);
    }
  
    removeTask(task: string): void {
      const index = this.todos.indexOf(task);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  
    getTasks(): string[] {
      return this.todos;
    }
  }
  
  // Usage
  const todoList = new Todo();
  todoList.addTask("Complete assignment");
  todoList.addTask("Buy groceries");
  todoList.addTask("Call a friend");
  console.log(todoList.getTasks());  
  todoList.removeTask("Buy groceries");
  console.log(todoList.getTasks()); 