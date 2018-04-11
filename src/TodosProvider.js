import React, {Component} from 'react';

const TodosContext = React.createContext();

class TodosProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {item: 'Eat dinner', status: 'IN_PROGRESS'},
        {item: 'Write Javascript', status: 'IN_PROGRESS'},
        {item: 'Go to sleep', status: 'DONE'},
      ],
      currentlySelectedFilter: 'ALL',
    }
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

  onChangeFilter = newFilter => () => {
    this.setState({
      currentlySelectedFilter: newFilter
    });
  }

  render() {
    const actions = {
      onToggleTodo: this.onToggleTodo,
      onChangeFilter: this.onChangeFilter,
    };

    const value = {
      state: this.state,
      actions,
    }

    return (
      <TodosContext.Provider value={value}>
        {
          this.props.children
        }
      </TodosContext.Provider>
    )
  }
}


export {TodosProvider, TodosContext};
