<template>
  <div id="app" class="container">
    <header1 v-show="bool"></header1>
    <section1></section1>
    <footer1 v-show="bool"></footer1>
  </div>
</template>

<script>
	import header1 from "@/components/demo1/header"
	import section1 from "@/components/demo1/section"
	import footer1 from "@/components/demo1/footer"

	
export default {
	components:{
		"header1":header1,
		"section1":section1,
		"footer1":footer1,
	},
	data(){
		return {
			bool:true
		}
	},
	watch:{
		$route(val){
				if(val.path.split("/")[1]=="meishi"||val.path.split("/")[1]=="xiangqing"){
					this.bool=false
				}else{
					this.bool=true
				}
			}
	}

}
</script>

<style>

</style>
