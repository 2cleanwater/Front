<template>
    <div>
        <h3>A07 Push</h3>

        <div>
            <button @click="back">BACK</button>
            <button @click="forward">FORWARD</button>
            <button @click="goHome">HOME</button>
            <button @click="goURL('/A02Style')">A02Style</button>

            <!-- 객체 형태의 데이터 전달은 name 사용 -->
            <button>A02Style</button>
            <button>A03Params</button>
            <button>A03Params</button>
        </div>
    </div>
</template>

<script>
export default {
    created: function() {
        console.log(this.$route);
        console.log(this.$router);
    },
    methods: {
        back: function(){
            this.$router.back();
        },
        forward: function() {
            this.$router.forward();
        },
        goHome: function() {
            this.$router.push('/');
        },
        goURL: function(url) {
            this.$router.push(url);
        },
    },


}
</script>