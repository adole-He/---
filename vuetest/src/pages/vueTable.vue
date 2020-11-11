<template>
  <div  class="Tablehomebox">
      <div class="Titlebox">
        <div class="Title">{{title}}</div>
        <div class="Titleright"><span>告警总数：</span><span style="color:red">{{Num}}</span></div>
      </div>
      <div class="Tablebox">
        <el-table
          :data="alarmTable"
          height="100%"
          style="width:100%;height:80%;overflow: hidden;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column
            prop="type"
            label="设备类型"
            width="110px"
            align="right"
          ></el-table-column>
          <el-table-column
            prop="distribution"
            label="告警数分布"
            width="180px"
          >
            <template slot-scope="scope">
              <el-progress
                :percentage="scope.row.distribution"
                :stroke-width="12"
              ></el-progress>
            </template>
          </el-table-column>
          <el-table-column
            prop="Alarm"
            :label="firstTitle"
            align="right"
          >
          </el-table-column>
          <el-table-column
            prop="unTotal"
            :label="secondTitle"
            width="120px"
            align="right"
          >
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>


<script>
export default{
  name:"vueTable",
  props:{
    title:{
      type:String,
    },
    Num:{
      type:Number,
    },
    alarmTable:{
      type:Array
    },
    firstTitle:{
      type:String,
    },
    secondTitle:{
      type:String,
    }
  },
  data () {
    return {
    }
  },
  created () {
    for(let i=0;i<5;i++){
    this.alarmTable[i].Alarm = this.alarmTable[i].child +'/'+this.Num;
    this.alarmTable[i].unTotal = parseInt((this.alarmTable[i].child/this.Num)*100)+'%';
  }
    }
}
</script>


<style lang="scss" scoped>
.Tablehomebox{
  width:100%;
  height:100%;
}
.Titlebox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
}
.Title{
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: '儒雅软黑';
  font-weight: 600;
  font-size: 15px;
}
.Titleright{
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: '儒雅软黑';
  font-weight: 500;
  font-size: 13px;
}
.Tablebox{
  height: 90%;
  padding: 15px;
}
::v-deep .el-table{
  overflow: hidden;
}
::v-deep .el-table td{
    padding: 2px 0;
}
::v-deep .el-table th {
    padding: 5px 0;
    font-size: 13px;
}
::v-deep  .el-table::before{
  background-color: white;
}
::v-deep .el-progress-bar__inner{
  border-radius: 0;
  background-image: linear-gradient(to right,rgb(83,121,233),rgb(194,209,252));
}
::v-deep .el-progress-bar__outer{
  border-radius: 0;
}
::v-deep .el-table__body{
  height:90%;
  overflow: hidden;
}
::v-deep .el-progress__text{
  color: rgb(255,122,56);
  font-size: 14px!important;
  padding-left: 4px;
}
.el-progress-bar__outer{
  height: 12px!important;
  border: 1px solid #78335f;
  background-color:transparent;
}
</style>