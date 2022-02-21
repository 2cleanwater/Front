
<template>
    <tr>
        <td>{{index + 1}}</td>
        <td><span :class="{done: todo.done}">{{todo.text}}</span></td>
        <td>
            <button class="btn btn-primary" @click="updateTodo(todo.id)">Complete</button>
        </td>
        <td>
            <button class="btn btn-danger"  @click="deleteTodo(todo.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['todo', 'index', 'updateTodo', 'deleteTodo']
    }
</script>

<style scoped>
    .done { text-decoration: line-through; }
</style>