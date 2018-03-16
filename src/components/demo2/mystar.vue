<template>
	<div class="starcom">
		<!--星星组件-->
		<span  v-for="val in allStars" :class="val" class="itemstar"></span>
	</div>
</template>

<script>
	export  default{
		props:["score"],
		
		computed:{
			
			allStars(){
				let arrstar=[];
				let num=Math.floor(this.score);

				let hasDecimal=false;
				if(Math.round(this.score)<=num){
					hasDecimal=false;
				}else{
					hasDecimal=true;
				}
				for(var i=0;i<num;i++){
					arrstar.push("items");
				}
				if(hasDecimal){
					arrstar.push("itemhalf");
				}
				while(arrstar.length<5){
					arrstar.push("itemhui");
				}

				return arrstar

			}
			
		}
	}
</script>

<style>
	.itemstar{
		width: 20px;
		height: 20px;
		display: inline-block;
		
	}
	.items{
		background: url(star24_on@2x.png);
	}
	.itemhalf{
		background: url(star24_half@2x.png);
	}
	.itemhui{
		background: url(star24_off@2x.png);
	}
</style>