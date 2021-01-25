import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {

  const [inputText, setInputText] = useState('')

  const [todoList, setTodoList] = useState([])

  const [checkStatus, setCheckStatus] = useState('all')

  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    getFromLocalStorage()
  }, [])

  useEffect(() => {
    filterFunction()
    saveToLocalStorage()
  }, [todoList, checkStatus])

  const filterFunction = () => {
    switch (checkStatus) {
      case 'completed':
        setFilterTodos(todoList.filter(todo => todo.completed === true))
        // setTodoList(filterTodos)
        break;
      case 'uncompleted':
        setFilterTodos(todoList.filter(todo => todo.completed === false))
        // setTodoList(filterTodos)
        break;
      default:
        setFilterTodos(todoList)
        // setTodoList(filterTodos)
        break;
    }
  }

  // SAVE TO LOCAL STORAGE (optional)
  const saveToLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  const getFromLocalStorage = () => {
    if (localStorage.getItem('todoList') == null) {
      localStorage.setItem('todoList', JSON.stringify([]))
    }
    else {
      let todoInLocalStorage = JSON.parse(localStorage.getItem('todoList'))
      setTodoList(todoInLocalStorage)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Miracle's To-do List</h1>
      </header>
      <div className="todo-form-container">
        <Form
          inputText={inputText} setInputText={setInputText}
          todoList={todoList} setTodoList={setTodoList}
          setCheckStatus={setCheckStatus}
        />
        <TodosList
          todoList={todoList} setTodoList={setTodoList}
          filterTodos={filterTodos}
        />
      </div>
    </div>
  );
}

export default App;
