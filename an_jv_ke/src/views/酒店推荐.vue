<template>
    <div id="jian">
        <ul class="d-flex justify-content-center hai1" @click="dian">
            <li :class="lan1">上海</li>
            <li :class="lan2">北京</li>
            <li :class="lan3">广州</li>
            <li :class="lan4">三亚</li>
            <li :class="lan5">杭州</li>
            <li :class="lan6">成都</li>
            <li :class="lan7">{{nan}}</li>
            <li class="position-relative" @click="dian2">∨
                <ul v-show="show" class="mt-2 border V p-3">
                    <li v-for="(m,n) of B" :key="n" class="py-1">{{m}}</li>
                </ul>
            </li>
            <!-- ∧ -->
        </ul>
        <ul class="d-flex hai2">
            <li v-for="(z,i) of AAA" :key="i">
                <div><img :src="z.img" alt="" class="w-100 pr-2"></div>
                <div class="my-1">{{z.ti}}</div>
                <div class="xing"><i v-for="i of 3" :key="i"></i></div>
                <div class="mb-2">
                    <span class="bg-primary text-white px-1">{{z.fen}}</span> 棒 
                    <span class="text-secondary">{{z.ping}}点评</span>
                </div>
                <div class="text-primary my-2">￥{{z.jia}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            A:{"上海":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/fd/hotel/g4/M08/EB/C4/CggYHVXIfQ-ATvMXAAFVfkeUVn0314_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/200h1900000188dw2D693_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/200h0e00000075tbx0769_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/200a1800000147wc0D34F_R_300_225_R5_Q70_D.jpg"}],
                "北京":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/200p1g000001h3hbn55FC_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/2009170000011a4xd0796_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/0220212000849ofpdF16F_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/200f1c000001cgsxg97CE_R_300_225_R5_Q70_D.jpg"}],
                "广州":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/0205d1200081cj288C594_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/0204h12000831v25y0676_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/0204x120003nc4kmj0A76_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/200m10000000oa4s96EF6_R_300_225_R5_Q70_D.jpg"}],
                "三亚":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/200s15000000xwhzp6597_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/200p190000015xwv0BB59_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/200n1b000001bnaup4F61_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/20010f0000007e9tz15E4_R_300_225_R5_Q70_D.jpg"}],
                "杭州":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/200e1f000001gsjovC0D6_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/200j0v000000jze0i6D05_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/0205e12000873mrnv8C83_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/20030k000000cf4px1F1D_R_300_225_R5_Q70_D.jpg"}],
                "成都":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/200p1g000001h3hbn55FC_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/2009170000011a4xd0796_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/0220212000849ofpdF16F_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/200f1c000001cgsxg97CE_R_300_225_R5_Q70_D.jpg"}],
                "南京":[
                {ti:"上海初心莫舍设计师民宿",fen:"4.8/5",ping:1722,jia:168,img:"https://dimg04.c-ctrip.com/images/0205d1200081cj288C594_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海南泉大酒店",fen:"4.2/5",ping:2117,jia:357,img:"https://dimg04.c-ctrip.com/images/0204h12000831v25y0676_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海延安饭店",fen:"4.4/5",ping:3809,jia:293,img:"https://dimg04.c-ctrip.com/images/0204x120003nc4kmj0A76_R_300_225_R5_Q70_D.jpg"},
                {ti:"上海三湘大厦",fen:"4.4/5",ping:576,jia:388,img:"https://dimg04.c-ctrip.com/images/200m10000000oa4s96EF6_R_300_225_R5_Q70_D.jpg"}]
            },
            B:["哈尔滨1","青岛1","西安1","南京1","杭州1","厦门1","成都1","深圳1","广州1","北京1","上海1","天津1","重庆1","哈尔滨1","北京1","上海1","天津1","重庆1","哈尔滨1","青岛1","西安1","南京1","杭州1","厦门1","成都1","深圳1","广州1","昆明1","丽江1","贵阳1","海口","三亚","西宁1","长沙","武汉","郑州1","青岛1","西安1","南京1","杭州1","厦门1","成都1","深圳1","广州1"],
            lan1:"bg-lan",lan2:"",lan3:"",lan4:"",lan5:"",lan6:"",lan7:"",
            show:"",nan:"南京",AAA:[]
        }
    },
    methods: {
        r1(aa){
            let a,b,c,d,e,f,g
            this.lan1=a;this.lan2=b;this.lan3=c;this.lan4=d;this.lan5=e;this.lan6=f;this.lan7=g;
        },
        r2(){this.lan1="";this.lan2="";this.lan3="";this.lan4="";this.lan5="";this.lan6="";this.lan7="bg-lan"},
        
        dian(e){        // 这个dian(e) js方法以后得重新修改
            // function q1(){}
            if(e.target.nodeName=="LI"){
                switch (e.target.innerHTML) {
                    case "上海":this.AAA=this.A.上海;    this.lan1="bg-lan";this.lan2="";this.lan3="";this.lan4="";this.lan5="";this.lan6="";this.lan7="";break;
                    case "北京":this.AAA=this.A.北京;    this.lan1="";this.lan2="bg-lan";this.lan3="";this.lan4="";this.lan5="";this.lan6="";this.lan7="";break;
                    case "广州":this.AAA=this.A.广州;    this.lan1="";this.lan2="";this.lan3="bg-lan";this.lan4="";this.lan5="";this.lan6="";this.lan7="";break;
                    case "三亚":this.AAA=this.A.三亚;    this.lan1="";this.lan2="";this.lan3="";this.lan4="bg-lan";this.lan5="";this.lan6="";this.lan7="";break;
                    case "杭州":this.AAA=this.A.杭州;    this.lan1="";this.lan2="";this.lan3="";this.lan4="";this.lan5="bg-lan";this.lan6="";this.lan7="";break;
                    case "成都":this.AAA=this.A.成都;    this.lan1="";this.lan2="";this.lan3="";this.lan4="";this.lan5="";this.lan6="bg-lan";this.lan7="";break;
                    case "南京":this.AAA=this.A.南京;    this.r1();break;
                    default:break;
                };
            if(e.target.nodeName=="LI"){
            switch (e.target.innerHTML) {
                case "哈尔滨1":this.nan="哈尔滨1";this.r2();break;
                case "青岛1":this.nan="青岛1";this.r2();break;
                case "西安1":this.nan="西安1";this.r2();break;
                case "南京1":this.nan="南京1";this.r2();break;
                case "杭州1":this.nan="杭州1";this.r2();break;
                case "厦门1":this.nan="厦门1";this.r2();break;
                case "成都1":this.nan="成都1";this.r2();break;
                case "厦门1":this.nan="厦门1";this.r2();break;
                case "厦门1":this.nan="厦门1";this.r2();break;
                case "厦门1":this.nan="厦门1";this.r2();break;
                // ................等等...
                default:break;
                }
            }
            }
        },
        dian2(){
            this.show!=true?this.show=true:this.show="";
        }
    },
    mounted () {
        this.AAA=this.A.上海;
    }
}
</script>
<style scoped>
#jian{width: 1000px;margin: 10px auto;user-select: none;}
.hai1>li{
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    padding: 5px 15px;
    margin: 0 6px;
    font-size: 14px;
    cursor: pointer;
}
.hai1>li:hover{border: 1px solid #1a7cd8;}
.bg-lan{background-color: #ecf3ff;color: #287dfa;border: 1px solid #00000000 !important;}

.hai2>li{
    width: 290px;height: 327px;
    cursor: pointer;
}
.hai2>li:hover{background-color: #eeeeee80;}
.xing>i{
    width: 14px;height: 14px;
    display: inline-block;
    background-image: url("https://pic.english.c-ctrip.com/picaresenglish/ibu/ibucommon/images/v0/global-sprite.1a67319d.png");
    background-position: 0 -351px;
}
.xing+div>span.bg-primary{border-radius: 5px;}

.V{
    width: 450px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: -410px;
    background-color: #fff;
    text-align: center;
}
.V>li{width: 20%;}
.V>li:hover{background-color: #e9e9e9b9;}
</style>