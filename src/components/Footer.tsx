import React from 'react';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
  selectedFilter: 'all' | 'active' | 'completed';
  setSelectedFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  todos,
  selectedFilter,
  setSelectedFilter,
  clearCompleted,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {todos.filter(todo => !todo.completed).length} items left
    </span>

    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${selectedFilter === 'all' ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => setSelectedFilter('all')}
      >
        All
      </a>
      <a
        href="#/active"
        className={`filter__link ${selectedFilter === 'active' ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => setSelectedFilter('active')}
      >
        Active
      </a>
      <a
        href="#/completed"
        className={`filter__link ${selectedFilter === 'completed' ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => setSelectedFilter('completed')}
      >
        Completed
      </a>
    </nav>

    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      onClick={clearCompleted}
      disabled={todos.every(todo => !todo.completed)}
    >
      Clear completed
    </button>
  </footer>
);
