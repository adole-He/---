// 引入mockjs
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('/api/data', () => {
  return Mock.mock({
    "tableData|1-10":[{
      'name':'@guid(3)',
      'num':'@natural(1,10)'
    }],
    "data":[{
      'untreatFlaut':'@natural(1,10)',
      'Flaut':'@natural(10,20)',
      'flautTime':'@natural(1,60)'
    }],
    "arrayM|1":[ 100,82,66,49,33,16,],
    "arrayF|1":[ 100,82,66,49,33,16,],
    "arrayC|1":[ 100,82,66,49,33,16,],
    "arrayMY|1":[ 100,82,66,49,33,16,],
    "arrayDBP|1":[ 100,82,66,49,33,16,],
    "arrayGete|1":[ 100,82,66,49,33,16,],
    "arrayUse|1":[ 100,82,66,49,33,16,],
    "arrayPlace|1":[ 100,82,66,49,33,16,],
    "arrayServe|1":[ 100,82,66,49,33,16,],
    "linenum|15":['@natural(1,10)'],
    "barnum|4":['@natural(1,12)'],
    "pievalue|3":[{
      'value':'@natural(1,12)',
      'name|+1':[
        'laaS',
        'SaaS',
        'Paas'
      ]
    }],

    "sData":[{
      'firstNum':'@natural(1,5)',
      'secondNum':'@natural(5,9)'
    }],
  })
})
