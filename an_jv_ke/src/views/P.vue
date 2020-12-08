<template>
    <div id="p">
        <ul class="d-flex m-0 bg-success position-relative" @mouseover="kk1" @mouseout="kk2">
            <li v-for="i of A" :key="i" class="px-3 py-2 text-white">{{i}}</li>
            <ul v-show="k1" class="position-absolute border kuang1" @mouseover="kk3">
                <li v-for="i1 of B[0]" :key="i1">{{i1}}</li>
            </ul>
            <ul v-show="k2" class="position-absolute border kuang2" @mouseover="kk3">
                <li v-for="i2 of B[1]" :key="i2">{{i2}}</li>
            </ul>
            <ul v-show="k3" class="position-absolute border kuang3" @mouseover="kk3">
                <li v-for="i3 of B[2]" :key="i3">{{i3}}</li>
            </ul>
            <ul v-show="k4" class="position-absolute border kuang4 row no-gutters" @mouseover="kk3">
                <li v-for="i4 in B[3]" :key="i4" class="col-2">{{i4}}</li>
            </ul>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            A:["首页","新房","二手房","租房","商铺写字楼","海外地产","装修","楼讯","房产研究院","房价"],
            B:[
                ["新盘","楼讯","热门活动","看房团","房源","商业地产",'海外地产',"品牌专区"],
                ["房源","小区","地图找房","主题找房","找经纪人","优秀经纪人榜","违规经纪人"],
                ["区域找房","地铁找房","地图找房","小区","民宿短租","品牌公寓"],
                ["商铺","写字楼","厂房","仓库","土地","车位","商铺出租","写字楼出租","厂房出租","仓库出租","土地出租",
                "车位出租","商铺出售","写字楼出售","厂房出售","仓库出售","土地出售","车位出售","商铺新盘","写字楼新盘",
                "厂房转让","仓库转让","土地转让","车位转让","办公楼盘","联合办公"]
            ],
            k1:'',k2:'',k3:'',k4:''
        }
    },
    methods: {
        kk1(e){
            if(e.target.nodeName=="LI"){
                switch (e.target.innerHTML) {
                    case "新房":this.k1=true;break;
                    case "二手房":this.k2=true;break;
                    case "租房":this.k3=true;break;
                    case "商铺写字楼":this.k4=true;break;
                    default:break;
                }
            }
        },
        kk2(e){
            if(e.target.nodeName=="LI"){
                switch (e.target.innerHTML) {
                    case "新房":this.k1=false;break;
                    case "二手房":this.k2=false;break;
                    case "租房":this.k3=false;break;
                    case "商铺写字楼":this.k4=false;break;
                    default:break;
                }
            }
        },
        kk3(){
            
        }
    }
}
</script>

<style>
#p{margin: auto;width: 1000px;user-select: none;}
#p>ul>li{font-size: 20px;}
#p>ul>li:hover{background-color: rgb(10, 160, 48);}
#p>ul>ul{top: 20px;}
.kuang1{left: 74px}
.kuang2{left: 150px}
.kuang3{left: 243px}
.kuang4{left: 310px;width: 500px;}
.kuang1:hover,.kuang2:hover,.kuang3:hover,.kuang4:hover{display: block;background-color: aqua;}
</style>