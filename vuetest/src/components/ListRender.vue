<template>
  <div>
      <h3>遍历数组</h3>
      <ul>
          <li v-for="(person, index) in persons" v-bind:key="index">
              {{index}} ) 姓名：{{person.name}},年龄：{{person.age}},性别：{{person.sex}},
          </li>
      </ul>
  </div>
</template>

<script>
    export default{
        name:"ListRender",
        data(){
            return{
                persons:[
                    {name:'Jude',age:18,sex:'boy'},
                    {name:'李四',age:28,sex:'boy'},
                    {name:'王五',age:38,sex:'boy'},
                    {name:'张三',age:22,sex:'boy'},
                    {name:'赵四',age:43,sex:'boy'},
                    {name:'陈一',age:32,sex:'boy'} 
                ]
            }
        }
    }
</script>


<style scoped>
    ul{
        list-style: none ;
    }
</style>