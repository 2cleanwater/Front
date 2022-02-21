<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th style="width: 10%">ID</th>
                    <th>Todo</th>
                    <th style="width: 10%">Complete</th>
                    <th style="width: 10%">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in todoList" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td><span :class="{done: item.done}">{{item.text}}</span></td>
                    <td><button class="btn btn-primary" @click="updateTodo(item.id)">Complete</button></td>
                    <td><button class="btn btn-danger"  @click="deleteTodo(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import EventBus from './EventBus.vue'

export default {
    data: function() {
        return {
            todoList: [
                { id: 1, text: '첫 번째 할 일', done: true },
                { id: 2, text: '두 번째 할 일', done: false },
                { id: 3, text: '세 번째 할 일', done: false },
            ],
            id: 4,
        }
    },
    created: function() {
        EventBus.$on('sendtext', this.addTodo);
    },
    methods: {
        updateTodo: function(id) {
            // this.todoList[id].done = !this.todoList[id].done;
            const todo = this.todoList.find( (item) => item.id === id );
            // console.log(todo);
            todo.done = !todo.done;
        },
        deleteTodo: function(id) {
            // delete는 splice를 이용
            const index = this.todoList.findIndex( (item) => item.id === id );
            this.todoList.splice(index, 1);
        },
        addTodo: function(text) {
            const todo = {id: this.id++, text: text, done: false};
            this.todoList.push(todo);
        }
    }
}
</script>

<style scoped>
    .done { text-decoration: line-through; }
</style>