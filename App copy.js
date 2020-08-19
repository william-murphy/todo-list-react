import React from 'react';
import Item from './Item.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      iter: 0,
      value: "",
      list: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (event) event.preventDefault();
    //console.log(this.refs.userInput.value);
    let newItem = <Item key={this.state.iter} value={this.refs.userInput.value} />
    this.refs.userInput.value = "";
    let joined = this.state.list.concat(newItem);
    this.setState(prevState => {
      return {
        iter: prevState.iter + 1,
        value: "",
        list: joined
      };
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <h1>To-Do List in React</h1>
        <p>Made by Will Murphy</p>
        <br />
        <ul>
          {this.state.list}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="userInput" placeholder="I need to..." />
          <input type="submit" value="Add Task"/>
        </form>
      </div>
    );
  }
}

export default App;
