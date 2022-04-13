// import { render } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList'
import Form from './Form'
import { date } from 'yup';



const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Laundry',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Help Madi With BloomTech',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Mow the Lawn',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Mow the Lawn',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }
handleAdd = (task) => {
  //set state,change todos,make a copy of todos and add a new todo to the end
  const newTodo = {
    task: task,
    id: Date.now(),
    completed: false
  };

  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  });
}



 handleClear = () => {
  //set state!!!! 
  //Loop through all todo
  //remmove all todos that have completed == true
  // save filtered todo's
  this.setState({
    ...this.state, ////spreading state out/setting state,removed all todos that were completed and tested each one by changing it from false to true.
    todos: this.state.todos.filter(todo => {
      return (todo.completed === false);
    })
  })
}
handleToggle = (clickedId) => {

this.setState({
...this.state,
todos: this.state.todos.map(todo=> {
  if (todo.id === clickedId) {
    return {
      ...todo,
      completed: !todo.completed
    }
  } 
    return todo
  
  })
});
}
  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
     <TodoList handleToggle={this.handleToggle} todos={todos}/>
       <Form handleAdd ={this.handleAdd} />
        <button onClick ={this.handleClear}>Clear</button>
      </div>
    )
  }
}


