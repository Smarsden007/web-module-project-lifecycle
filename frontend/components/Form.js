// import React from 'react'

// export default class Form extends React.Component {
//   render() {
//     return null
//   }
// }
import React from 'react'

export default class Form extends React.Component {
  //you must create a constructor for the handleAdd to accept something
  constructor(){
    super()
    this.state = {
      input: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);

    // console.log("submit") this works so we will no go to app.js to add a handlerAdd
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }
  render() {
    return (
      <form>
        {/* here you must put the handleChange function to input new value */}
  <input onChange={this.handleChange}/>
  <button onClick={this.handleSubmit}>Add</button>
</form>);
  }
}
