<template>
    <div id="xiangqing" style="user-select: none;">
      <div style="position: fixed;width: 100%;">
            <mt-header title="详情页">
                <mt-button type="default" size="small" icon="back" slot="left" @click="fan"></mt-button>
                <mt-button slot="right" class="m-0">
                <router-link to="/999" class="text-white">登录</router-link>
                </mt-button>
            </mt-header>

            <div class="h5 m-0 px-5 py-2 text-center bg1 text-white">
                {{m.subject}}
                <div class="text-left pt-2" style="font-size: 14px;">发表于：{{moment(m.created_at).format('YYYY年MM月DD日HH:mm:ss')}}</div>
            </div>
            <div class="d-flex p-2 bg-primary">
                <div style="width: 50px;" class="mr-2"><img :src="m.avatar" alt="" style="border-radius: 20%;width: 100%;"></div>
                <div class="d-flex flex-column justify-content-around">
                    <span class="text-white">{{m.nickname}}</span>
                    <mt-badge type="success" size="small">共{{m.article_number}}篇作品</mt-badge>
                </div>
            </div>
            
      </div>
        <div v-html="m.content" class="bg-secondary text-white p-4 img" style="padding-top: 200px !important;"></div>

        <!-- 底部选项卡 -->
      <mt-tabbar fixed>
        <mt-tab-item id="me" class="text-white bg-success py-2 d-flex justify-content-around">
            <span class="h5 px-2">评论一下</span>
            <input type="text" class="m-0 p-2 kuang" placeholder="评论一下...">
            <button class="btn-sm btn-danger ml-2">发送</button>
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            m:{}    
        }
    },

    methods: {
        fan(){
            this.$router.go("-1");
        }  
    },
    mounted () {
        let id=this.$route.params.id;
        this.axios.get("/touxiang",{
            params:{
                id:id
            }
        }).then(a=>{
            console.log(a.data.bb);
            var b=a.data.bb;
            if(b.avatar!=null){
                b.avatar=require('../../resource/avatar/'+b.avatar);
              };
              b.article_number=155;
              this.m=b;
        })

        // moment().format();
    }
}
</script>

<style>
#xiangqing h1,#xiangqing label{margin: 0;}
.kuang{width: 250px;border-radius: 10%;border: 0;font-size: 18px;}
.kuang:focus{outline: 0;}
.img img{width: 88vw;}
.bg1{background-color: rgb(36, 138, 255);}
</style>