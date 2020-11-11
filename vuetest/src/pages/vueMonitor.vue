<template>
  <div class="Box">
        <div class="protitle">
          <span class="title">{{title}}</span>
        </div>
        <div class="probody">
          <div class="circleProgress">
            <div v-if="perceServe==0" class="Smile">
              <img class="circle2" src="@/assets/generalSituationNoData.svg" style="width:110px;height:110px">
              <div class="Buttomtext"><span>无告警</span></div>
            </div>
            <div v-if="perceServe!=0" class="Progress">
              <v-progress :percentage="perceServe"></v-progress>
              <div class="Buttomtext"><span>告警占比</span></div>
            </div>
            <div>
              <div class="Serve"><span>{{alarmTotal}}</span>{{totalNumber}}<span></span></div>
              <div class="Serve"><span>{{alarmItem}}</span>{{serveNumber}}<span></span></div>
            </div>
          </div>
          <div class="tableBox">
            <el-table
              :data="serveData"
              height="100%"
              style="width:100%;height:80%"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            >
              <el-table-column
                type="index"
                width="25px"
              ></el-table-column>
              <el-table-column
                prop="maxAlarm"
                :label="firstTitle"
                width="180"
              ></el-table-column>
              <el-table-column
                prop="score"
                :label="secondTitle"
                align="right"
              ></el-table-column>
            </el-table>
          </div>
        </div>
  </div>
</template>



<script>
import vueProgress from '@/pages/vueProgress'

export default{
  name:"vueMonitor",
  props:{
    title:{
      type:String,
    },
    alarmTotal:{
      type:String
    },
    totalNumber:{
      type:Number
    },
    alarmItem:{
      type:String
    },
    serveNumber:{
      type:Number
    },
    serveData:{
      type:Array
    },
    firstTitle:{
      type:String
    },
    secondTitle:{
      type:String
    }
  },
  data () {
    return {
      perceServe: 0,
    }
  },
  created () {
    this.perceServe = parseInt((this.serveNumber/this.totalNumber)*100);
  },
  components: {
    'v-progress':vueProgress
  },
  watch: {
    serveNumber:{
      handler(){
        console.log("数据更新")
        this.perceServe = parseInt((this.serveNumber/this.totalNumber)*100);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.Box{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.protitle{
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
}
.probody{
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 90%;
}
.title{
  padding-top: 20px;
  padding-left: 20px;
  font-family: '儒雅软黑';
  font-weight: 600;
  font-size: 15px;
}
.circleProgress{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;;
  margin-left: 10px;
}
.tableBox{
  width: 65%;
  height: 100%;
  padding-left: 10px;
  overflow: hidden;
}
::v-deep .el-table td{
    padding: 12px 0;
}
::v-deep .el-table th {
    padding: 6px 0;
    font-size: 13px;
}
::v-deep  .el-table::before{
  background-color: white;
}
.Smile{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.Progress{
  width: 80%;
  height: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.Buttomtext{
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 13px;
  color: grey;
}
.Serve{
  padding: 2px;
  font-size: 13px;
  font-family: '儒雅软黑';
}
::v-deep .el-table__body{
  height:100%;
  overflow: hidden;
}
</style>




  
