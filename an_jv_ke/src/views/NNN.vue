<template>
    <div class="pos">
        <div>姓名：{{$store.state.username}}</div>
        <div>{{$store.state.products[0].productName}}：{{$store.state.products[0].salePrice}}</div>
        <div>{{$store.state.products[1].productName}}：{{$store.state.products[1].salePrice}}</div>
        <video class="a1" width="500" height="500" controls muted loop none metadata preload="metadata" poster="../../resource/articles/4-methods-to-make-competitive-interactive-works-b.jpg" v-for="i of 4" :key="i">
            <source src="../components/视距.mp4" type="video/mp4">
            <source src="../components/视距.mp4" type="video/webm">
            <source src="../components/视距.mp4" type="video/ogg">
            浏览器不支持视频的提示文本
        </video>
        <router-link to="/222">MMM</router-link>
    </div>
</template>

<script>
export default {
    mounted () {
            var a=document.getElementsByClassName("a1");
            for(var k of a){
                k.width=200;k.height=200;
            }
    }
}
</script>

<style>

</style>