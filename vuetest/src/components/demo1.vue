<template>
<div>
  <div id="app" class="now-time">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div>
      <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="指示看板" name="first"></el-tab-pane>
        <el-tab-pane label="告警信息" name="second"></el-tab-pane>
        <el-tab-pane label="监控列表" name="third"></el-tab-pane>
        <el-tab-pane label="告警接收规则" name="fourth"></el-tab-pane>
      </el-tabs>
  </div>
  <div>
    <div class="left">
      <el-button type="primary">新增监控</el-button>
      <i class="el-icon-s-tools"></i>
    </div>
    <div class="right">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
  </div>
  
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
  
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
</script>

<style scoped>
.now-time{
 width: 100%;
 height: 40px;
 background: rgba(142, 195, 231, 0.705);
 display: flex;
}
.bread{
  margin: 15px;
}
.left{
  display: inline;
}
.right{
  float: right;
}
.el-button{
  width: 80px;
  height: 30px;
  background-color: skyblue;
  color:snow;
  border: none;
  position: relative;
}
</style>