<template>
  <div class='galleryHome w-full h-full relative fz-12'>
    <!-- 导航 -->
    <div class="h-48 w-full flex line-48 text-center bb-1px fz-16">
      <div class="w-60">
        <van-icon name="search"
                  class="fz-20" />
      </div>
      <div class="flex-1">导航</div>
      <div class="w-60"
           @click="showRight = true">
        <van-icon name="manager-o"
                  class="fz-20" />
      </div>
    </div>
    <!--  -->
    <div class="absolute top-48 right left bottom bg-f1f1f1">
      <!-- 轮播 -->
      <div>
        <van-swipe class="my-swipe"
                   :autoplay="3000"
                   indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <!-- 通知 -->
      <div>
        <van-notice-bar left-icon="volume-o"
                        color="#1989fa"
                        background="#ecf9ff"
                        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。">
          <template #right-icon>
            <van-button type="danger"
                        size="mini"
                        class="w-60">客服</van-button>
          </template>
        </van-notice-bar>
      </div>
      <!-- 登录 & 注册 -->
      <div class="flex h-48 px-12 box-border bg-white cl-white text-center">
        <div class="flex-1 px-6 box-border flex items-center justify-center">
          <div class="w-full h-32 bg-orange line-32  rounded-20">登录</div>
        </div>
        <div class="flex-1 px-6 box-border flex items-center justify-center">
          <div class="w-full h-32 bg-red line-32 rounded-20">注册</div>
        </div>
      </div>
      <!-- 彩种相关  -->
      <div class="h-50 px-4 box-border flex text-center mt-12">
        <div class="flex-1 flex items-center justify-center bg-white"
             style="border-top-left-radius: 12px;border-top-right-radius: 12px;">
          <div>
            <div class="fz-16">港彩</div>
            <div class="fz-10">09月05日开奖</div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center bg-white"
             style="border-top-left-radius: 12px;border-top-right-radius: 12px;">
          <div>
            <div class="fz-16">港彩</div>
            <div class="fz-10">09月05日开奖</div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center bg-white"
             style="border-top-left-radius: 12px;border-top-right-radius: 12px;">
          <div>
            <div class="fz-16">港彩</div>
            <div class="fz-10">09月05日开奖</div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center bg-white"
             style="border-top-left-radius: 12px;border-top-right-radius: 12px;">
          <div>
            <div class="fz-16">港彩</div>
            <div class="fz-10">09月05日开奖</div>
          </div>
        </div>
      </div>
      <!-- 彩种展示 -->
      <div class="h-160 px-4 w-full box-border">
        <div class="h-160"
             style="border: 1px solid red;border-bottom-left-radius: 12px;border-bottom-right-radius: 12px;"></div>
      </div>
      <!-- 图库 -->
      <div>

      </div>
    </div>

    <!-- 弹出层 -->
    <van-popup v-model:show="showRight"
               position="right"
               :style="{ width: '180px', height: '100%' }">
      <div class="h-100 flex items-center justify-center">
        <div class="h-36 w-160 rounded-12 bg-orange text-center line-36 cl-white"
             @click="showRight = false; baseStore.actions_showLogin(true)">立即登录</div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </van-popup>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { baseStore } from 'store';

export default defineComponent({
  name: 'galleryHome',
  components: {},
  props: [''],
  data () {
    return {
      showRight: false,
      baseStore: null
    };
  },
  watch: {},
  created () {
    this.baseStore = baseStore()
  },
  beforeMount () { },
  mounted () { },
  methods: {},
  computed: {}
})
</script>
<style lang='scss' scoped>
.galleryHome {
  line-height: normal;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 140px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
