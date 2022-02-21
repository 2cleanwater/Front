<template>
    <form>
        <div class="input-group">
            <input type="text" class="form-control" v-model="text" ref="txtField" />
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
            </div>
        </div>  
    </form>
</template>

<script>
import EventBus from './EventBus.vue'

export default {
    data: function() {
        return {
            text: ''
        }
    },
    methods: {
        sendData: function() {
            EventBus.$emit('sendtext', this.text);
            this.$refs.txtField.value = '';
            this.$refs.txtField.focus();
        }
    }
}
</script>
