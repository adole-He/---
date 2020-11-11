<template>
  <div id="app">
    <el-container>
      <el-aside class="side" width=null>
          <keep-alive>
            <v_leftmenu></v_leftmenu>
          </keep-alive>
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive>
              <router-view class="router-view"></router-view>
            </keep-alive>
          </el-main>
        </el-container>
    </el-container>
    <!-- <ul><li v-for="(item,key) in data" :key="key">{{item}}</li></ul> -->
  </div>
</template>

<script>
// import Vue from 'Vue';
import LeftMenu from './components/LeftMenu';
import 'element-ui/lib/theme-chalk/index.css';
// import {getStudentPagedList} from "./api/student"

export default {
  name:'app',
  components:{
    'v_leftmenu':LeftMenu
  }


}
</script>

<style lang="scss">
html{
  overflow-y: auto;
  overflow-x: hidden;
}
body{
  margin: 0px;
  overflow: hidden;
}
.el-container{
  height: 100vh;
  border: 1px solid #eee;
  direction: vertical;
  border: 0px;
}                                 
.el-container.is-vertical, .el-drawer {
    -webkit-box-orient: vertical;
    background-color: lightgray;
}          
.side{
   width:150px;
   background-color: rgb(247,248,250);
}
.head{
  float: right;
}
.el-button--primary.is-plain {
    color: #000000;
    background: #ffffff;
    border-color: #d4d8dc;
}
.el-aside {
    color: #333;
}
.el-main{
  height: 100%;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: rgb(238, 241, 246);
}
.router-view{
  height: 100%;
}
::-webkit-scrollbar
{
  width: 8px;
  height: 8px;
  overflow-y:scroll;
	// background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
  height: 100px;
	border-radius: 10px;
	background-color:  rgb(255,255,255);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
  height: 100px;
	background-color:  rgb(205,207,216);
}
</style>
