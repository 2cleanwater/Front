<template>
    <div>
        <h3>TodoList</h3>
        <TodoForm :addTodo="addTodo"></TodoForm>
        <hr>
        <TodoList :todoList="todoList" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></TodoList>
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
            todoList: todos,
            id: 5
        }
    },
    methods: {
        updateTodo: function(id) {
            // console.log(id);
            // this.todoList[id].done = !this.todoList[id].done;
            const todo = this.todoList.find( item => item.id === id );
            todo.done = !todo.done;
        },
        deleteTodo: function(id) {
            // console.log(id);
            // this.todoList.splice(id, 1);
            const index = this.todoList.findIndex( item => item.id === id );
            this.todoList.splice(index, 1);
        },
        addTodo: function(text){
            const todo = { id: this.id++, text, done: false};
            this.todoList.push(todo);
        }
    }
}
</script>

