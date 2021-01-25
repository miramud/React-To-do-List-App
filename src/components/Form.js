import React from 'react'

function Form({inputText,setInputText,todoList,setTodoList, setCheckStatus}) {

    const handleText = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList([
            ...todoList, {
                text: inputText, id: (todoList.length + 1), completed: false
            }
        ]);
        setInputText('')
    }

    const handleFilter = (e) => {
        setCheckStatus(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inputText} onChange={handleText} type="text" className="todo-input" />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={handleFilter} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
