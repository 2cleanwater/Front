
import React, { useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(makeTodo());

    // 함수
    const updateTodo = (id) => {
        const todos = todoList.map( todo => {
            // todo => {id: 2, text: `2번째 할 일`, done: false}
            if( todo.id === id) {
                return {...todo, done: !todo.done}
            } else {
                return todo;
            }
        });
        setTodoList(todos);
    }

    const deleteTodo = (id) => {
        const data = todoList.filter( todo => todo.id !== id ? true : false );
        setTodoList(data);
    }
    

    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm />
            <hr />
            <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    )
}
export default TodoTemplate;