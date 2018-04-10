import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TODO_FILTERS} from './TodoFilters';


class TodoFilter extends Component {
  render() {
    const {currentlySelectedFilter, onChangeFilter} = this.props;
    return (
      <div>
        {
          Object.keys(TODO_FILTERS).map((key, index) => {
            const value = TODO_FILTERS[key];

            return (
              <div className={'radio'}>
                <label>
                  <input type="radio"
                    value={value}
                    checked={currentlySelectedFilter===value}
                    onChange={onChangeFilter(value)}
                  />
                    {value}
                </label>
              </div>
            )
          })
        }
      </div>
    )
  }
}


TodoFilter.propTypes = {
  currentlySelectedFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
}

export {TodoFilter};
