<template>
    <div>
        <h3>TodoList</h3>
        <TodoForm></TodoForm>
        <hr>
        <TodoList :todoList="todoList"></TodoList>
    </div>    
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

const todos = [];
for(let i = 0; i < 5; i++) {
    const todo = {id: i, text: `${i}번째 할 일`, done: false};
    todos.push(todo);
}

export default {
    components: { TodoForm, TodoList },
    data: function() {
        return {
            todoList: todos
        }
    }
}
</script>

