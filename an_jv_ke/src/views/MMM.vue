<template>
    <div>
        <div>姓名：{{$store.state.username}}</div>
        <div>年龄：{{$store.state.age}}</div>
        <div>性别：{{$store.state.sex==true?"男":"女"}}</div>
        <router-link to="/333">NNN</router-link>
        <button @click="MM">登录</button>
        <button @click="NN">注销</button>
        <div>
            <a href="#"><input type="radio" name="a" id="1" class="w-25">左</a>
            <a href="#"><input type="radio" name="a" id="2" class="w-25">中</a>
            <a href="#"><input type="radio" name="a" id="3" class="w-25">右</a>
        </div>
        
        
    </div>
</template>

<script>
export default {
    methods: {
        MM(){
            this.$store.dispatch("getServerData");
            this.$store.commit('gg');
        },
        NN(){localStorage.clear();this.$store.commit('nn');}
    }
}
</script>

<style>

</style>