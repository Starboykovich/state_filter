import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={'toolbar-button ' + (filter === selected ? 'selected' : '')}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
