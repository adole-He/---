<template>
  <v-chart :options="polar" :autoresize="true" />
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'

export default {
  components: {
    'v-chart': ECharts
  },
  props: {
    ObjCharts:{
      type:Object,
    }
  },
  data () {
    return {
      polar:{}
    }
  },
  methods: {
    init(){
      this.polar = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient:'vertucal',
            left:'50%',
            y:'center',
            itemWidth:12,
            itemHeight:12,
            textStyle:{
            width:140,
            rich:{
            a:{
                color:'rgb(197,198,202)',
              },
            b:{
                align:'right',
                color:'rgb(30,30,30)'
              },
            c:{
                align:'right',
                color:'rgb(30,30,30)',
                width:50,
              }
            }
          },
          itemGap:12,
          data: this.ObjCharts.legend.data,
          formatter:(params)=>{
            let arr;
          for(let i=0;i<this.polar.series[0].data.length;i++){
            if(this.polar.series[0].data[i].name == params){
              arr=[
              '{a|'+params+'}'+
              '{b|'+this.polar.series[0].data[i].value+'}'+
              '{c|'+this.polar.series[0].data[i].percent+'}'
              ] 
            }
          }
          return arr;
          }
        },
        series : [
            {
                type: 'pie',
                radius:['20%','60%'],
                center:['25%','50%'],
                data:this.ObjCharts.series[0].seriesData,
                itemStyle: {
            borderWidth: 3,
            borderColor:'#fff',
            emphasis:{
              show:false
            }
                },
          labelLine:{
            normal:{
              show:false
            }
          },
          label:{
            normal:{
              show:false
            }
          },
            }],
          color:this.ObjCharts.color,
       }
    }
  },
  mounted () {
    this.init();
  },
  watch: {
  ObjCharts: {
      handler() {
        this.init();
      },
  deep: true
  }
  },
}
</script>


<style>
.echarts {
    width: 100%;
    height: 100%;
}
</style>