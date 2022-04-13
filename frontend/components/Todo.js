// import React from 'react'

// export default class Todo extends React.Component {
//   render() {
//     return null
//   }
// }
import React from 'react';
// import Todo from '../components/Todo';

class Todo extends React.Component {
  handleClick = () => {
    // console.log("handle click")
    this.props.handleToggle(this.props.todo.id);
  }
  render() {
    return (<li onClick={this.handleClick}>{this.props.todo.task} { this.props.todo.completed?<span>- completed</span> : <span></span>} </li>)
  }
}
// class Todo extends React.Component {
//   render(){
//    return (<li>{this.props.todo.task} { this.props.todo.completed?<span>- completed</span> : <span></span>} </li>)
//   }; 


export default Todo;