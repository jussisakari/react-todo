import React, { Component } from 'react'
import axios from 'axios';

import ListItem from '../ListItem/ListItem';

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.getNotes();
  };

  getNotes() {
    //axios.get('/assets/testdata/todoitems.json')
    axios.get('http://localhost:6600/api/items')
      .then(response => {
        console.log(response.data);
        this.setState({ items: response.data });
   });
  };

  handleDeleteClick = (id) => {
    console.log('about to delete', id);
    const items = [...this.state.items];
    items.splice(items.findIndex(item => item.id === id), 1);
    this.setState({ items: items });
  };

  handleDoneClick = (id) => {
    console.log('about to mark as done', id);
    const items = [...this.state.items];
    const index = items.findIndex(item => item.id === id);
    items[index].isCompleted = true;
    this.setState({ items: items });
  };
  
  render() {
    if (!this.state.items) {
      return <p>Loading...</p>;
    }
   
    return this.state.items.map((item) => {
      console.log(item);
      return <ListItem 
                key={item.id} 
                id={item.id}
                text={item.name} 
                delete={this.handleDeleteClick}
                markAsDone={this.handleDoneClick} />
      })
  };

}

export default TodoList;