<template>
    <div>
        <div>
            <h3>排序</h3>
            <button @click="orderByAge(0)">默认</button>
            <button @click="orderByAge(2)">年龄↑</button>
            <button @click="orderByAge(1)">年龄↓</button>
        </div>

    <p>-----------------------------------------------------</p>

    <h3>搜索列表</h3>
        <input type="text" placeholder="请输入要搜索的姓名" v-model="searchName">
        <ul>
            <li v-for="(p,index) in FilterPersond" v-bind:key="index">
                {{index + 1}} )姓名：{{p.name}}---性别：{{p.sex}}---年龄：{{p.age}}
            </li>
        </ul>
    </div>
</template>

<script> 
    export default{
        name:"ListRenderTwo",
        data () {
            return {
                searchName:'',
                persons:[
                    {name:'Jude',age:18,sex:'男'},
                    {name:'李四',age:28,sex:'男'},
                    {name:'王五',age:38,sex:'女'},
                    {name:'张三',age:22,sex:'男'},
                    {name:'赵四',age:43,sex:'男'},
                    {name:'陈一',age:32,sex:'女'},
                    {name:'Amy',age:20,sex:'女'},
                    {name:'王芳',age:35,sex:'女'},
                    {name:'陈磊',age:38,sex:'男'},
                    {name:'王子涵',age:22,sex:'女'},
                    {name:'赵四',age:32,sex:'男'},
                    {name:'薛宝',age:22,sex:'女'},
                    {name:'Justin',age:18,sex:'男'},
                    {name:'Tom',age:25,sex:'男'},
                    {name:'李四',age:36,sex:'女'},
                    {name:'张三',age:24,sex:'男'},
                    {name:'老坛',age:23,sex:'男'},
                    {name:'王五',age:32,sex:'女'},
                ],
                orderType: 0
            }
        },
        computed: {
            FilterPersond(){
                //1.获取数据
                let{searchName,persons,orderType} = this;
                //2.取出数组中的数据
                let arr = [...persons];
                //3.过滤数组
                if(searchName.trim()){
                    arr = persons.filter(p=>p.name.indexOf(searchName)!==-1);
                }
                //4.排序
                if(orderType){
                    arr.sort((p1,p2)=>{
                        if(orderType===1){//降序
                            return p2.age - p1.age
                        }else{//升序
                            return p1.age - p2.age
                        }
                    });
                }
                return arr;
            }
        },
        methods: {
            orderByAge(orderType){
                this.orderType = orderType;
            }
        }
    }
</script>
    

<style scoped>
    ul{
        list-style: none ;
    }
    ul li{
        padding: 4px;
    }
</style>