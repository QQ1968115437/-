<template>
    <div id="countdown">
        <h1 class="text-success">倒计时</h1>
        <hr>
            <div>{{day}}天{{hour}}时{{min}}分{{second}}秒</div>
        <hr>
    </div>
</template>

<script>
export default {
    data () {
        return {
            day:"00",hour:"00",min:"00",second:"00"//时间默认值
            ,sum:3599
        }
    },
    mounted() {
        setInterval(()=>{
            let sum=this.sum;
            if (sum>=0) {
                this.day = Math.floor(sum / (60 * 60 * 24));
                this.hour = Math.floor(sum / (60 * 60)) - (this.day * 24);
                this.min = Math.floor(sum / 60) - (this.day * 24 * 60) - (this.hour * 60);
                this.second = Math.floor(sum) - (this.day * 24 * 60 * 60) - (this.hour * 60 * 60) - (this.min * 60);
                if (this.day <= 9) this.day = '0' + this.day;
                if (this.hour <= 9) this.hour = '0' + this.hour;
                if (this.min <= 9) this.min = '0' + this.min;
                if (this.second <= 9) this.second = '0' + this.second;
            }
            this.sum--;
        },1000)
    }
}
</script>

<style>

</style>