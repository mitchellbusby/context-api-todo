import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';
import {TodoFilterPane} from './TodoFilterPane';

const TODOS = [
  {item: 'Eat dinner', status: 'IN_PROGRESS'},
  {item: 'Write Javascript', status: 'IN_PROGRESS'},
  {item: 'Go to sleep', status: 'DONE'},
];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: TODOS,
      currentlySelectedFilter: 'ALL',
    };
  }
  
  onChangeFilter = newFilter => () => {
    this.setState({
      currentlySelectedFilter: newFilter
    });
  }
  
  onToggleTodo = (toCheck, item) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.item === item) {
          return {
            ...todo,
            status: toCheck ? 'DONE' : 'IN_PROGRESS'
          };
        };
        
        return {
          ...todo
        };
      })
    });
  } 
  
  render() {
    const {todos, currentlySelectedFilter} = this.state;
    return (
      <div className="App">
        <h1>Todos.app</h1>
        <TodoList
          todos={todos}
          currentlySelectedFilter={currentlySelectedFilter}
          onToggle={this.onToggleTodo}
        />
        <TodoFilterPane
          currentlySelectedFilter={currentlySelectedFilter}
          onChangeFilter={this.onChangeFilter}
        />
      </div>
    );
  }
}

export default App;
