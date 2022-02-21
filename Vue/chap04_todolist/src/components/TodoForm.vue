<template>
    <form>
        <div class="input-group">
            <input type="text" class="form-control" v-model.trim="text" ref="txtField" />
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary mr-1" 
                    @click.prevent="sendData">Submit</button>
            </div>
        </div>  
    </form>
</template>

<script>
    export default {
        props: [ 'addTodo' ],
        data: function() {
            return { text: '' }
        },
        methods: {
            sendData: function() {
                if(this.text.length !== 0) {
                    this.addTodo(this.text);
                    this.$refs.txtField.value = '';
                    this.$refs.txtField.focus();
                }
                
            }
        }
    }
</script>

<style scoped>

</style>