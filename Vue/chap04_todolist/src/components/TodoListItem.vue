
<template>
    <tr>
        <td>{{todo.id}}</td>
        <td><span>{{todo.text}}</span></td>
        <td>
            <button class="btn btn-primary">Complete</button>
        </td>
        <td>
            <button class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['todo']
    }
</script>

<style scoped>

</style>