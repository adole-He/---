<template>
  <div class="topic1">
    <div id="app" class="now-time">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item>监控资源</el-breadcrumb-item>
        <el-breadcrumb-item><b>4G新装详情</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
      <div class="tittle">
      <el-tabs>
        <el-tab-pane label="指示看板" name="first"></el-tab-pane>
        <el-tab-pane label="告警信息" name="second"></el-tab-pane>
        <el-tab-pane label="监控列表" name="third"></el-tab-pane>
        <el-tab-pane label="告警接收规则" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
      <div class="left">
        <el-button type="primary" class="el-button1">新增监控</el-button>
        <i class="el-icon-s-tools"></i>
      </div>
      <div class="buttonRow">
        <div class="text">当前网元监控指标5个</div>
      <div class="right">
        <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>

    </div>

      <el-table
        :data="tableData"
        row-key="id"
        :span-method="objectSpanMethod"
        border
        :row-style="{height:'4px'}"
        :cell-style="{padding:'0px 0'}"
        lazy
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="date"
        label="监控指标">
      </el-table-column>
      <el-table-column
        prop="method"
        label="监控方法">
      </el-table-column>
      <el-table-column
        prop="time"
        label="监控时段">
      </el-table-column>
      <el-table-column
        prop="person"
        label="修改人"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="daytime"
        label="修改时间"
        align="center">
      </el-table-column>
      <el-table-column
        prop="do"
        label="操作"
        align="center">
        <el-button type="text">修改</el-button>
        <el-button type="text">删除</el-button>
        <el-button type="text">查看告警接收人</el-button>
      </el-table-column>
      </el-table>
  </div>
</template>



<script>
export default{
  name:'topic1',
  data() {
      return {
        tableData: [{
          id: 1,
          date: '内存使用率',
          method: <i class="el-icon-warning">周期不确定性预测</i>,
          time: '全天',
          person: '张三',
          daytime: '2019-06-20 09:00:00'
        },
        {
          id: 2,
          date: '文件系统使用率',
          method: <i class="el-icon-warning">周期不确定性预测</i>,
          time: '全天',
          person: '张三',
          daytime: '2019-06-20 09:00:00',
          children: [{
              id: 21,
              date: '/opt root',
              method: <i class="el-icon-warning">周期不确定性预测</i>,
              time: '全天',
              person: '张三',
              daytime: '2019-06-20 09:00:00',
            }, {
              id: 22,
              date: '/tmp root',
              method: <i class="el-icon-warning">周期不确定性预测</i>,
              time: '全天',
              person: '张三',
              daytime: '2019-06-20 09:00:00',
          }],
        },
        {
          id:3,
          date: '内存使用率',
          method: <i class="el-icon-warning">周期不确定性预测</i>,
          time: '全天',
          person: '张三',
          daytime: '2019-06-20 09:00:00'
        },
        {
          id:4,
          date: '内存使用率',
          method: <i class="el-icon-warning">周期不确定性预测</i>,
          time: '节假日',
          person: '张三',
          daytime: '2019-06-20 09:00:00'
        },
        ],
        spanArr:[],
        spanPos:0,
      };
  },
  mounted() {
      this.getSpanArr();
    },
  methods:{
      getSpanArrInit(){
        this.spanArr=[];
        this.spanPos=0;
      },
      getSpanArr(){
        this.getSpanArrInit();
        for (var i = 0; i < this.tableData.length; i+=1) {
                if (i === 0) {
                    this.spanArr.push(1);
                    this.spanPos = 0;
                } else {
                    // 判断这一条和上一条id是否相同
                    if (this.tableData[i].id === this.tableData[i - 1].id) {
                        this.spanArr[this.spanPos] += 1;
                        this.spanArr.push(0);
                    } else {
                        this.spanArr.push(1);
                        this.spanPos = i;
                    }
                }
            }

        },

      objectSpanMethod({rowIndex, columnIndex }) {
            if(columnIndex===0){
              if (rowIndex===4) {
            return {
              rowspan: 2,
              colspan: 1
            }
            }
            if (rowIndex===5) {
              return{
              rowspan: 0,
              colspan: 0
            }
            }
        }
  }
}
}
</script>




<style lang="scss" scoped>
.topic1{
  background-color: white;
}
.now-time{
 width: 100%;
 height: 40px;
 background: rgba(207, 218, 226, 0.705);
 display: flex;
}
.bread{
  margin: 15px;
  font-size: 80%;
}
.buttonRow{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.left{
  float: left;
}
.text{
  font-size: 80%;
  font-weight: 600;
}
.el-button1{
  padding: 10px;
  size: medium;
  margin-right: 15px;
  margin-left: 20px;
}
.el-icon-s-tools:before {
    content: "\e7ac";
    color: rgb(158, 157, 157);
}
.button{
  border: none;
  background-color: white;
  color: rgb(26, 147, 247);
}
.el-table{
  margin: 0 auto;
  width: 98%;
  margin-bottom: 20px;
  margin-top:10px;
}
.el-table.th{
    height: 30px;
}
.el-table.td{
    height: 30px;
}
.el-table__body, .el-table__footer, .el-table__header {
    table-layout: fixed;
    border-collapse: separate;
    font-weight: 900;
    font-family: -webkit-body;
}
::v-deep #tab-first{
  margin-left: 30px;
}
::v-deep .el-tabs__active-bar,.is-top{
  margin-left: 30px;
}
</style>