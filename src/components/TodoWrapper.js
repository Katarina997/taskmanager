import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import TodoFilter from './TodoFilter';

const TodoWrapper = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [addTodoText, setAddTodoText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddOrUpdateTodo = () => {
    if (editingIndex !== null) {
      const updatedTodoArr = [...allTodos];
      updatedTodoArr[editingIndex].todo = editTodoText;
      setAllTodos(updatedTodoArr);
      setEditingIndex(null);
      setEditTodoText('');
    } else {
      let addTodoTextItem = {
        todo: addTodoText,
        state: 'todo',
      };
      const updatedTodoArr = [...allTodos, addTodoTextItem];
      setAllTodos(updatedTodoArr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
      setAddTodoText('');
    }

    setIsModalOpen(false);
  };

  const handleTaskStateChange = (index, newState) => {
    const updatedTodoArr = [...allTodos];
    updatedTodoArr[index].state = newState;
    setAllTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  };

  const handleTodoDelete = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setAllTodos(reducedTodo);
  };

  const handleEditTodo = (index) => {
    if (allTodos[index].state === 'todo') {
      setEditingIndex(index);
      setEditTodoText(allTodos[index].todo);
      setIsModalOpen(true);
    } else {
      alert('Task can only be edited if it is in the "todo" state.');
    }
  };
  const [originalTodos, setOriginalTodos] = useState([]);

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setAllTodos(savedTodo);
      setOriginalTodos(savedTodo);
    }
  }, []);

  const handleFilter = (filterParams) => {
    const { name, state } = filterParams;

    let filteredByName = originalTodos;
    if (name !== '') {
      filteredByName = originalTodos.filter((item) =>
        item.todo.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (state === 'all') {
      setAllTodos(filteredByName);
      return;
    }

    const filteredByState = filteredByName.filter(
      (item) => item.state === state
    );

    setAllTodos(filteredByState);
  };

  return (
    <div className='font-sans'>
      <h1 className='flex justify-center text-3xl text-blue-950 text-bold text-blue items-start mt-10'>
        MY TODOS
      </h1>
      <div className='p-8 w-auto mx-auto mt-12 max-h-80vh overflow-y-auto shadow-md'>
        <div className='flex items-center justify-center border-b pb-5 mb-5 flex-col'>
          <div className='flex flex-col'>
            <div className='flex justify-center mb-10'>
              <button
                type='button'
                className='bg-blue-500 text-white rounded-none border-none px-4 py-2 w-18 cursor-pointer'
                onClick={() => setIsModalOpen(true)}
              >
                Add new task
              </button>
            </div>
            <TodoFilter onFilter={handleFilter} />
            <div>
              {isModalOpen && (
                <div className='fixed z-10 inset-0 overflow-auto bg-black bg-opacity-40'>
                  <div className='flex items-center justify-center p-16'>
                    <div className='w-[350px] p-8'>
                      <input
                        className='p-2 w-full mb-3'
                        value={
                          editingIndex !== null ? editTodoText : addTodoText
                        }
                        onChange={(e) =>
                          editingIndex !== null
                            ? setEditTodoText(e.target.value)
                            : setAddTodoText(e.target.value)
                        }
                        type='text'
                        placeholder='Enter new task'
                      />
                      <button
                        type='button'
                        className='bg-blue-500 text-white rounded-none border-none px-4 py-2 w-full cursor-pointer'
                        onClick={handleAddOrUpdateTodo}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col'>
              {allTodos.map((item, index) => (
                <div
                  className='flex justify-between items-center bg-blue-300 p-10 pt-5 pb-5 mb-10 shadow-md mt-3'
                  key={index}
                >
                  {editingIndex === index ? (
                    <input
                      className='text-bold text-2xl flex mt-2 p-2 bg-blue-300 border'
                      value={editTodoText}
                      onChange={(e) => setEditTodoText(e.target.value)}
                      onBlur={() => setEditingIndex(null)}
                    />
                  ) : (
                    <h1 className='text-bold text-2xl flex mt-2'>
                      {item.todo}
                    </h1>
                  )}

                  <div className='flex justify-end'>
                    <div>
                      <MdDelete
                        className='text-4xl cursor-pointer'
                        title='delete'
                        onClick={() => handleTodoDelete(index)}
                      />
                    </div>
                    <div>
                      <FaEdit
                        className='ml-1 text-4xl cursor-pointer'
                        onClick={() => handleEditTodo(index)}
                      />
                    </div>
                    <div className='ml-4'>
                      <select
                        className='bg-blue-200 rounded-sm'
                        value={item.state}
                        onChange={(e) =>
                          handleTaskStateChange(index, e.target.value)
                        }
                      >
                        <option value='todo'>TODO</option>
                        <option value='inProgress'>IN PROGRESS</option>
                        <option value='done'>DONE</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
