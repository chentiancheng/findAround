<template>
	<div class="container">
		<div class="header2">
			<div class="h2_t">
			<img :src="dataInfo.photos[0].url" alt="" />
			<span><router-link :to="{path:'/meishi',query:{name:data}}"><img src="../../../static/img/返回 (2).png"/></router-link></span>
			<ul>
				<li><img src="../../../static/img/星星.png"/></li>
				<li><img src="../../../static/img/分享.png"/></li>
			</ul>
			<div class="h2_photo">
				<img src="../../../static/img/相机.png"/>
				上传照片
			</div>
			<!--<div class="h2_lu">
				<img src="../../../static/img/路线11.png"/>
				路线
			</div>-->
			</div>
			<ul class="h2_b">
					<li>{{dataInfo.name}}</li>
					<li><mystar :score="dataInfo.biz_ext.rating"></mystar><span class="span" v-if="dataInfo.biz_ext.cost==''?false:true">人均{{dataInfo.biz_ext.cost | tolt}}</span><span class="span"><img src="../../../static/img/反馈.png"/>反馈</span></li>
			</ul>
		</div>
		<div class="section2">
			<div class="s2_top">
				<ul>
					<li><img src="../../../static/img/定位.png"/></li>
					<li>距您417米<span>|</span>{{dataInfo.cityname}}{{dataInfo.adname}}{{dataInfo.address}}</li>
					<li><img src="../../../static/img/电话.png"/></li>
				</ul>
				<ol v-show="dataInfo.biz_ext.open_time?true:false">
					<li><img src="../../../static/img/时间.png"/></li>
					<li>营业时间：<span>{{dataInfo.biz_ext.open_time}}</span></li>
				</ol>
			</div>
			<div class="s2_section">
				<ul class="s2_s_ul">
					<li>网友推荐菜</li>
					<li>查看11道推荐菜<img src="../../../static/img/箭头.png" alt="" /></li>
				</ul>
				<ul class="s2_s_img">
					<li v-for="val in dataInfo.deep_info.photos"><img :src="val.url"/></li>
				</ul>
				<p v-if="dataInfo.tag==''?false:true">{{dataInfo.tag}}</p>
			</div>
			<div class="s2_section">
				<ul class="s2_s_ul">
					<li>网友推荐菜</li>
					<li>查看11道推荐菜<img src="../../../static/img/箭头.png" alt="" /></li>
				</ul>
				<ul class="s2_s_img">
					<li v-for="val in dataInfo.deep_info.photos"><img :src="val.url"/></li>
				</ul>
				<p v-if="dataInfo.tag==''?false:true">{{dataInfo.tag}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios"
import mystar from "../demo2/mystar"
	export default{
		data(){
			return {
			id:"",
			name:'',
			data:"",
			dataInfo:""
			}
		},
		filters: {
			tolt(val) {
				return "¥" + val
			}
		},
		created(){
			this.id=this.$route.query.id;
			this.name=this.$route.query.name
			this.data=this.$route.query.title
			console.log(this.id)
			var that = this;
			let url = "http://restapi.amap.com/v3/place/detail?key=8526b5b1d2f18e156032a28b3836a496&id="+this.id;
			axios.get(url).then(function(res) {
				that.dataInfo=res.data.pois[0]
				console.log(that.dataInfo.biz_ext.open_time)
			}, function(err) {
				console.log(err)
			})
		
	},
	components:{
		mystar
	}
	}
</script>

<style>
</style>