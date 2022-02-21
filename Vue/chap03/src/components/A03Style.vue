<template>
     <div id="app" class="card-body">
        <h3>A09 Style Binding</h3>

        <div style="color: orange; font-size: 24pt;">{{hello}}</div>
        <div :style="{color: 'orange', fontSize: '24pt'}">{{hello}}</div>
        <div :style="styleOne" @mouseenter="changeEnter" @mouseleave="changeLeave">{{hello}}</div>      <!-- 아래와 같이 computed로 빼서 사용한다 -->
        <div :style="styleTwo">{{hello}}</div>
        <br>

        <h3>Class Binding</h3>

        <div class="one" :class="['two', 'three']">{{hello}}</div>
        <div class="one" :class="clzTwo">{{hello}}</div>
        <div class="one" :class="[clzTwo, 'three']">{{hello}}</div>
        <br>

        <!-- 문자 참조 방식만 가능-->
        <div class="one" :class="{'two': true, 'three': true}">{{hello}}</div>
        <div class="one" :class="{'two': true, 'three': false}">{{hello}}</div>
        <div class="one" :class="{'two': true, 'three': isChecked}">{{hello}}</div>
        <input type="checkbox" v-model="isChecked"> Check<br />
        <br>

        <input type="text" class="form-control" />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            hello: 'Hello World!!',
            styleOne: {color: 'orange', fontSize: '24pt'},
            clzTwo: 'two',
            isChecked: false,
        }
    },
    computed: {
        styleTwo: function(){       // 매개변수가 없음. setter가 없음(값 설정 안됨)
            return {color: 'lightblue', fontSize: '24pt'}
        }
    },
    methods: {
        changeEnter: function() {
            // this.styleOne.backgroundColor = 'lightgray';
            let data = {color: 'orange', fontSize: '24pt', backgroundColor: 'lightgray'};
            this.styleOne = data;
        },
        changeLeave: function() {
            // this.styleOne.backgroundColor = 'white'
            let data = {color: 'orange', fontSize: '24pt'};
            this.styleOne = data;
        }
    }
}
</script>

<style scoped>
    .one { color: orange; }
    .two { font-size: 24pt; }
    .three { font-weight: bold; }
    .warning {background-color: orange; color: gray; }

    [v-cloak] { display: none; }
</style>