import React, {Component} from 'react';
import PropTypes from 'prop-types';

const showTodo = currentlySelectedFilter => todo => {
  if (currentlySelectedFilter === 'ALL') {
    return true;
  }
  
  return todo.status === currentlySelectedFilter;  
}


class TodoList extends Component {
  onChange = item => evt => {
    const {onToggle} = this.props;
    
    const toCheck = evt.target.checked;
    
    onToggle(toCheck, item);
  }
  
  render() {
    const {todos, currentlySelectedFilter} = this.props;
    return (
      <ul>
        {
          todos.filter(showTodo(currentlySelectedFilter))
            .map(todo => {
              
              const isDone = todo.status === 'DONE';
              
              let style;
              
              if (isDone) {
                style = {
                  textDecoration: 'line-through'
                };
              }
              
              return (
                <li style={style}>
                  <input 
                    type="checkbox" 
                    checked={isDone}
                    onChange={this.onChange(todo.item)}
                  />
                  { todo.item }
                </li>
              )
            })
        }
      </ul>
    )
  }
}

TodoList.props = {
  currentlySelectedFilter: PropTypes.string,
  todos: PropTypes.array,
  onToggle: PropTypes.func,
}

export {TodoList};