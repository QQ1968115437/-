<template>
  <div id="lianxi" style="user-select: none;">
      <mt-header title="有问题,上知乎">
        <mt-button slot="right" class="m-0">
          <router-link to="/999" class="text-white">登录</router-link>
        </mt-button>
      </mt-header>
      <div class="p-2 h5 m-0 d-flex">知乎 有问题-上知乎
        <div class="ml-5" v-for="(a,k) in n0" :key="k">
          <mt-badge :type="k" size="small" class="position-absolute">{{a}}</mt-badge>
        </div>
      </div>
      <!-- 顶部选项卡 -->
      <mt-navbar v-model="active">
        <mt-tab-item v-for="(p,i) of n1" :key="i" class="text-white bg-dark" :id="`${i+1}`">{{p.category_name}}</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item class="h3 py-3 text-center text-white bg-dark" id="1">
          <div
          infinite-scroll-distance="50"
          v-infinite-scroll="GunDong0"
          infinite-scroll-immediate-check="true">            
            <div v-for="(m,i) of N" :key="i" class="border-bottom">
                <h5 class="text-left ml-3">{{m.subject}}</h5>
                <router-link class="row no-gutters mb-2 text-white" :to="`/888/${m.id}`">
                  <!-- <img class="col-3" :src="m.image" alt=""> -->
                  <img class="col-3" v-lazy="m.image" alt="">
                  <span class="h6 col-8 pl-3 text-left">{{m.description}}</span>
                </router-link>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item class="h3 py-3 text-center text-white bg-success" id="2">002</mt-tab-container-item>
        <mt-tab-container-item class="h3 py-3 text-center text-white bg-primary" id="3">003</mt-tab-container-item>
        <mt-tab-container-item class="h3 py-3 text-center text-white bg-danger" id="4">
          <div
            infinite-scroll-distance="100"
            v-infinite-scroll="GunDong"
          >
            <p v-for="(vv,i) of Gun" :key="i">{{vv}}</p>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部选项卡 -->
      <mt-tabbar fixed v-model="selectedTab">
        <mt-tab-item id="index" class="text-white bg-dark py-3">首页</mt-tab-item>
        <mt-tab-item id="me" class="text-white bg-success py-3">我的</mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active:"1",selectedTab:"0",n1:[],N:[],n0:{"error":"知","primary":"志","success":"知","warning":"智"},
      Gun:40,page0:1
    }
  },
  methods: {
    // 封装加载aaa001数据
      jiazai(id,page0){
        this.axios.get("/aaa001",{
          params:{id:id,page:page0}
          }).then(aa=>{
            var b=aa.data.bbb;
            b.forEach(c=>{
              if(c.image!=null){
                c.image=require('../../resource/articles/'+c.image);
              };
            });
            this.N=b;
          })
        },
        GunDong0(){
          this.page0++;
        // 调用aaa001
          this.jiazai(this.active,this.page0);
        },
        GunDong(){
          this.Gun=this.Gun+40
        }
  },
  mounted () {
      this.axios.get("/aaa").then(aa=>{
      this.n1=aa.data.bb;
      })

      // 调用aaa001
      this.jiazai(this.active,this.page0);
        // this.$indicator.open({text:"加载中...",spinnerType:"fading-circle"})
        // this.$indicator.close()
  },
  watch: {
    selectedTab(value){
      if(value=="index"){
        this.$router.push("/");
      }else if(value=="me"){
        this.$router.push("/");
      }
    }
  }
}
</script>

<style>
#lianxi h1,#lianxi label{margin: 0;}
#lianxi img{height: 80px;margin-left: 20px;}
.bg>div>a:nth-child(2){background-color: aquamarine !important;}
</style>