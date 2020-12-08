<template>
    <div id="zhuce">
        <mt-header title="注册页">
            <mt-button type="default" size="small" icon="back" slot="left" @click="zhuce"></mt-button>
            <mt-button slot="right" class="m-0" @click="zhuce">
                <router-link to="/999" class="text-white">去登录</router-link>
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
            @input="mi2"
            v-model="mi22"> 
        </mt-field>
        <mt-field 
            type="password"
            label="确认密码" 
            :state="biao3" 
            disableClear 
            placeholder="请再次输入密码"
            @input="mi3"
            v-model="mi33"> 
        </mt-field>

        <mt-button 
        type="primary" 
        size="large">免费注册</mt-button> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            ming11:"",mi22:"",mi33:"",biao1:"warning",biao2:"warning",biao3:"warning"
        }
    },
    methods: {
        zhuce(){
            this.$router.push("/1000")     
        },
        ming1(){
            var ming0=/^[A-Za-z0-9]{6,18}$/;
            ming0=ming0.test(this.ming11);
            if(ming0!=true){
                this.biao1="error";
            }else {this.biao1="success";}
        },
        mi2(){
            var mi0=/^[A-Za-z0-9]{6,18}$/;
            mi0=mi0.test(this.mi22);
            if(mi0!=true){
                this.biao2="error";
            }else {this.biao2="success";}
        },
        mi3(){
            var mi0=/^[A-Za-z0-9]{6,18}$/;
            mi0=mi0.test(this.mi33);
            if(mi0!=false&&this.biao2=="success"){
                this.biao3="success";
            }else if(mi0!=true){this.biao3="error";}
        }
    }
}
</script>

<style>
#zhuce h1,#zhuce label{margin: 0;}
</style>