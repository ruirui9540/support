const pieData={
    sumdata: [
        { value: 1, name: '建安投资' ,check:true,secondName:'jianan'},
        { value: 3, name: '设备投资' ,check:true,secondName:'shebei'},
        { value: 2.2, name: '待摊投资',check:true,secondName:'daitan' }],
      jianan: [
        { value: 17, name: '材料费',check:false,secondName:'' },
        { value: 23, name: '施工费' ,check:false,secondName:'' },
      ],
      daitan: [
        { value: 17, name: '建设单位管理费' ,check:false,secondName:'' },
        { value: 23, name: '征地及补偿费',check:false,secondName:''  },
        { value: 27, name: '可行性研究费',check:false,secondName:''  },
        { value: 23, name: '勘察设计费' ,check:false,secondName:'' },
        { value: 27, name: '合同公证及监理费',check:false,secondName:''  },
        { value: 23, name: '资本化借款利息',check:false,secondName:''  },
        { value: 27, name: '中介机构审计费' ,check:false,secondName:'' },
        { value: 23, name: '汇兑损益',check:false,secondName:''  },
        { value: 27, name: '税金' ,check:false,secondName:'' },
        { value: 23, name: '工程损失' ,check:false,secondName:'' },
        { value: 27, name: '系统集成费',check:false,secondName:''  },
        { value: 23, name: '安全生产费' ,check:false,secondName:'' },
        { value: 27, name: '工程招标代理费',check:false,secondName:''  },
        { value: 23, name: '环境影响评价费' ,check:false,secondName:'' },
        { value: 27, name: '其他' ,check:false,secondName:'' },
      ],
      shebei: [
        { value: 27, name: 'LTE主设备1.8G',check:false,secondName:''  },
        { value: 23, name: 'LTE主设备2.1G' ,check:false,secondName:'' },
        { value: 27, name: 'LTE主设备800M' ,check:false,secondName:'' },
        { value: 23, name: '室内分布系统' ,check:false,secondName:'' },
        { value: 27, name: '无线网配套及其他' ,check:false,secondName:'' },
      ],
      network:[{value:22,name:'4G年度资本开支',check:true,secondName:'year' },
      {value:22,name:'本年付现成本',check:true,secondName:'ben'}],
      year:[{value:22,name:'4G基站',check:false,secondName:''},
            {value:22,name:'IPRAN',check:false,secondName:''},
            {value:22,name:'传输',check:false,secondName:''},
            {value:22,name:'CN2',check:false,secondName:''},
            {value:22,name:'4G核心网',check:false,secondName:''},
            {value:22,name:'4G相关平台',check:false,secondName:''},
      ],
      ben:[
            {value:22,name:'铁塔租赁费',check:false,secondName:''},
            {value:22,name:'电费',check:false,secondName:''},
            {value:22,name:'油机发电服务费',check:false,secondName:''},
            {value:22,name:'维护费',check:false,secondName:''},
      ]
}
export default pieData