<template>
  <v-chart :options="option" :autoresize="true" />
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'

// const { PI, cos, sin } = Math;

export default {
  components: {
    'v-chart': ECharts
  },
  props: {
    percentage:{
      type:Number,
    }
  },
  data () {
    return {
      option:{}
    }
  },
  methods: {
    init(){
  this.option = {
  title: {
      text: this.percentage+'%',
      textStyle: {
      color: 'rgb(241,68,39)',
      fontSize: 20,
      fontFamily:'儒雅软黑',
      fontWeight:500
    },
    left: 'center',
    top: '41%'
  },
  angleAxis: {
    max: 100, // 满分
    clockwise: true, // 逆时针
    // 隐藏刻度线
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  radiusAxis: {
    type: 'category',
    // 隐藏刻度线
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  polar: {
    center: ['50%', '50%'],
    radius: '150%' //图形大小
  },
  series: [{ // 灰色环
    type: 'bar',
    data: [{
      value: 100,
      itemStyle: {
        color: '#e2e2e2',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowBlur: 5,
        shadowOffsetY: 2
      }
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 15,
    barGap: '-100%', // 两环重叠
    z: 1
  },{
    type: 'bar',
    // startAngle: 270,
    data: [{
      value: this.percentage,
      itemStyle: {
        normal: {
          color: {
            // x: 0.5 - 0.5 * cos(PI*this.percentage/50/2) * sin(PI*this.percentage/50/2),
            // y: 0.5 + 0.5 * cos(PI*this.percentage/50/2) * cos(PI*this.percentage/50/2),           //  注意此处注释掉了，若没有注释将是另一种效果
            // x2: 0.5-0.5*sin(PI*this.percentage/50),
            // y2: 0.5+0.5*cos(PI*this.percentage/50),
            colorStops: [
              // !! 在此添加想要的渐变过程色 !!
              { offset: 0, color: 'rgb(241,61,31)' },
              { offset: 1, color: 'rgb(254,166,151)' }
            ]
          },
        }
      },
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 15,
    barGap: '-100%', // 两环重叠
    z: 2,
  },]
  }
}
    
  },
  mounted () {
    this.init();
  },
  watch: {
  percentage: {
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
    width: 110px;
    height: 110px;
}
</style>