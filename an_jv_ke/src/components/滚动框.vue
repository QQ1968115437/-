<template>
    <div id="gundong">
        <div class="border">
            <div>活动火热报名中</div>
            <div id="gun0">
                <ul id="gun1">
                    <li v-for="i of 10" :key="i" class="my-3">
                        <span class="mr-2">199****7896</span>成功获取<span class="ml-2">高新中央居住区优装大宅</span>
                    </li>
                </ul>
                <ul id="gun2"></ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var timer=null;
        var timers=null;
        var gun0=document.getElementById("gun0");
        var gun1=document.getElementById("gun1");
        var gun2=document.getElementById("gun2");
        gun0.scrollTop=0;
        gun2.innerHTML=gun1.innerHTML;
        function scrollUp(){
            if(gun0.scrollTop>=gun1.offsetHeight){
                gun0.scrollTop=0;
            }else {
                timer=setInterval(()=>{gun0.scrollTop++},20);
            }
            setTimeout(()=>{clearInterval(timer)},1000);
            timers=setTimeout(()=>{scrollUp()},2000);
            gun0.onmouseover=()=>{clearInterval(timer);clearInterval(timers)};
            gun0.onmouseout=()=>{scrollUp()};
        }
        scrollUp();
    }
}
</script>

<style>
#gundong>div{width: 260px;}
#gundong>div>div:first-child{padding: 15px 18px 8px;font-size: 20px;}
#gun0{height: 200px;margin-bottom: 15px;overflow: hidden;}
#gun1,#gun2{padding: 0 18px;font-size: 20px;margin: 0;}
#gun1>li,#gun2>li{font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
#gun1>li:hover,#gun2>li:hover{font-size: 14px;color: rgb(255, 65, 7);}
</style>