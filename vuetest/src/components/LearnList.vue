<template>
  <div id="app" >
      <fieldset>
          <legend>用户信息表</legend>
          <div>
              <span>姓名：</span>
              <input type="text" placeholder="请输入姓名" v-model="NewPerson.name">
          </div>
          <div>
              <span>年龄：</span>
              <input type="text" placeholder="请输入年龄" v-model="NewPerson.age">
          </div>
          <div>
              <span>性别：</span>
              <select v-model="NewPerson.sex">
                  <option>男</option>
                  <option>女</option>
              </select>
          </div>
          <div>
              <span>电话：</span>
              <input type="text" placeholder="请输入电话号码" v-model="NewPerson.phone">
          </div>
          <div>
              <button @click="createNewPerson()">保存信息</button>
          </div>
      </fieldset>


      <h3>搜索列表</h3>
        <input type="text" placeholder="请输入要搜索的姓名" v-model="searchName">
              <button @click="createNewPerson()">查询</button>
        <p></p>
      <table>
          <thead>
          <tr>
              <td>姓名</td>
              <td>年龄</td>
              <td>性别</td>
              <td>电话号码</td>
              <td>操作</td>
          </tr>
          </thead>
          <tbody>
              <tr v-for="(p,index) in FilterPersond" v-bind:key="index">
                <td v-text="p.name"></td>  
                <td v-text="p.age"></td>
                <td v-text="p.sex"></td>
                <td v-text="p.phone"></td>
                <td>
                    <button @click="delPerson(index)">删除</button>
                </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>



<script>
    export default{
        name:"LearnList",
        data () {
            return {
                searchName:'',
                persons:[
                    {name:"张三",age:20,sex:"男",phone:"13375698056"},
                    {name:'李四',age:28,sex:'男',phone:"13375698056"},
                    {name:'王五',age:38,sex:'女',phone:"13375698056"},
                    {name:'王芳',age:35,sex:'女',phone:"13375698056"},
                    {name:'陈磊',age:38,sex:'男',phone:"13375698056"},
                    {name:'王子涵',age:22,sex:'女',phone:"13375698056"},
                    {name:'赵四',age:32,sex:'男',phone:"13375698056"},
                    {name:'李四',age:36,sex:'女',phone:"13375698056"},
                    {name:'张三',age:24,sex:'男',phone:"13375698056"},
                    {name:'老坛',age:23,sex:'男',phone:"13375698056"},
                    {name:'王五',age:32,sex:'女',phone:"13375698056"}
                ],
                NewPerson:{name:"",age:0,sex:"男",phone:""},
                // fullHeight:document.documentElement.clientHeight
            }
         },
        // watch:{
        //     fullHeight (val) {//监控浏览器高度变化
		// 		if(!this.timer) {
		// 			this.fullHeight = val
		// 			this.timer = true
		// 			let that = this
		// 			setTimeout(function (){
		// 				that.timer = false
		// 			},400)
		// 		}
		// 	}
        // },
        // mounted () {
		// 	this.get_bodyHeight()
		// },
        computed: {
            FilterPersond(){
                //1.获取数据
                let{searchName,persons} = this;
                //2.取出数组中的数据
                let arr = [...persons];
                //3.过滤数组
                if(searchName.trim()){
                    arr = persons.filter(p=>p.name.indexOf(searchName)!==-1);
                }
                return arr;
            }
        },
        methods:{
		// 	get_bodyHeight () {//动态获取浏览器高度
		// 		const that = this
		// 		window.onresize = () => {
		// 			return (() => {
		// 				window.fullHeight = document.documentElement.clientHeight
		// 				that.fullHeight = window.fullHeight
		// 			})()
		// 		}
		// 	},
            createNewPerson(){
                let{name,age,sex,phone}=this.NewPerson;// eslint-disable-line no-unused-vars
                if(name === ''){
                    alert("姓名不能为空");
                    return;
                }
                if(age <= 0){
                    alert("年龄不能为空");
                    return;
                }
                if(phone === ''){
                    alert("电话号码不能为空");
                    return;
                }

                this.persons.unshift(this.NewPerson);
                this.NewPerson={name:"",age:0,sex:"男",phone:""};
            },

            delPerson(index){
                this.persons.splice(index,1);
            },
        }

}
</script>



<style scoped>
    #app{
        margin: 100px auto;
        width: 600px;
    }
    fieldset{
        border: 1px solid orangered;
        margin-bottom: 20px;
    }
    fieldset input{
        width: 200px;
        height: 30px;
        margin: 10px 0;
    }
    table{
        width: 600px;
        border: 2px solid orangered;
        text-align: center;
    }
    thead{
        background-color: orangered;
    }
</style>