<template>
	<div>
		<van-nav-bar title="丝印详细信息" left-text="返回" right-text="修改" @click-left="onClickLeft" @click-right="onClickRight" />
		<div class="box">
			<div class="pcInfo">
				<div><span>线体名称</span>2222</div>
				<div><span>丝印批次</span>2222</div>
				<div><span>基体批次</span>2222222</div>
				<div><span>浆料批次</span>22222222222</div>
				<div><span>引线批次</span>222222</div>
				<div><span>网版编号</span>222222</div>
				<div><span>点浆批次</span>2222</div>
				<div><span>投入时间</span>22222</div>
				<div v-if="isShow">
					<div><span>投入班次</span>2222222</div>
					<div><span>完成时间</span>2222222</div>
					<div><span>完成班次</span>2222222</div>
					<div><span>生产数量</span>2222222</div>
					<div><span>生产数</span>2222222</div>
					<div><span>不良数</span>2222222</div>
					<div><span>损耗数</span>2222222</div>
				</div>
				<div v-if="!isShow">
					<div><span>投入班次</span><select>
							<option>A</option>
							<option>B</option>
						</select></div>
					<div><span>完成时间</span>2222222</div>
					<div><span>完成班次</span>2222222</div>
					<div><span>生产数量</span>2222222</div>
					<div><span>生产数</span>2222222</div>
					<div><span>不良数</span>2222222</div>
					<div><span>损耗数</span>2222222</div>
				</div>
				<div class="buttonBox">
					<!-- <van-button type="success">成功按钮</van-button> -->
					<button class="ok" @click="ok">确认</button>
					<button class="cancle">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ref
	} from 'vue';
	import {
		Row,
		Col,
		Icon,
		Cell,
		CellGroup,
		Toast
	} from 'vant';

	export default {
		components: {
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup
		},
		data() {
			return {
				isShow: true
			}
		},
		setup() {
			const username = ref('');
			const password = ref('');
			const onSubmit = (values) => {
				console.log('submit', values);
				Toast.success('成功');
			};

			return {
				username,
				password,
				onSubmit,
			};
		},
		mounted() {
			console.log(this.$route.query.id, 7777)
		},
		methods: {
			ok() {
				this.isShow = true;
			},
			onClickLeft() {
				//后退
				this.$router.go(-1);
			},
			onClickRight() {
				this.isShow = false;
				// Toast('暂无后续逻辑~');
			},
		},
	};
</script>

<style lang="less">
	.buttonBox {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
	}

	.ok,
	.cancle {
		width: 6rem;
		height: 2rem;
		line-height: 2rem;
		border: 1px solid lightgray;
		margin: 0.9375rem;
	}

	.ok {
		background: #66af55;
		color: white;
	}

	.titlePer {
		height: 2.1875rem;
		line-height: 2.1875rem;
		width: 92%;
		margin: 0 auto;
	}

	.box {
		width: 92%;
		margin: 0 auto;
	}

	.detail {
		color: #1ABC9C;
		float: right;
	}

	.buttonBOX {
		width: 67%;
		margin: 0.625rem auto;
	}

	.pcInfo {
		font-size: 0.875rem;

		div {
			margin: 0.3rem 0;
		}

		span {
			width: 5rem;
			display: inline-block;
		}
	}

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
