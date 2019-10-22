<template>
<div class='height'>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			 <span class='cardHead'><i class='el-icon-s-management'></i>河南省无线网投入产出比</span>
			<el-button type="primary" style="float: right;margin-top: -6px;" size="small" icon="el-icon-edit"  @click="dialogFormVisible = true">调配预测</el-button>
		</div>
		<div id='bar' class='height'></div>
	</el-card>
 <div class='rightBottom marT'>
	 <el-row :gutter="20">
      <el-col :span="12">
		  <el-card class="height">
				<div slot="header" class="clearfix">
					<span class='cardHead cardTitle'><i class='el-icon-s-management'></i>投入</span>
					 <el-select v-model="value1" class='elSelect' collapse-tags size='small' number=2 multiple placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div id='pie' class='height'></div>
			</el-card>
	  	</el-col>
      <el-col :span="12">
		  <el-card class="height">
				<div slot="header" class="clearfix">
					<span class='cardHead'><i class='el-icon-s-management'></i>产出</span>
				</div>
				<div id='pie1' class='height'></div>
			</el-card>
		</el-col>
    </el-row>
 </div>
<!-- 弹出框 -->
 <el-dialog title="名称" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Right',
  data() {
    return {
      page: this.$route.path,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
		dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
  created() {},
  mounted(){
 this.drawPie()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
	open() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
	  },
	  drawPie(){
		  var option={
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: "vertical",
				x: "left",
				data: ["直接访问", "邮件营销", "联盟广告"]
			},
			calculable: !0,
			series: [{
				name: "访问来源",
				type: "pie",
				radius: "55%",
				center: ["50%", "50%"],
				data: [{
					value: 335,
					name: "直接访问"
				}, {
					value: 310,
					name: "邮件营销"
				}, {
					value: 234,
					name: "联盟广告"
				}]
			}]
		};
		var chart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
	  }
  }
}
</script>

<style lang="less" scoped>
.box-card{
	width: 100%;
	height:48%
}
.rightBottom{
	width:100%;
	height:48%
}
.elSelect{
	float:right;
	vertical-align: middle;
	width:45%;
	 margin-top: -6px;
}
</style>