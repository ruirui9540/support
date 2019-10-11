<template>
<div class='right flex'>
				<div class='rightbottom '>
					<div class='commontitle'>xxxxxx</div>
					<div class='rightcon'>
							<div class='flexbox'>
								<div class='flex rightdiv flexbox mar'>
									<div class='bottomimg flexbox'>
										<div>
											<img src="image/phone.png" alt="">
											<div>Top终端</div>
										</div>
									</div>
									<div class='con flex'>
										<div><i></i>小米</div>
										<div><i></i>华为</div>
										<div><i></i>苹果</div>
									</div>
								</div>
							<div class='flex rightdiv flexbox mar'>
								<div class='bottomimg flexbox'>
									<div>
										<img src="image/bottomdiv1.png" alt="">
									<div>Top套餐</div>
									</div>
								</div>
								<div class='con flex'>
										<div><i></i>19元</div>
										<div><i></i>29元</div>
										<div><i></i>39元</div>
									</div>
							</div>
						</div>
						<div class='flexbox '>
							<div class='flex rightdiv flexbox mar'>
								<div class='bottomimg flexbox'>
									<div>
										<img src="image/yewu.png" alt="">
									<div>Top业务</div>
									</div>
								</div>
								<div class='con flex'>
									<div><i></i>业务1</div>
									<div><i></i>业务2</div>
									<div><i></i>业务xx</div>
								</div>
							</div>
							<div class='flex rightdiv flexbox mar'>
								
								<div class='bottomimg flexbox'>
									<div>
										<img src="image/flow.png" alt="">
									<div>单用户日均流量</div>
									</div>
								</div>
								<div class='con flex'>
									<div><i></i>日均流量1</div>
									<div><i></i>日均流量2</div>
									<div><i></i>日均流量3</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div class='rightTop '>
					<div class='commontitle'>网络体验口碑</div>
					<div id='bar'></div>
				</div>
			</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Right',
  data() {
    return {
      page: this.$route.path,
      showNav:false
    }
  },
  created() {},
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
  }
}
</script>

<style lang="less" scoped>
.right{
	margin-left:20px;
}
.rightTop,.rightbottom{
	width: 100%;
	height:54%;
    background:url('../assets/image/rightbg.png') top left no-repeat;
	background-size: 100%;
	position: relative;
}
.rightbottom{
	margin-bottom: 23px;
	height: 40%
}
.rightcon{
	width: 100%;
	height:82%;
	box-sizing: border-box;
	padding:5px  30px  10px
}
.rightcon>div{
	width: 100%;
	height: 45%;
	margin-bottom: 20px
}
.rightdiv {
	text-align: center;
	color: #fff;
    position: relative;
    border-radius: 10px
}
.rightcon>div:nth-child(1)>div:nth-child(1){
	background-image: linear-gradient(0deg, 
		#56d9ff 0%, 
		#8cb2ff 100%);
}
.rightcon>div:nth-child(1)>div:nth-child(2){
	background-image: linear-gradient(0deg, 
		#ff7eb5 0%, 
		#c017ff 100%);
	border-radius: 10px;
}
.rightcon>div:nth-child(2)>div:nth-child(1){
	background-image: linear-gradient(0deg, 
		#fbbb6e 0%, 
		#f6ce9e 100%);
}
.rightcon>div:nth-child(2)>div:nth-child(2){
	background-image: linear-gradient(0deg, 
		#36bbb5 0%, 
		#69e4de 100%);
}
.rightdiv img{
	width: 30px
}
.rightdiv>.bottomimg{
	width: 100px;
	height: 100%;
	justify-content: center;
    align-items: center;
}
.con{
	padding:5px 10px 5px 20px;
	text-align: left;
	line-height: 30px
}
.con>div{
	position: relative;
	/* margin-bottom: 10px */
	font-family: SourceHanSansC;
	font-size: 12px
}
.con>div>i{
	width:6px;
	height:6px;
	background-color: #fff;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
	margin-right: 5px
}

</style>