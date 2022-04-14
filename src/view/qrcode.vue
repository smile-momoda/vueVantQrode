<template>
  <div class="page-scan">
    <!--返回-->
    <van-nav-bar title="扫描二维码/条形码" fixed
      @click-left="clickIndexLeft()"
      class="scan-index-bar">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#fff"/>
        <span style="color: #fff"> 取消 </span>
      </template>
    </van-nav-bar>
    <!-- 扫码区域 -->
    <video ref="video" id="video" class="scan-video" autoplay></video>
    <!-- 提示语 -->
    <div v-show="tipShow" class="scan-tip"> {{tipMsg}} </div>
  </div>
</template>
 
<script>
import { BrowserMultiFormatReader } from '@zxing/library';
import { Dialog, Notify } from 'vant';
 
  export default {
    name: 'scanCodePage',
    data() {
      return {
        loadingShow: false,
        codeReader: null,
        scanText: '',
        vin: null,
        tipMsg: '正在尝试识别....',
        tipShow: false
      }
    },
    created() {
      this.codeReader = new BrowserMultiFormatReader();
      this.openScan();
    },
    destroyed(){
      this.codeReader.reset();
    },
    watch: {
      '$route'(to, from) {
        if(to.path == '/scanCodePage'){
          this.codeReader = new BrowserMultiFormatReader();
          this.openScanTwo();
        }
      }
    },
    methods: {
      async openScan() {
        this.codeReader.getVideoInputDevices().then((videoInputDevices) => {
          this.tipShow = true;
          this.tipMsg = '正在调用摄像头...';
          console.log('videoInputDevices', videoInputDevices);
          // 默认获取第一个摄像头设备id
          let firstDeviceId = videoInputDevices[0].deviceId;
          // 获取第一个摄像头设备的名称
          const videoInputDeviceslablestr = JSON.stringify(videoInputDevices[0].label);
          if (videoInputDevices.length > 1) {
            // 判断是否后置摄像头
            if (videoInputDeviceslablestr.indexOf('back') > -1) {
              firstDeviceId = videoInputDevices[0].deviceId;
            } else {
              firstDeviceId = videoInputDevices[1].deviceId;
            }
          }
          this.decodeFromInputVideoFunc(firstDeviceId);
        }).catch(err => {
          this.tipShow = false;
          console.error(err);
        });
      },
      async openScanTwo() {
        this.codeReader = await new BrowserMultiFormatReader();
        this.codeReader.getVideoInputDevices().then((videoInputDevices) => {
          this.tipShow = true;
          this.tipMsg = '正在调用摄像头...';
          console.log('videoInputDevices', videoInputDevices);
          // 默认获取第一个摄像头设备id
          let firstDeviceId = videoInputDevices[0].deviceId;
          // 获取第一个摄像头设备的名称
          const videoInputDeviceslablestr = JSON.stringify(videoInputDevices[0].label);
          if (videoInputDevices.length > 1) {
            // 判断是否后置摄像头
            if (videoInputDeviceslablestr.indexOf('back') > -1) {
              firstDeviceId = videoInputDevices[0].deviceId;
            } else {
              firstDeviceId = videoInputDevices[1].deviceId;
            }
          }
          this.decodeFromInputVideoFunc(firstDeviceId);
        }).catch(err => {
          this.tipShow = false;
          console.error(err);
        });
      },
      decodeFromInputVideoFunc(firstDeviceId) {
        this.codeReader.reset(); // 重置
        this.scanText = '';
        this.codeReader.decodeFromInputVideoDeviceContinuously(firstDeviceId, 'video', (result, err) => {
          this.tipMsg = '正在尝试识别...';
          this.scanText = '';
          if (result) {
            console.log('扫描结果', result);
            this.scanText = result.text;
			localStorage.setItem('codeText',result.text)
			this.clickIndexLeft()
			return
            if (this.scanText) {
              this.tipShow = false;
              // 这部分接下去的代码根据需要，读者自行编写了
			  // this.$emit("ok", result.text)
              // this.$store.commit('app/SET_SCANTEXT', result.text);
              // console.log('已扫描的小票列表', this.$store.getters.scanTextArr);
            }
          }
          if (err && !(err)) {
            this.tipMsg = '识别失败';
            setTimeout(() => {
              this.tipShow = false;
            }, 2000)
            console.error(err);
          }
        });
      },
      clickIndexLeft(){  // 返回上一页
        this.codeReader = null;
        this.$router.back();
		this.$destroy();//这个报错我自行去掉了
      }
    }
  }
</script>
 
<style lang="less">
.scan-index-bar{
  background-image: linear-gradient( -45deg, #42a5ff ,#59cfff);
}
.van-nav-bar__title{
  color: #fff !important;
}
.scan-video{
  height: 80vh;
}
.scan-tip{
  width: 100vw;
  text-align: center;
  margin-bottom: 10vh;
  color: white;
  font-size: 5vw;
}
.page-scan{
  overflow-y: hidden;
  background-color: #363636;
}
</style>