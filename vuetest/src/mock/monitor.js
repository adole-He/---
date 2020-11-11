// 引入mockjs
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('/api/monitor', () => {
  return Mock.mock({
      //监控表格1
      "alarmTotal":"@natural(1,100)",
      "alarmServe" : "@natural(1,@/alarmTotal)",
      "alarmData|5" : [{
        "maxAlarm": "@cword(2,6)",
        "score":"@natural(0,@/alarmTotal)/@/alarmTotal",
      }],
  
      //监控表格2
      "scenceTotal":"@natural(1,100)",
      "alarmScence" : "@natural(1,@/scenceTotal)",
      "scenceData|5" : [{
        "maxAlarm": "@cword(2,6)",
        "score":"@natural(1,@/scenceTotal)",
      }],
  
      //监控表格3
      "moniTotal":"@natural(1,100)",
      "alarmMoni" : "@natural(1,@/moniTotal)",
      "moniData|5" : [{
        "maxAlarm": "@cword(2,6)",
        "score":"@natural(0,@/moniTotal)",
      }],
  
      //监控表格4
      "busiTotal":"@natural(1,100)",
      "alarmBusi" : "@natural(1,@/busiTotal)",
      "busiData|5" : [{
        "maxAlarm": "@cword(2,6)",
        "score":"@natural(0,@/busiTotal)",
      }],

      
    "monitorTable|4":[{
      "proBox|+1":['proBoxleft','proBoxright','proBoxleft','proBoxright'],
      "title|+1":['服务监控情况','IT场景监控情况','客感监控情况','营业效能监控情况'],
      "alarmTotal|+1":['服务总数：','场景总数：','指标总数：','监控环节数：'],
      "alarmItem|+1":['告警服务数：','异常场景数：','告警指标数：','告警环节数：'],
      "firstTitle|+1":['服务告警最多的系统TOP5','告警最多的场景TOP5','告警最多的指标TOP5','告警最多的环节TOP5'],
      "secondTitle|+1":['告警服务数/服务总数','告警数量','告警数量','告警数量'],
      "totalNumber|+1":["@/alarmTotal","@/scenceTotal","@/moniTotal","@/busiTotal"],
      "serveNumber|+1": ["@/alarmServe","@/alarmScence","@/alarmMoni","@/alarmBusi"],
      "serveData|+1":['@/alarmData','@/scenceData','@/moniData','@/busiData'],
    }],
  })
}) 