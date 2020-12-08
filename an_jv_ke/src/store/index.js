import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
export default new Vuex.Store({
    debug: true,
    state:{
        username:localStorage.getItem("username")||"无名",
        age:localStorage.getItem("age")||0,
        sex:true,
        isLogined:localStorage.getItem("isLogined")||0,
        products:[ 
            { id:1, productName:'商品 1', salePrice:2389.99 }, 
            { id:3, productName:'商品 2', salePrice:6999.99 } 
        ]
    },
    getters:{},
    mutations:{
        gg(state,bb){
            state.username=bb;
            state.age=999
        },
        nn(state){
            state.username="无名";
            state.age=0
        },
        ggg(state,cc){
            state.isLogined=localStorage.setItem("isLogined",cc);
            if(cc==1){
                localStorage.setItem("username",state.username);
                localStorage.setItem("age",state.age);
            }
        }
    },
    actions:{
        getServerData(c){
            axios.get('/222')
            .then(a => {
                c.commit('gg',a.data.name);
                c.commit('ggg',a.data.isLogined);
            })
        }
    },
    modules:{}
})