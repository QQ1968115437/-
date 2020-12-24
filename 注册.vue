<template>
    <div id="zhuce">
        <div class="border">
            <h4>账号密码{{zhu==0?"登录":"注册"}}
                <span class="float-right h6 p-2 m-0 lv0" @click="zhu==0?zhu=1:zhu=0">{{zhu==0?"账号注册":"账号登录"}}</span>
            </h4>
            <!-- 用户名 -->
            <mt-field type="text" label="用户名" :state="b1" placeholder="请输入用户名" v-model="user" class="my-4 lvl">
                <img class="icon-space" src="https://pages.anjukestatic.com/usersite/touch/img/user/login/icon_man@2x.png" width="20px" height="20px" alt="">
            </mt-field> 
            <!-- 密码 -->
            <mt-field type="password" label="密码" :state="b2" disableClear placeholder="请输入密码" v-model="m1" class="lvl">
                <img class="icon-space" src="https://pages.anjukestatic.com/usersite/touch/img/user/login/icon_lock@2x.png" width="20px" height="20px" alt="">
            </mt-field>

            <mt-field v-if="zhu==1" type="password" label="确认密码" :state="b3" disableClear placeholder="请再次输入密码" v-model="m2" class="mt-4 lvl">
                <img class="icon-space" src="https://pages.anjukestatic.com/usersite/touch/img/user/login/icon_lock@2x.png" width="20px" height="20px" alt="">
            </mt-field>
            <p v-if="ti==1" class="ti">至少6个字符,并且包含一个字母和数字</p>
            <!-- 按钮 -->
            <mt-button v-if="zhu==0" type="primary" size="large" @click="denglu" class="mt-4 lv w-50">{{"立即登录"}}</mt-button>
            <mt-button v-if="zhu==1" type="primary" size="large" @click="zhuce" class="mt-4 lv w-50">{{"马上注册"}}</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user:"",m1:"",m2:"",zhu:0,ti:1,
            b1:"warning",b2:"warning",b3:"warning"
        }
    },
    methods: {
        zhuce(){
            if(this.b1=="success" && this.b2=="success" && this.b3=="success"){
                this.axios.get("/users")
                .then(res => {
                    let a=res.data;
                    for(var k in a){
                        if(this.user==a[k].user){
                            alert("该用户已被注册");return;
                        }else if(k==a.length-1){
                            let newUser={"user":this.user,"password":this.m1};
                            this.axios.post("/users",newUser);
                            alert("注册成功");return;
                        }
                    }
                })
            }else{
                alert("请填写完整的账号信息")
            }
        },
        denglu(){
            if(this.b1=="success" && this.b2=="success"){
                this.axios.get("/users")
                .then(res => {
                    let a=res.data;
                    for(var k in a){ 
                        if(this.user==a[k].user){
                            if(this.m1==a[k].password){
                                alert("登陆成功");return;
                            }else{
                                alert("请确认密码是否正确");return;
                            }
                        }else if(k==a.length-1){
                            alert("请确认账号是否正确");return;
                        }
                    }
                })
            }else{
                alert("请填写完整的账号信息")
            }
        }
    },
    watch: {
        user:function(e){
            if(e==""){
                this.b1="warning";
            }else{
                let user=/^[A-Za-z0-9]{3,}$/;
                user=user.test(e);
                if(user){this.b1="success"}else{this.b1="error"};
            };
        },
        // 密码至少一个字母和数字
        m1:function(e){
            if(e==""){
                this.ti=1;this.b2="warning";
            }else{
                this.ti=0;
                let mi=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
                mi=mi.test(e);
                if(mi){this.b2="success"}else{this.b2="error"};
            };
        },
        m2:function(e){
            if(e==""){
                this.b3="warning";
            }else{
                e==this.m1?this.b3="success":this.b3="error";
            };
        }
    }
}
</script>
<style>
/* 修改muit-ui样式,公有化 */
.lvl>div.mint-cell-wrapper{
    background-image: linear-gradient(180deg,#fff0,#fff0 0%,transparent 0) !important;
    border: 1px solid rgb(184, 184, 184);
    background-color: #F8F9FB;
}
.lvl>div.mint-cell-wrapper:hover{border: 1px solid #188f006e;}
.lvl input{background-color: #F8F9FB !important;}
.lvl div.mint-cell-title{padding: 0 20px;}
</style>

<style scoped>
/* 本页面样式 */
#zhuce>div{width: 542px;padding: 25px 45px;margin: auto;border-radius: 10px;color: #464646;}
#zhuce h1,#zhuce label{margin: 0;}
.lv0:hover{cursor: pointer;color: #ff7873;}
.ti{font-size: 10px;color: #ff7873;padding: 2px 5px;}
.lv{height: 50px !important;background-color: #3cb951ee !important;margin: auto;line-height: 50px;}
.lv:focus{outline: 0}
.icon-space{position: absolute;left: -430px;top: -8px;}
</style>