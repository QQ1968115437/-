<template>
    <div id="denglu">
        <mt-header title="登录页">
            <mt-button type="default" size="small" icon="back" slot="left" @click="fan"></mt-button>
            <mt-button slot="right" class="m-0" @click="zhuce">
                <router-link to="/999" class="text-white">去注册</router-link>
            </mt-button>
        </mt-header>

        <mt-field
            type="text" 
            label="用户名" 
            :state="biao1" 
            placeholder="请输入用户名"
            @input="ming1"
            v-model="ming11">
        </mt-field> 
        <mt-field 
            type="password"
            label="密码" 
            :state="biao2" 
            disableClear 
            placeholder="请输入密码"
            @input="mi1"
            v-model="mi11"> 
        </mt-field>

        <mt-button 
        type="primary" 
        size="large">登录</mt-button> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            ming11:"",mi11:"",biao1:"warning",biao2:"warning"
        }
    },
    methods: {
        zhuce(){
            this.$router.push("/1000")     
        },
        fan(){
            this.$router.push("/")
        },
        ming1(){
            var ming0=/^[A-Za-z0-9]{6,18}$/;
            ming0=ming0.test(this.ming11);
            if(ming0!=true){
                this.biao1="error";
            }else {this.biao1="success";}
        },
        mi1(){
            var mi0=/^[A-Za-z0-9]{6,18}$/;
            mi0=mi0.test(this.mi11);
            if(mi0!=true){
                this.biao2="error";
            }else {this.biao2="success";}
        }
    }
}
</script>

<style>
#denglu h1,#denglu label{margin: 0;}
</style>