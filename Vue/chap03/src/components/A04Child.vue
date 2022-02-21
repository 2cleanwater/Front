<template>
    <div>
        Name: {{name}}<br>
        Age: {{age + 100}}<br>
        Address: {{add}}<br>
        User: {{user.name}} / {{user.age}} / {{user.address}}<br>
        Array: {{arr[0]}} / {{arr[1]}} / {{arr[5]}}<br>
        onPlus: {{onPlus(10, 20)}}<br>
        isChecked: {{isChecked ? '동의' : '동의 안함'}}<br>
    </div>
</template>

<script>
export default {
    props: ['name', 'age', 'add', 'user', 'arr', 'onPlus', 'isChecked'],
    data: function(){
        return {}
    },
}
</script>

<style scoped>

</style>