<template>
    <div class="text-center">
        <div>姓名：{{$store.state.username}}</div>
        <div>{{$store.state.products[0].productName}}：{{$store.state.products[0].salePrice}}</div>
        <div>{{$store.state.products[1].productName}}：{{$store.state.products[1].salePrice}}</div>
        <video class="a1" width="500" height="500" controls muted loop none metadata preload="metadata" poster="../../resource/articles/4-methods-to-make-competitive-interactive-works-b.jpg">
            <source src="../components/视距.mp4">
            浏览器不支持视频的提示文本
        </video>
        <button @click="quan">全屏</button>
        <router-link to="/222"><div class="w-50 mt-5 h2 btn btn-success">返回</div></router-link>
    </div>
</template>

<script>
export default {
    mounted () {
        var a=document.getElementsByClassName("a1")[0];
            a.width=200;a.height=200;
    },
    methods: {
        quan(){
            var a=document.getElementsByClassName("a1")[0];
            if(a.requestFullscreen){a.requestFullscreen()}else
            if(a.mozRequestFullScreen){a.mozRequestFullScreen()}else
            if(a.webkitRequestFullscreen){a.webkitRequestFullscreen()}
        }
    }
}
</script>

<style>

</style>