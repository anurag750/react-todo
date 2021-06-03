const TodoForm = ({ input, setinput, todos, setTodos, setstatus }) => {
  const inputTextHandler = (e) => {
    setinput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);

    setinput("");
  };

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };

  return (
    <form>
      <input
        value={input}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
