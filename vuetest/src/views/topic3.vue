<template>
  <div style="position: relative;overflow-y:hidden">
      <div class="el-header" style="font-size: 13px">
      <!-- 头 -->
        <span style="padding-left:10px；font-size:13px"><a style="font-size:15px;padding-right:5px"><i class="el-icon-s-fold"></i></a>概况页</span>
        <div class="head">
            <span><a style="padding-right:5px"><i class="el-icon-date"></i></a>数据时间：</span>
            <span style="margin-right:10px">17/10/2019~31/10/2019</span>
            <el-button type="primary" plain>近7天</el-button>
            <el-button type="primary" plain>近15天</el-button>
            <el-button type="primary" plain>近30天</el-button>
            <el-button type="primary" plain>自定义</el-button>
        </div>
      </div>
      <!-- 主要部分 -->
			<div class="el-main">
        <!-- 数据统计 -->
        <titleNum></titleNum>
        <!-- Echarts -->
        <div class="chartsBox">
          <div class="chartsPie">
            <div class="title">按各监控模块告警分布统计</div>
            <charts :ObjCharts="chartsObj"></charts>
          </div>
          <div class="chartsPie">
            <div class="title">按告警等级分布</div>
            <charts :ObjCharts="chartsObjsecond"></charts>
          </div>
          <div class="chartsLine">
            <div class="title">告警总数趋势图</div>
            <div id="alarmTotal" style="width:100%;height:90%"></div>
          </div>
        </div>
        <!-- 表格 -->
        <div class="mBox">
        <div class="tableBox" v-for="(t,index) in tableData" :key="index">
          <div :class="t.classTable">
            <vue-table 
            :title="t.title"
            :Num="t.Num"
            :alarmTable="t.alarmTable"
            :firstTitle="t.firstTitle"
            :secondTitle="t.secondTitle"
            ></vue-table>
          </div>
        </div>
        </div>
        <!-- 监控进度条 -->
        <div class="mBox">
        <div class="monitorBox"  v-for="(m,index) in monitorTable" :key="index">
          <div :class="m.proBox">
              <vue-monitor
                :title="m.title"
                :alarmTotal="m.alarmTotal"
                :alarmItem="m.alarmItem"
                :firstTitle="m.firstTitle"
                :secondTitle="m.secondTitle"
                :totalNumber="m.totalNumber"
                :serveNumber="m.serveNumber"
                :serveData="m.serveData"
              ></vue-monitor>
          </div>
          </div>    
          </div>
			</div>
  </div>
</template>

<script>
import titleNum from '@/pages/titleNum'
import vueTable from '@/pages/vueTable'
import vueMonitor from '@/pages/vueMonitor'
import charts from '@/pages/testCharts'

const optionLine={
  grid:{
    x:40,
    y:40,
    x2:40,
    y2:40,
    borderWidth:10
  },
  xAxis:{
    type:'category',
    splitLine:{
      LineStyle:{
        type:'dotted'
      },
      show:true,
    },
    boundaryGap:false,
    data:['01/12','02/12','03/12','04/12','05/12','06/12','07/12'],
    axisLabel:{
      interval:0
    },
    axisLine:{
      show:false,
      LineStyle:{
        color:'rgb(211,211,211)',
        width:1,
        type:'solid',
      }
    },
    textStyle:{
      color:'rgb(197,198,202)'
    }
  },
  yAxis:{
    type:'value',
    splitNumber:2,
    axisLine:{
      show:false,
      LineStyle:{
        color:'rgba(211,211,211,0.8)',
        width:1,
        type:'solid',
      }
    }
  },
  series:[{
    data:[],
    type:'line',
    smooth:true,
    itemStyle:{
      normal:{
        color:'rgba(117,147,238,1)',
        lineStyle:{
          color:'rgba(117,147,238,1)',
          width:4,
        }
      }
    },
    symbol:false,
    areaStyle:{
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:0,
        y2:1.25,
        colorStops:[{
          offset:0,color:'rgba(165,194,255,0.8)'
        },{
          offset:1,color:'rgba(255,255,255,0.5)'
        }],
        opacity:1,
        globalCoord:false
      }
    }
  }]
};

export default{
  name:"topic3",
  data () {
    return {
      chartsData:[{
        title:"各监控模块告警分布统计",
      }],
      chartsObj:{
        legend:{
          legendData:[]
        },
        series:[{
          seriesData:[]
        }],
        color:[]
      },
      chartsObjsecond:{
        legend:{
          legendData:[]
        },
        series:[{
          seriesData:[]
        }],
        color:[]
      },
      tableData:[],
      optionLine,
      monitorTable:[],
    }
  },

  components:{
    titleNum,
    'vue-table':vueTable,
    'vue-monitor':vueMonitor,
    'charts': charts
  },

  methods: {
    getTotalline(){
        this.totalLine = this.$echarts.init(document.getElementById('alarmTotal'));
        this.totalLine.setOption(this.optionLine,true);
      },
  },
    
  created () {
    this.$axios.get("/api/charts").then(res=>{
      //饼图1
      this.chartsObj.series[0].seriesData = res.data.statisNum;
      this.chartsObj.legend.legendData = res.data.statisNum;
      let all=0;
      for(let i=0;i<this.chartsObj.series[0].seriesData.length;i++){
        all = all+this.chartsObj.series[0].seriesData[i].value;
      }
      for(let i=0;i<this.chartsObj.series[0].seriesData.length;i++){
        this.chartsObj.legend.legendData[i].percent = ((this.chartsObj.legend.legendData[i].value/all)*100).toFixed(0)+"%"
      }
      this.chartsObj.color =[
        'rgb(247,164,132)','rgb(249,196,149)','rgb(252,227,169)',
        'rgb(117,147,238)','rgb(134,166,244)','rgb(165,194,255)'],

      //饼图2
      this.chartsObjsecond.series[0].seriesData = res.data.levelNum;
      this.chartsObjsecond.legend.legendData = res.data.levelNum;
      let total=0;
      for(let i=0;i<this.chartsObjsecond.series[0].seriesData.length;i++){
        total = total+this.chartsObjsecond.series[0].seriesData[i].value;
      }
      for(let i=0;i<this.chartsObjsecond.series[0].seriesData.length;i++){
        this.chartsObjsecond.legend.legendData[i].percent = ((this.chartsObjsecond.legend.legendData[i].value/total)*100).toFixed(0)+"%"
      }
      this.chartsObjsecond.color =[
        'rgb(247,164,132)','rgb(252,227,169)',
        'rgb(117,147,238)','rgb(165,194,255)'],

      //折线图
      this.optionLine.series[0].data = res.data.LineNum;
      this.totalLine.setOption(this.optionLine,true);
      window.addEventListener("resize",()=>{
        this.totalLine.resize();
      })
      })

    this.$axios.get("/api/table").then(res=>{
      //表格
        this.tableData = res.data.tableData;

    })

    this.$axios.get("/api/monitor").then(res=>{
        this.monitorTable = res.data.monitorTable
    })

  },
  mounted () {
      this.getTotalline();
  }
}
</script>

<style scoped>
.el-header {
  height: 54px;
  width: 100%;
  background-color: white;
  color: black;
  line-height: 54px;
  border-bottom: rgba(170, 170, 170,0.5) 1px solid;
}
.el-button{
  padding: 10px 14px;
  font-size: 12px;
}
.head{
  float: right;
  padding-right: 10px;
}
.el-main{
  height: calc(100vh - 54px);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  background-color: rgb(238, 241, 246);
  overflow: auto;
}
.chartsBox{
    display: flex;
    align-items: center;
    height: 255px;
    width: 100%;
    margin-bottom: 10px;
}
.chartsPie{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;
    margin-right: 10px;
    background-color: rgb(255, 255, 255);
    border: rgba(170, 170, 170,0.5) 1px solid;
}
.title{
  padding-top:20px;
  padding-left:20px;
  font-family: '儒雅软黑';
  font-weight: 600;
  font-size: 15px;
}
.chartsLine{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;
    background-color: rgb(255, 255, 255);
    border: rgba(170, 170, 170,0.5) 1px solid;
}
.tableBox{
  display: flex;
  width: 50%;
  height: 340px;
  margin-bottom: 10px;
}
.tableLaas{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  margin-right: 5px;
  border: rgba(170, 170, 170,0.5) 1px solid;
  overflow: hidden;
}
.tablePaas{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  border: rgba(170, 170, 170,0.5) 1px solid;
  margin-left: 5px;
  overflow: hidden;
}
.monitorBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 360px;
}
.proBoxleft{
  width: 100%;
  height: 350px;
  border: rgba(170, 170, 170,0.5) 1px solid;
  margin-right: 5px;
  background-color: white;
}
.proBoxright{
  width: 100%;
  height: 350px;
  border: rgba(170, 170, 170,0.5) 1px solid;
  margin-left: 5px;
  background-color: white;
}
.mBox{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>