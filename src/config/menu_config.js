module.exports = [{
    name: '投资收益评估',
    id: 'basic',
    icon:'el-icon-location',
   
    sub: [{
      name: '无线网',
      componentName: 'index',
      isKeepAlive:false,
    }, {
      name: '宏站',
      componentName: 'home',
      isKeepAlive:false,
    }, {
      name: '室分',
      componentName: 'demo',
      isKeepAlive:false,
    }]
  }, {
    name: '政企',
    id: 'form',
    icon:'el-icon-menu',
    sub: [{
      name: '专线',
      componentName: 'index1',
      isKeepAlive:false,
    }, {
      name: '校园',
      componentName: 'school',
      isKeepAlive:false,
    },{
      name: 'DICI',
      componentName: 'demo',
      isKeepAlive:false,
    }, {
      name: '接入网',
      componentName: 'empty',
      isKeepAlive:false,
    }]
  }]