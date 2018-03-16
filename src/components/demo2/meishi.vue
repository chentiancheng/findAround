<template>
	<div class="container">
		<header class="header1">
			<div class="h_t">
				<a href="#/sectionlist"><img src="../../../static/img/返回 (1).png" class="img" /></a>
				<h3 class="p">{{title}}</h3>
				<span class="span">
				<img src="../../../static/img/麦克风.png" class="img"/>
				<img src="../../../static/img/点.png" alt="" />
				<img src="../../../static/img/搜索.png" class="img"/>
				</span>

			</div>
			<div class="h_b">
				<ul>
					<li>5000米</li>
					<li>全部分类</li>
					<li>推荐排序</li>
					<li>更多筛选</li>

				</ul>
			</div>
		</header>
		<section class="section1">
			<router-link class="s_text" v-for="val in data" :to="{path:'/xiangqing',query:{id:val.id,name:val.name,title:title}}" tag="div">
				<ul>
					<li>
						<h2>{{val.name}}<img src="../../../static/img/支付宝.png"/></h2>

					</li>
					<li>
						<mystar :score="val.biz_ext.rating"></mystar><b>673条评论</b><b v-if="val.biz_ext.cost==''?false:true">人均<i >{{val.biz_ext.cost | tolt}}</i></b></li>
					<li><span>{{val.type}}</span></li>
					<li><i>牛肉不错</i><i>周好喝</i><i>炸鸡好吃</i></li>
				</ul>
				<span class="s_img" v-if="val.photos==''?false:true"><img :src="val.photos[0].url"/></span>

			</router-link>

		</section>

	</div>
</template>
<script>
	import axios from "axios"
	import mystar from "../demo2/mystar"
	export default {
		data() {
			return {
				title: "",
				data: ""
			}
		},
		filters: {
			tolt(val) {
				return "¥" + val
			}
		},
		created() {
			this.title = this.$route.query.name;
			var that = this;
			let url = "http://restapi.amap.com/v3/place/text?key=8526b5b1d2f18e156032a28b3836a496&keywords=" + this.title + "&types=&city=北京&children=1&offset=20&page=1&extensions=all";
			axios.get(url).then(function(res) {
				that.data = res.data.pois

			}, function(err) {
				console.log(err)
			})
		},
		components: {
			mystar

		}
	}
</script>

<style>

</style>