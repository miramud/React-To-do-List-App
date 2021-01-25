import React from 'react'
import TodoItem from './TodoItem'

function TodosList({ todoList, setTodoList, filterTodos }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                    todoList.length ?
                        filterTodos.map((todo, index) => {
                            return (
                                <TodoItem
                                    todoList={todoList} setTodoList={setTodoList}
                                    key={index} todoItem={todo}
                                    id={todo.id} text={todo.text}
                                />
                            )
                        }) : "No todos today!!!"
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodosList
