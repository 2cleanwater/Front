<template>
    <div class="card-body" id="app">
        <h3>A02 Attribute Binding</h3>

        <div >
            <h5>1. 속성 바인딩</h5>
            Vue() 내부에 값을 가져와 출력만 한다. 폼 요소에서 수정해도 변수의 값은 변경안됨<br>
            <input type="text" class="form-control" v-bind:value="name">
            <input type="text" class="form-control" :value="name">
            <input type="text" :class="formCtrl" :value="name">
            <div>Hello World</div>
        </div>
        <br>

        <div >
            <h5>2. 양방향 바인딩</h5>
            Vue() 내부에 선언된 값을 표시 및 수정 가능하게 하는 지시자<br>
            <input type="text" class="form-control" v-model="name">
            <input type="text" class="form-control" v-model="name">
            <input type="text" class="form-control" :value="name" @input="changeName">
            Name: {{name}}<br>
            <button @click="changeValue('ABC')">Name</button>
        </div>
        <br>
    </div>

</template>

<script>
export default {
    data: function() {
        return {
            name: 'NolBu',
            formCtrl: 'form-control'
        }
    },
    methods: {
        changeName: function(evt) {
            this.name = evt.target.value;
        },
        changeValue: function(str) {
            this.name = str;
        }
    }
}
</script>

<style>
    .attr { color: 'orange'; }
</style>