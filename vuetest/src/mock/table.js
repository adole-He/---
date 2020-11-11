// 引入mockjs
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('/api/table', () => {
  return Mock.mock({
      //表格
      "Numl":"@natural(1,50)",
      "laaSTable|5":[{
        "type|+1":[
          '物理服务器','虚拟机','交换机','存储','光纤交换机'
        ],
        "distribution" :"@natural(0,100)",
        "child":"@natural(0,@/Numl)",
      }],
  
      "Num":"@natural(50,300)",
      "PaaSTable|5":[{
        "type|+1":[
          '分布式数据库','分布式缓存','分布式消息','容器','其他',
        ],
        "distribution" :"@natural(0,100)",
        "child":"@natural(0,@/Num)",
      }],

      "tableData|2":[{
        "classTable|+1":['tableLaas','tablePaas'],
        "title|+1":['laaS层监控情况','PaaS层监控情况'],
        "firstTitle|+1":['告警设备数/设备总数','告警实例数/实例总数'],
        "secondTitle|+1":['设备告警率','实例告警率'],
        "Num|+1":['@/Numl','@/Num'],
        "alarmTable|+1":['@/laaSTable','@/PaaSTable']
      }]
  })
})