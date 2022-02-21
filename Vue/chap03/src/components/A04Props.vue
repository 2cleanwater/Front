<template>
    <div class="card-body" id="app">
        <h3>A03 Component Props</h3>
        <A04Child name="NolBu" v-bind:age="30" :add="address" 
            :user="user" :arr="ary" :on-plus="onPlus" is-checked></A04Child>
    </div>
</template>

<script>
import A04Child from './A04Child.vue'

export default {
    components: { A04Child },
    data: function() {
        return {
            address: 'Seoul',
            user: {name: 'Hong', age: 20},
            ary: [10, 20, 30],
        }
    },
    methods: {
        onPlus: function(x, y) {
            return `${x} + ${y} = ${x + y}`
        }
    }
}
</script>

