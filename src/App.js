import React, { Component } from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {TodoFilterPane} from './TodoFilterPane';
import {TodosProvider, TodosContext} from './TodosProvider';

class App extends Component {  
  render() {
    return (
      <TodosProvider>
        <div className="App">
          <h1>Todos.app</h1>
          <div className={'container'}>
            <div className={'filter-pane'}>
              <TodosContext.Consumer>
                {
                  ({state, actions}) => (
                    <TodoFilterPane
                      currentlySelectedFilter={state.currentlySelectedFilter}
                      onChangeFilter={actions.onChangeFilter}
                    />
                  )
                }
              </TodosContext.Consumer>
            </div>
            <div className={'todos-pane'}>
              <TodosContext.Consumer>
              {
                ({state, actions}) => (
                  <TodoList
                    todos={state.todos}
                    currentlySelectedFilter={state.currentlySelectedFilter}
                    onToggle={actions.onToggleTodo}
                  />
                )
              }
              </TodosContext.Consumer>
            </div>
          </div>
        </div>
      </TodosProvider>
    );
  }
}

export default App;
