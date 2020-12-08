<template>
    <div id="M">
        <ul class="d-flex m-0 bg-success position-relative">
            <li>首页</li>
            <li>新房
                <ul class="border ul1">
                    <li v-for="i of A.a" :key="i">{{i}}</li>
                </ul>
            </li>
            <li>二手房
                <ul class="border ul2">
                    <li v-for="i of A.b" :key="i">{{i}}</li>
                </ul>
            </li>
            <li>租房
                <ul class="border ul3">
                    <li v-for="i of A.c" :key="i">{{i}}</li>
                </ul>
            </li>
            <li>商铺写字楼
                <ul class="row no-gutters border ul4">
                    <li class="col-2" v-for="(z,k) in A.d" :key="k">{{k}}
                        <p v-for="i of z" :key="i">{{i}}</p>
                    </li>
                </ul>
            </li>
            <li>海外地产</li>
            <li>装修</li>
            <li>楼讯</li>
            <li>房产研究院</li>
            <li>房价</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            A:{
                a:["新盘","楼讯","热门活动","看房团","房源","商业地产",'海外地产',"品牌专区"],
                b:["房源","小区","地图找房","主题找房","找经纪人","优秀经纪人榜","违规经纪人"],
                c:["区域找房","地铁找房","地图找房","小区","民宿短租","品牌公寓"],
                d:{"商铺":["商铺出租","商铺出售","商铺新盘"],
                "写字楼":["写字楼出租","写字楼出售","写字楼新盘","办公楼盘","联合办公"],
                "厂房":["厂房出租","厂房出售","厂房转让"],
                "仓库":["仓库出租","仓库出售","仓库转让"],
                "土地":["土地出租","土地出售","土地转让",],
                "车位":["车位出租","车位出售","车位转让"]}
            }
        }
    }
}
</script>

<style>
#M{margin: auto;width: 1000px;user-select: none;}
#M>ul>li{font-size: 18px;color: #fff;padding: 8px 20px;position: relative;}
#M>ul>li>ul{color: #000;left: 0;font-size: 14px;margin-top: 8px;display: none;position: absolute;}
#M>ul>li>ul>li{padding: 5px 10px;width: 77px;}
.ul2>li{width: 104px !important;}
.ul4>li{width: 540px !important;}
.ul1>li:hover,.ul2>li:hover,.ul3>li:hover,.ul4>li>p:hover{color: rgb(5, 177, 33);}
#M>ul>li:hover{background-color: rgb(10, 160, 48);}
#M>ul>li:hover>ul{display: block !important;}
#M>ul>li:hover>ul.ul4{display: flex !important;}
</style>