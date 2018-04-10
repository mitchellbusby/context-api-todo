const TODO_FILTERS = Object.freeze({
  ALL: 'ALL',
  DONE: 'DONE',
  IN_PROGRESS: 'IN_PROGRESS'
});

const TODO_LABELS = Object.freeze({
  [TODO_FILTERS.ALL]: 'All',
  [TODO_FILTERS.DONE]: 'Done',
  [TODO_FILTERS.IN_PROGRESS]: 'In progress'
});

export {
  TODO_FILTERS,
  TODO_LABELS
};
