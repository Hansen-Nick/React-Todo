import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import todoData from './TodoData'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoData,
      completed: false
    }
  }

  handleAddButton = (ev, todoName) => {
    ev.preventDefault();
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({todoData: [...this.state.todoData, newTodo]})
  }

  completeToggle = (todoItemID) => {
    this.setState({
      todoData: this.state.todoData.map( item => {
        if (item.id === todoItemID) {
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({todoData: this.state.todoData.filter( item => item.completed === false )})
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} completeToggle={this.completeToggle}/>
        <TodoForm handleAddButton={this.handleAddButton} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
