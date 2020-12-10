<template>
    <div>
        <div>姓名：{{$store.state.username}}</div>
        <div>年龄：{{$store.state.age}}</div>
        <div>性别：{{$store.state.sex==true?"男":"女"}}</div>
        <router-link to="/333">NNN</router-link>
        <button @click="MM">登录</button>
        <button @click="NN">注销</button>
        <div class="text-center m-3">
            <canvas id="mmm"></canvas>
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
    },
    mounted () {
        let A=[
            {name:"电话",mn:25},{name:"热狗",mn:75},
            {name:"儿童画",mn:65},{name:"绥苓菊",mn:95},
            {name:"儿童画",mn:75},{name:"绥苓菊",mn:52},
            {name:"儿童画",mn:85}
        ]
        let mmm=document.getElementById("mmm");
        let M=mmm.getContext("2d");
        mmm.width=480;mmm.height=240;
        M.strokeStyle="#2a40ff";
        M.strokeRect(1,-1,mmm.width,mmm.height)
        M.font = "14px Yahei"
        for(var k in A){
            var g=(mmm.width-k*50)/(k+1);
            var x=k*60;
            var y=mmm.height-A[k].mn*2;
            var h=A[k].mn*2;
            k%2==1?M.fillStyle="#75c1ff":M.fillStyle="#f00ff0";
            M.fillRect(x+5,y-5,40,h-15);
            M.fillStyle="#75c1ff";
            M.fillText(A[k].mn,x+15,y-10);
            M.strokeStyle="#ff7c11";
            M.strokeText(A[k].name,x+5,mmm.height-5);
        };

        var z=function(x){
            M.clearRect(0,0,30+x,31) 
            M.beginPath();
                M.moveTo(0+x,0);M.lineTo(30+x,0);M.lineTo(30+x,30);M.lineTo(0+x,30);
            M.stroke();
        };
        var x=0;
        setInterval(()=>{
            z(x);
            x+=10;
            if(x>=mmm.width){
                setTimeout(()=>{
                    z(x);
                    x=-10;
                },60);
            }
        },600);

        function dan(x){
            let y=mmm.height/20;
            // M.fillText("UI而过",x,y*2)
            // M.fillText("UI而过",x-10,y*4)
            // M.fillText("UI而过",x-20,y*6)
            // M.clearRect(0,0,30+x,31) 
        }
        var x=mmm.width-10;
        setInterval(()=>{
            // dan(x);
            // x++;
            // console.log(x)
        },100);
    }
}
</script>

<style>

</style>