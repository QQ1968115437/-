<template>
    <div id="chufa">
        <div class="chufa row no-gutters">
            <div class="col-6" @click="chufadi">
                <div>出发地</div>
                <input type="text" :value="chufa">
            </div>
            <div class="border">
                <div>→</div>
                <div>←</div>
            </div>
            <div class="col-6" @click="mudidi">
                <div>目的地</div>
                <input type="text" :value="mudi">
            </div>
        </div>
        <!-- 出发地 -->
        <div class="chufa1 row no-gutters flex-wrap border" v-show="xian">
            <div class="col-2 p-2">
                <p class="p-2" :class="lanse1" @click="guo1">国内</p>
                <p class="px-3 py-2" :class="lanse2" @click="guoji">国际及中国港澳台</p>
            </div>
            <div class="col-10">
                <ul class="d-flex remen m-0 border-bottom" @click="dianji">
                    <li v-for="(re,i) in guonei" :key="i" class="mx-2">{{i}}</li>
                </ul>
                <ul v-if="re1">
                    <li v-for="(re,i) in guonei.ABCDEF" :key="i" class="d-flex">
                        {{i}}
                        <ul class="d-flex px-3 flex-wrap mian2">
                            <li v-for="(reA,k) of guonei.ABCDEF[`${i}`]" :key="k" class="px-3 pb-2">{{reA}}</li>
                        </ul>
                    </li>
                </ul>
                <ul v-else-if="re2">
                    <li>222</li>
                </ul>
                <ul v-else-if="re3">
                    <li>333</li>
                </ul>
                <ul v-else-if="re4">
                    <li>444</li>
                </ul>
                <ul v-else-if="re5">
                    <li>555</li>
                </ul>
                <ul v-else class="d-flex list-unstyled mian m-0 flex-wrap">
                    <li v-for="(re,i) of guonei.热门" :key="i">{{re}}</li>
                </ul>
            </div>
        </div>
        <!-- 目的地 -->
        <div class="mudi1" v-show="xian2">目的地</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chufa:"西安(SIA)",mudi:"东京(TYO)",lanse1:"lanse",lanse2:"",xian:false,xian2:false,
            guonei:{
                "热门":["北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州","昆明","丽江","贵阳","海口","三亚","西宁","长沙","武汉","郑州"],
                "ABCDEF":{
                    A:["阿勒泰","阿克苏","鞍山","安庆","安顺","阿拉善左","中国澳门","阿里","阿拉善右","阿尔山"],
                    B:["北京","上海","天津","重庆","哈尔滨","深圳","广州","北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州"],
                    C:["哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州","北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州"],
                    D:["上海","鞍山","安庆","安顺","阿拉善左","中国澳门","阿里","阿拉善右","阿尔山"],
                    E:["西安","上海","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州"],
                    F:["成都","深圳","广州","北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都",]
                },
                "GHIJ":{G:[],H:[],I:[],J:[]},
                "KLMN":{K:[],L:[],M:[],N:[]},
                "OPQRSTUVW":{O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[]},
                "XYZ":{X:[],Y:[],Z:[]}
            },
            guonji:{
                "国际•中国港澳台热门":["北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州","昆明","丽江","贵阳","海口","三亚","西宁","长沙","武汉","郑州"],
                "亚洲":{
                    A:["阿勒泰","阿克苏","鞍山","安庆","安顺","阿拉善左","中国澳门","阿里","阿拉善右","阿尔山"],
                    B:["北京","上海","天津","重庆","哈尔滨","深圳","广州","北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州"],
                    C:["哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州","北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州"],
                    D:["上海","鞍山","安庆","安顺","阿拉善左","中国澳门","阿里","阿拉善右","阿尔山"],
                    E:["西安","上海","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都","深圳","广州"],
                    F:["成都","深圳","广州","北京","上海","天津","重庆","哈尔滨","青岛","西安","南京","杭州","厦门","成都",]
                },
                "欧洲":{G:[],H:[],I:[],J:[]},
                "美洲":{K:[],L:[],M:[],N:[]},
                "非洲":{O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[]},
                "大洋洲":{X:[],Y:[],Z:[]}
            },
            re1:"",re2:"",re3:"",re4:"",re5:""
        }
    },
    methods: {
        dianji(e){
            if(e.target.nodeName=="LI"){
                switch (e.target.innerHTML) {
                    case "ABCDEF":this.re1=true;break;
                    case "GHIJ":this.re2=true;
                        this.re1="";break;
                    case "KLMN":this.re3=true;
                        this.re2="";this.re1="";break;
                    case "OPQRSTUVW":this.re4=true;
                        this.re3="";this.re2="";this.re1="";break;
                    case "XYZ":this.re5=true;
                        this.re4="";this.re3="";this.re2="";this.re1="";break;
                    default:this.re5="";this.re4="";this.re3="";this.re2="";this.re1="";break;
                }
            }
        },
        chufadi(){this.xian=true;this.xian2=false},
        mudidi(){this.xian=false;this.xian2=true},
        guo1(){this.lanse1="lanse";this.lanse2="";},
        guoji(){this.lanse1="";this.lanse2="lanse";}
    }
}
</script>

<style scoped>
#chufa>.chufa{width: 500px;height: 60px;margin: 10px;}
#chufa>.chufa>div:nth-child(2){
    width: 30px;height: 30px;
    top: 25px;left: 245px;
    z-index: 5;
    border-radius: 50%;
    position: absolute;
    font-weight: bold;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
}
#chufa>.chufa>div:nth-child(2):hover{
    background-color: rgba(212, 212, 212, 0.548);
}
#chufa>.chufa>div:nth-child(2)>div{
    font-size: 28px;
    line-height: 12px;
    color: rgb(114, 114, 114);
    text-align: center;
    margin: 0;padding: 0;
}

#chufa>.chufa>div:nth-child(1)>div,#chufa>.chufa>div:nth-child(3)>div{
    position: absolute; 
    font-size: 12px;
    left: 20px;
    top: 10px;color: rgb(177, 177, 177);
}
#chufa>.chufa>div>input{
    width: 100%;height: 100%; 
    padding: 28px 0 12px 20px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid #fff0;
    box-shadow: 0 1px 1px rgb(187, 187, 187);
}
#chufa>.chufa>div>input:focus{
    outline: 0;
    border-top: 2px solid rgb(47, 162, 255);
}

/* 出发框 */
.chufa1{width: 800px;font-size: 14px;background-color: #fff;}
.chufa1 p{margin: 0;text-align: center;user-select: none;cursor: pointer;border-radius: 5px;}
.chufa1>div:first-child{background-color: rgba(218, 218, 218, 0.555);}

.chufa1>div:last-child{padding: 15px;}
.lanse{background-color: rgb(80, 156, 255);color: #fff;}
.remen>li{padding-bottom: 5px; border-bottom: 1px solid rgba(30, 109, 255, 0);cursor: pointer;}
.remen>li:hover{border-bottom-color:rgb(30, 109, 255);}

.mian>li,.mian2>li{width: 15%;text-align: left;margin-right: 0px; padding: 5px;border-radius: 5px;cursor: pointer;}
.mian>li:hover,.mian2>li:hover{background-color: rgba(97, 153, 255, 0.596);color: #fff;}
.mian2>li:hover{background-color: rgba(187, 211, 255, 0.596);color: rgb(20, 149, 255);}
</style>