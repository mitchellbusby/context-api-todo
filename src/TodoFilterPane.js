import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TODO_FILTERS, TODO_LABELS} from './TodoFilters';


class TodoFilterPane extends Component {
  render() {
    const {currentlySelectedFilter, onChangeFilter} = this.props;
    return (
      <div>
        <h2>Filter by</h2>
        {
          Object.keys(TODO_FILTERS).map((key, index) => {
            const value = TODO_FILTERS[key];

            const label = TODO_LABELS[value];

            return (
              <div className={'radio'}>
                <label>
                  <input type="radio"
                    value={value}
                    checked={currentlySelectedFilter===value}
                    onChange={onChangeFilter(value)}
                  />
                    {label}
                </label>
              </div>
            )
          })
        }
      </div>
    )
  }
}


TodoFilterPane.propTypes = {
  currentlySelectedFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
}

export {TodoFilterPane};
