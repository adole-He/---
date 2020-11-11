<template>
    <div>
        <div v-if="flag">今晚要上课！</div>
        <div v-else>今晚不上课！</div>
        <p></p>
        <button @click="flag =!flag">切换</button>

        <p>---------------------------</p>

        <div v-show="flag">今晚讲vue！</div>
        <div v-show="!flag">今晚不讲vue！</div>
        <p></p>
        <button @click="flag =!flag">切换</button>
    </div>
</template>

<script>
export default {
        name:"IfAndSHow",
        data(){
            return{
                flag:true,//上课
            }
        }
}
</script>

<style scoped>

</style>