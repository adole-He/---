// 引入mockjs
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('/api/charts', () => {
  return Mock.mock({
    "statisNum|6":[{
        'value':'@natural(1,12)',
        'name|+1':[
          'laaS',
          'paaS',
          '服务',
          'IT场景',
          '客户监控',
          '营业效能',
        ]
      }],
      "levelNum|4":[{
        'value':'@natural(1,12)',
        'name|+1':[
          '严重告警',
          '重要告警',
          '一般告警',
          '预警'
        ]
      }],
      
      "LineNum|7":['@natural(1,12)'],
      //表格一
      
      "totalNumber":"@natural(1,100)",
      "serveNumber":function(){
        let c = this.totalNumber-0+1;  
        return Math.floor(Math.random() * c + 0);
      },
  
  })
})