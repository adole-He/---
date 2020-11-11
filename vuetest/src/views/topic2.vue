<template>
  <div style="position: relative;overflow-y:hidden">
      <div class="el-header" style="font-size: 13px">
      <!-- 头 -->
      <span style="padding-left:10px"><i class="el-icon-s-fold"></i>故障处理视图</span>
      <div class="head">
      <span><i class="el-icon-date"></i>数据时间：</span>
      <span style="margin-right:10px">17/10/2019~31/10/2019</span>
      <el-button type="primary" plain>近15天</el-button>
      <el-button type="primary" plain>近40天</el-button>
      <el-button type="primary" plain>近90天</el-button>
      <el-button type="primary" plain>自定义</el-button>
      </div>
      </div>
      <div class="el-main">
      <div class="homeBox">
      <!-- //主页面 -->
      <div class="box1">
        <div class="box2">
          <div class="box21">
            <div class="box21-1"  v-for="(item,key) in data" :key="key">
              <div style="display:flex;flex-direction:column;align-items: center;">
                <div style="font-family:'儒雅软黑';color:red;font-size:17px;font-weight:900;padding-bottom:5px">{{item.untreatFlaut}}</div>
                <div style="font-size:12px;font-family:'宋体';font-weight:500px">未处理完成故障数</div>
              </div>
              <div style="display:flex;flex-direction:column;align-items: center;">
                <div style="font-family:'儒雅软黑';color:black;font-size:17px;font-weight:900;padding-bottom:5px">{{item.Flaut}}</div>
                <div style="font-size:12px;font-family:'宋体';font-weight:500px">故障总数</div>
                </div>
              <div style="display:flex;flex-direction:column;align-items: center;">
                <div style="padding-bottom:5px"><a style="font-family:'儒雅软黑';color:black;font-size:17px;font-weight:900;padding-right:4px">{{item.flautTime}}</a><a style="font-size:12px;font-family:'宋体';font-weight:500px">分钟</a></div>
                <div style="font-size:12px;font-family:'宋体';font-weight:500px">故障处理平均时长</div>
              </div>
            </div>
            <div class="box21-2">
              <div class="titleText">故障趋势图</div>
              <div class="Echarts">
                <div id="lineChart" style="width:100%;height:100%;">
                </div>
              </div>
            </div>
          </div>
          <div class="box22">
            <div class="titleText">按故障等级统计数量</div>
            <div class="Echarts">
                <div id="barChart" style="width:100%;height:100%"></div>
            </div>
          </div>
        </div>
        <div class="box3">
          <div class="box31">
            <div class="box31-1">
              <div class="titleText">各资源故障类型占比</div>
              <div class="Echarts">
                <div id="pieChart" style="width:100%;height:90%;border-right: rgb(211,211,211) 1px solid;"></div>
              </div>
            </div>
            <div class="box31-2"> 
              <el-collapse>
                <el-collapse-item>
                  <span class="collapse-title" slot="title">laaS</span>
                  <div style="display:flex;flex-direction:column;">
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">主机</span><el-progress :percentage="arrayM" :stroke-width="10" :format="format"></el-progress></span>
                    </div>
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">防火墙</span><el-progress :percentage="arrayF" :stroke-width="10" :format="format"></el-progress></span>
                    </div>
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">交换机</span><el-progress :percentage="arrayC" :stroke-width="10" :format="format"></el-progress></span>
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item>
                  <span class="collapse-title" slot="title">SaaS</span>
                  <div style="display:flex;flex-direction:column;">
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">MYsql</span><el-progress :percentage="arrayMY" :stroke-width="10" :format="format" :color="customColor"></el-progress></span>
                    </div>
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">DBProxy</span><el-progress :percentage="arrayDBP" :stroke-width="10" :format="format" :color="customColor"></el-progress></span>
                    </div>
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">Geteway</span><el-progress :percentage="arrayGete" :stroke-width="10" :format="format" :color="customColor"></el-progress></span>
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item>
                  <span class="collapse-title" slot="title">Paas</span>
                  <div style="display:flex;flex-direction:column;">
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">应用</span><el-progress :percentage="arrayUse" :stroke-width="10" :format="format" :color="customColors"></el-progress></span>
                    </div>
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">场景</span><el-progress :percentage="arrayPlace" :stroke-width="10" :format="format" :color="customColors"></el-progress></span>
                    </div>
                    <div>
                    <span style="display:flex;font-size:12px"><span style="width:20%;display:flex;justify-content:flex-end;">服务</span><el-progress :percentage="arrayServe" :stroke-width="10" :format="format" :color="customColors"></el-progress></span>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="box32">
            <div style="width:100%">
              <div class="titleText">故障影响的资源TOP 5</div>
            </div>
            <div style="width:95%;height:80%;padding-bottom:10px;padding-top:15px">
            <el-table
              :data="tableData"
              height='100%'
              style="width:100%;height:80%"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            >
            <el-table-column
              type="index"
              width="30px">
            </el-table-column>
            <el-table-column
              prop="name"
              :show-overflow-tooltip='true'
              label="资源名称">
            </el-table-column>
            <el-table-column
              prop="num"
              label="影响次数"
              width="90">
            </el-table-column>
            </el-table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  
  </div>
</template>


<script>
//折线图
const option1 = {
        grid:{
              x:40,
              y:18,
              x2:40,
              y2:30,
              borderWidth:10
        },
        xAxis:{
          type:'category',
          splitLine:{   //网格线
          lineStyle:{
            type:'dotted'    //设置网格线类型 dotted：虚线   solid:实线
          },
            show:true},
          boundaryGap: false, 
          data:['17/10','18/10','19/10','20/10','21/10','22/10','23/10','24/10','25/10','26/10','27/10','28/10','29/10','40/10','31/10'],
          axisLabel:{
            interval:0
          },
          axisLine:{
                  show:false,
                  lineStyle:{
                    color:'grey',
                    width:1,
                    type:'solid',
                  }
                },
          textStyle:{
            color:'grey'
          }
        },
        yAxis:{
          type:'value',
          splitNumber:2,
          axisLine:{
                  show:false,
                  lineStyle:{
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
              color:'rgb(110,144,248)',
              lineStyle:{
                color:'rgb(110,144,248)'
              }
            }
          },
          symbolSize:4,
          symbol:'circle', 
          areaStyle: {         // 颜色自上而下渐变
            // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1.25,
              colorStops: [{
                offset: 0, color: 'rgba(206,218,252,1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255,255,255,0.5)' // 100% 处的颜色
              }],
              opacity: 1,
              globalCoord: false // 缺省为 false
            }
            },
          }]
        };

//柱形图
const option2 = {
            grid:{
              x:40,
              y:30,
              x2:30,
              y2:35,
              borderWidth:10
            },
            xAxis: {
              type: 'category',
              data: ['一级故障','二级故障','三级故障','四级故障'],
              nameTextStyle:{             //---坐标轴名称样式
                    color:"rgb(110,144,248)",
                    padding:[5,0,0,-5], //---坐标轴名称相对位置
                },
                axisLine:{
                  show:true,
                  lineStyle:{
                    color:'rgb(211,211,211,0.8)',
                    width:1,
                    type:'solid',
                  }
                },
                axisLabel:{
                  color:'black',
                  interval:0
                }
            },
            yAxis: {
              type: 'value',
              splitNumber:3,
              axisLine:{
                  show:true,
                  lineStyle:{
                    color:'rgb(211,211,211,0.8)',
                    width:1,
                    type:'solid',
                  }
                }
            },
            series: [{
              data:[],
              type: 'bar',
              itemStyle:{
                normal:{
                color:"rgb(110,144,248)",
                  label:{
                    show:true,
                    position: 'top',
                    textStyle:{
                      color:'rgb(110,144,248)',
                    }
                  }
                }
              },
              barWidth:'25',
            }]
          }


const option3 = {
          legend:{
            orient: 'vertical',
            left:'60%',
            y:'center',
            itemWidth: 12,   // 设置图例图形的宽
            itemHeight: 12,  // 设置图例图形的高
            textStyle: {
              fontSize:14,
              color: 'rgb(77,79,92)',  // 图例文字颜色
            },
            data: [],
          },
          series:[{
            type:'pie',
            radius:['0%','58%'],
            center: ['30%', '50%'],  
            data:[
              {value:'',name:''},
              {value:'',name:''},
              {value:'',name:''},
            ],
            itemStyle: {
                borderWidth: 3,
                borderColor:'#fff',
                // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
                // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
                emphasis: {
                  show:false
                }
              },
            labelLine: {
                normal: {
                  show: false
                }
              },

            label: {
                normal: {
                  show:false
                }
            }
          }],
          tooltip: {
            // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
            trigger: 'item',
            showDelay: 20,   // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            hideDelay: 20,   // 隐藏延迟，单位ms
            backgroundColor: 'rgba(205,207,216,0.5)',  // 提示框背景颜色
            textStyle: {
              fontSize: '12px',
              color: '#000'  // 设置文本颜色 默认#FFF
            },
            // formatter设置提示框显示内容
            // {a}指series.name  {b}指series.data的name
            // {c}指series.data的value  {d}%指这一部分占总数的百分比
            formatter: '{b}'
          },
          color:['rgb(232,190,144)','rgb(252,230,159)','rgb(148,179,249)']
        };
export default{
	name: 'topic2',
	data(){
		return{
      data:[],
      tableData:[],
      arrayM:0,arrayF:0,arrayC:0,
      arrayMY:0,arrayDBP:0,arrayGete:0,
      arrayUse:0,arrayPlace:0,arrayServe:0,
      customColor:'rgb(232,190,144)',
      customColors:'rgb(252,230,159)',
      option1,option2,option3,
      myChart:'',myBar:'',myPie :'',
    }
  },

  methods:{
        //折线图
        getLine(){
          /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
        // 基于准备好的dom，初始化echarts实例
          this.myChart = this.$echarts.init(document.getElementById('lineChart'));
          this.myChart.setOption(this.option1,true);
        },

        //柱状图
        getBar(){
          this.myBar = this.$echarts.init(document.getElementById('barChart'));
          this.myBar.setOption(this.option2,true);
        },

        //饼图
         getPie () {
        // 基于准备好的dom，初始化echarts实例
        this.myPie =this. $echarts.init(document.getElementById('pieChart'));
        this.myPie.setOption(this.option3,true);
      },
    
        //进度条
        format(percentage) {
          if(percentage==100){
            return percentage === 100 ? '6' : `${percentage}`;
          }else if(percentage==82){
            return percentage === 82 ? '5' : `${percentage}`;
          }else if(percentage==66){
            return percentage === 66 ? '4' : `${percentage}`;
          }else if(percentage==49){
            return percentage === 49 ? '3' : `${percentage}`;
          }else if(percentage==33){
            return percentage === 33 ? '2' : `${percentage}`;
          }else if(percentage==16){
            return percentage === 16 ? '1' : `${percentage}`;
          }
      },
        
    },

    
  created(){
    this.$axios.get("/api/data").then(res=>{
      this.data = res.data.data;
      this.tableData = res.data.tableData;
      this.arrayM = res.data.arrayM;
      this.arrayF = res.data.arrayF;
      this.arrayC = res.data.arrayC;
      this.arrayMY = res.data.arrayMY;
      this.arrayDBP = res.data.arrayDBP;
      this.arrayGete = res.data.arrayGete;
      this.arrayUse = res.data.arrayUse;
      this.arrayPlace = res.data.arrayPlace;
      this.arrayServe = res.data.arrayServe;
      this.option1.series[0].data = res.data.linenum;
      this.option2.series[0].data = res.data.barnum;
      this.option3.series[0].data = res.data.pievalue;
      const value1 = res.data.pievalue[0].value;
      const value2 = res.data.pievalue[1].value;
      const value3 = res.data.pievalue[2].value;
      const all = value1 + value2 + value3;
      this.option3.legend.data[0] = "laaS"+'      '+ value1 +'        '+((value1/all)*100).toFixed(0)+'%';
      this.option3.legend.data[1] = "SaaS"+'      '+ value2 +'        '+((value2/all)*100).toFixed(0)+'%';
      this.option3.legend.data[2] = "Paas"+'      '+ value3 +'        '+((value3/all)*100).toFixed(0)+'%';
      this.option3.series[0].data[0].name = "laaS"+'      '+ value1 +'        '+((value1/all)*100).toFixed(0)+'%';
      this.option3.series[0].data[1].name = "SaaS"+'      '+ value2 +'        '+((value2/all)*100).toFixed(0)+'%';
      this.option3.series[0].data[2].name = "Paas"+'      '+ value3 +'        '+((value3/all)*100).toFixed(0)+'%';
      this.myChart.setOption(this.option1,true);
      window.addEventListener("resize",()=>{
          this.myChart.resize();
      })
      this.myBar.setOption(this.option2,true);
      window.addEventListener("resize",()=>{
          this.myBar.resize();
      })
      this.myPie.setOption(this.option3,true);
      window.addEventListener("resize",()=>{
            this.myPie.resize();
          })
      })
    },

   mounted() {
        this.getLine();
        this.getPie();
        this.getBar();
    },

}
</script>
<style lang="scss" scoped>
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
  position: relative;
  height: 88%;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  background-color: rgb(238, 241, 246);
}
.homeBox{
  height: 100%;
  width: 100%;
}
.box1{
  display: flex;
  justify-content: space-around;
  flex-direction:column;
  width: 100%;
  height: 100%;
}
.box2{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 46%;
}
.box21{
  display: flex;
  flex-direction:column;
  width: 60%;
  height: 100%;
}
.box21-1{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  background-color: rgb(255, 255, 255);
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.box21-2{
  display: flex;
  flex-direction:column;
  height: 70%;
  background-color: rgb(255, 255, 255);
  margin-top: 15px;
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.box22{
  display: flex;
  flex-direction:column;
  margin-left: 15px;
  width: 40%;
  height: 100%;
  background-color: white;
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.box3{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 54%;
  margin-top: 15px;
}
.box31{
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: white;
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.box31-1{
  display: flex;
  flex-direction:column;
  width: 60%;
  height: 100%;
}
.box31-2{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
  max-height: 300px;
  overflow-y: scroll;
}
.box32{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction:column;
  width: 40%;
  height: 100%;
  margin-left: 15px;
  background-color: white;
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.Echarts{
  display: flex;
  justify-content: center;
	width: 100%;
	height: 100%;
}
// ::v-deep .el-table__header {
//     table-layout: fixed;
//     font-weight: 0;
//     font-family: -webkit-body;
// }
.el-table{
  font-size: 13px;
}
::v-deep .el-table td{
    padding: 8px 0;
}
::v-deep .el-table th {
    padding: 8px 0;
}
.titleText{
  font-family: "儒雅软黑";
  font-weight: 800;
  font-size: 15px;
  margin-left: 25px;
  padding-top: 15px;
}
.el-collapse{
  width: 90%;
  height: 80%;
}

.collapse-title {
         flex: 1 0 90%;
         order: 10;
}
::v-deep .el-collapse-item__header {
        flex: 1 0 auto;
        order: -1;
        border-bottom: #ffffff;
        height:35px;
        font-size:15px;
}
::v-deep .el-collapse {
  border-top: rgb(255, 255, 255);
  border-bottom: rgb(255, 255, 255);
}
::v-deep .el-collapse-item__wrap{
  border-bottom: rgb(255, 255, 255);
  padding-left: 20px;
}
::v-deep .el-collapse-item__content{
  padding-bottom: 0px;
  line-height: 1;
}
::v-deep .el-progress-bar__inner{
  border-radius: 0;
}
::v-deep .el-progress-bar__outer{
  border-radius: 0;
  background-color: 'rgb(235,236,241)'
}
::v-deep .el-progress__text{
  margin-left: 20px;
}
.el-progress{
  width:75%;
  padding-left: 8px;
  padding-bottom: 2px;
}
</style>