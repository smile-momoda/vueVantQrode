<template>
	<div>
		<img class="imgHead" src="../assets/img/Snipaste_2022-03-30_16-28-25.png" />
		<van-cell-group class="user-group">
			<van-cell icon="records" title="丝印生产操作" is-link='' to="syxProductionConfig"/>
		</van-cell-group>
		<van-cell-group class="user-group">
			<van-cell icon="records" title="真空生产操作" is-link to="user"/>
		</van-cell-group>
		<van-cell-group class="user-group">
			<van-cell icon="records" title="全检生产操作"  is-link to=""/>
		</van-cell-group>
		<van-cell-group class="user-group">
			<van-cell icon="points" title="真空备料"  color="#56bd4e" is-link  to=""/>
		</van-cell-group>
		<van-cell-group class="user-group">
			<van-cell icon="coupon-o" title="信息查看" is-link  to=""/>
		</van-cell-group>
		<!-- <div id="">
			<span class="scan"  @click="clickCode">扫码</span>
			<scan :scancode='scancode' v-if="scancode" @ok="getResult" />
		</div> -->
		<div @click="scanCode">点击扫码</div>
		<div>扫码结果：{{codeText}}</div>
		<!-- <qrcord v-if='isShow' /> -->
	</div>
</template>
<script>
	import qrcord from './qrcode.vue'
	import scan from './scan.vue'
	import {
		Row,
		Col,
		Icon,
		Cell,
		CellGroup
	} from 'vant';

	export default {
		components: {
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,qrcord,scan
		},
		data() {
			return {
				codeText:'无',
				isShow:false,
				scancode: false, //控制是否使用扫一扫功能
				result: '', //扫码结果信息
			}
		},
		mounted() {
			this.codeText=localStorage.getItem("codeText")
		},
		methods: {
			// 打开相机
			clickCode() {
				this.isShow=false;
				this.scancode = true;
			},
			//返回扫描结果并关闭摄像头
			getResult(result) {
				console.log(this.result)
				this.result = result;
				if (result !== "") {
					this.isShow=true;
					this.deviceSN = result
					this.scancode = false;
				}
			},
		 scanCode(){
			 // this.isShow=true
			  console.log('浏览器信息', navigator.userAgent);
			   this.$router.push({
			     path: '/qrcode'
			   });
		 },
		 onClickLeft(){
		           			//后退
		                this.$router.go(-1);
		            },
		  sorry() {
		    Toast('暂无后续逻辑~');
		  },
		},
	};
</script>

<style lang="less">
	.imgHead {
		width: 100%;
	}

	.user {
		&-poster {
			width: 100%;
			height: 53vw;
			display: block;
		}

		&-group {
			margin-bottom: 15px;
		}

		&-links {
			padding: 15px 0;
			font-size: 12px;
			text-align: center;
			background-color: #fff;

			.van-icon {
				display: block;
				font-size: 24px;
			}
		}
	}
</style>
