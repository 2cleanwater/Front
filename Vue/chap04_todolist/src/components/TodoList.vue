
<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th style="{width:'10%'}">ID</th>
                    <th>Todo</th>
                    <th style="{width:'10%'}">Complete</th>
                    <th style="{width:'10%'}">Delete</th>
                </tr>
            </thead>
            <tbody>
                <TodoListItem v-for="(todo, index) in todoList" 
                    :key="todo.id" :todo="todo" :index="index"
                    :updateTodo="updateTodo" :deleteTodo="deleteTodo"></TodoListItem>
            </tbody>
        </table>
    </div>
</template>

<script>
    import TodoListItem from './TodoListItem.vue'
    export default {
        props: ['todoList', "updateTodo", "deleteTodo"],
        components: { TodoListItem }
    }
</script>

<style scoped>

</style>
