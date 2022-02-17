
import React from 'react'
import './css/todos.css'

function TodoListItem( props ) {

    const { todo } = props;

    return (
        <tr>
            <td>{todo.id}</td>
            <td><span>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary">Complete</button>
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default TodoListItem
