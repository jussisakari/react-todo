import React, { Component } from 'react';
import AddItem from './AddItem/AddItem';
import ListItem from './ListItem/ListItem';

class App extends Component {
  state = {
    todoItems: [
      { text: "just a default note"}
    ],
    currentText: ""
  };

  handleClick = () => {
    const items = [...this.state.todoItems, { text: this.state.currentText }];
    this.setState({ todoItems: items });
  }; 
  
  handleChange = (event) => {
    this.setState({ currentText: event.target.value });
  }

  render() {
    let todoItems = null;
    todoItems = (
      <div>
        {this.state.todoItems.map((todo) => {
          return <ListItem text={todo.text}/>
        })}
      </div>
    );

    return (
      <div>
        <AddItem handleClick={this.handleClick} handleChange={this.handleChange} />
        {todoItems}
      </div>
    );
  }
}

export default App;
