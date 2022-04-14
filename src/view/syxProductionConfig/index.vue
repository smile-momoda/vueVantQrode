<template>
	<div>
		<van-nav-bar title="丝印生产配置" left-text="首页"   @click-left="onClickLeft"
			@click-right="onClickRight" />
		<van-form @submit="onSubmit">
			<div class="titlePer"><strong>设备信息</strong></div>
			<van-cell-group inset>
				<van-field v-model="username" name="线体编号" label="线体编号" placeholder="线体编号"
					:rules="[{ required: true, message: '请填写' }]" />
			</van-cell-group>
			<van-cell-group inset>
				<van-field v-model="username" name="线体名称" label="线体名称" placeholder="线体名称"
					:rules="[{ required: true, message: '请填写' }]" />
			</van-cell-group>
			<div class="titlePer">
				<strong>设备信息</strong>
				<span class="detail" @click="onClickCart">详细信息>></span>
			</div>
			<div class="box">
				<div class="pcInfo">
					<div><span>工单号</span>2222</div>
					<div><span>基体批次</span>2222</div>
					<div><span>浆料批次</span>2222222</div>
					<div><span>引线批次</span>22222222222</div>
					<div><span>网版编号</span>222222</div>
					<div><span>电浆批次</span>222222</div>
					<div><span>物料编号</span>2222</div>
					<div><span>已完成数量</span>22222</div>
					<div><span>状   态</span>2222222</div>
				</div>
			</div>
			<div class="buttonBOX">
				<van-button round block type="primary" native-type="submit">
					开始生产
				</van-button>
			</div>
		</van-form>
		<van-cell-group>
			<van-cell icon="add-o" title="新增批次" is-link @click="onClickCart" />
			<van-cell icon="add-o" title="添加物料" is-link />
			<van-cell icon="failure" title="结束生产" is-link />
			<van-cell icon="passed" title="批次确认" is-link />
			<van-cell icon="passed" title="品质确认" is-link />
			<van-cell icon="passed" title="批次记录" is-link />
		</van-cell-group>
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
		methods: {
			onClickCart() {
				this.$router.push({name:'detail',query:{id:123}});
				
			},
			onClickLeft() {
				//后退
				this.$router.go(-1);
			},
			onClickRight() {
				Toast('暂无后续逻辑~');
			},
		},
	};
</script>

<style lang="less">
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
