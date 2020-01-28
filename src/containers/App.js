import React, { Component } from 'react';
import AddItem from '../components/AddItem/AddItem';
import TodoList from '../components/TodoList/TodoList';
import axios from 'axios';

class App extends Component {
  state = {
    items: [],
    currentText: ""
  };

  handleClick = () => {
    const items = [...this.state.items, { text: this.state.currentText }];
    this.setState({ items: items });
    // axios.post('http://localhost:6600/api/items', {
    //   name: this.state.currentText,
    //   isCompleted: false
    // });
  }; 
  
  handleChange = (event) => {
    this.setState({ currentText: event.target.value });
  }

  render() {
    return (
      <div>
        <AddItem handleClick={this.handleClick} handleChange={this.handleChange} />
        <TodoList />
      </div>
    );
  }
}

export default App;
