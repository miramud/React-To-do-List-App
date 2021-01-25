import React from 'react'

function TodoItem({ todoList, setTodoList, todoItem, id, text }) {
    
    const deleteItem = () => {  
        setTodoList(todoList.filter(item => item.id !== id ))
    }

    const markCompleted = () => {
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todoItem.completed ? "completed" : ''}`}>
                {text}
            </li>
            <button onClick={markCompleted} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteItem} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default TodoItem
