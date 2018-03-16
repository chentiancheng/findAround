<template>
		<div class="s-center">
			<div class="s-c-left">
				<ul>
					<li v-for="(val,index) in data" v-bind:class="{active:val.bool}" @click="btn(index)"><a href="#">{{val.tit}}</a>
					</li>
				</ul>
			</div>
			<div class="s-c-right">
				<ul>
					<li v-for="(val,index) in info"><router-link :to="{path:'/meishi',query:{name:val.name}}">
						<b><img :src="val.img"/></b><p>{{val.name}}</p><span>{{val.datatype}}</span></router-link>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return {
				data:"",
				info:""
			}
		},
		created(){
			var that=this;
			axios.get("../../../static/js/list.json").then(function(res){

				that.data=res.data.type;
				that.info=res.data.type[0].datainfo

				
			},function(err){
				console.log(err)
			})
		}
		,
		methods:{
			btn(index){
				this.info=this.data[index].datainfo;
				for(var i=0;i<this.data.length;i++){
					if(index==i){
						this.data[i].bool=true;
					}else{
						this.data[i].bool=false;
					}
				}

			}
		}
	}
</script>

<style>
</style>