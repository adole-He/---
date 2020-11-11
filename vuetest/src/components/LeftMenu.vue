<template>
  <el-row class="el-aside">
      <el-col :span="24">
          <el-menu style="height:100%" router>
            <el-menu-item v-for="item in menu" :index="item.componentName" v-text="item.name" :key="item.componentName">
                <span v-text="item.name"></span>
                </el-menu-item>
          </el-menu>
      </el-col>
  </el-row>
</template>


<script>
import menu from '@/config/menu-config'
    export default{
        data(){
            return{
                menu:menu
            }
        }
    }
</script>


<style scoped>

</style>