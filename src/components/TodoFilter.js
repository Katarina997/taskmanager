import React, { useState } from 'react';

const TodoFilter = ({ onFilter }) => {
  const [filterName, setFilterName] = useState('');
  const [filterState, setFilterState] = useState('all');

  const handleFilter = () => {
    onFilter({
      name: filterName.toLowerCase(),
      state: filterState,
    });
  };

  return (
    <div className='flex items-center mb-2'>
      <input
        className='p-2 mr-2'
        type='text'
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        placeholder='Filter by name'
      />
      <select
        className='bg-blue-200 rounded-sm'
        value={filterState}
        onChange={(e) => setFilterState(e.target.value)}
      >
        <option value='all'>ALL</option>
        <option value='todo'>TODO</option>
        <option value='inProgress'>IN PROGRESS</option>
        <option value='done'>DONE</option>
      </select>
      <button
        type='button'
        className='bg-blue-500 text-white rounded-none border-none px-4 py-2 ml-2 cursor-pointer'
        onClick={handleFilter}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default TodoFilter;
