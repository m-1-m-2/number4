<template>
  <div class='profile w-full h-full relative fz-12 bg-f1f1f1 scroll-y'>
    <!--  -->
    <div class="h-120 w-full bg-red px-12 box-border flex items-center justify-center">
      <div class="h-48 flex w-full">
        <div class="h-48 w-48 rounded bg-blue"></div>
        <div class="h-48 w-160 cl-white pl-12 box-border">
          <div class="h-30 fz-16 line-30">用户名</div>
          <div class="h-18 line-18">这是你成为会员XX天</div>
        </div>
        <div class="flex-1 line-48 text-right cl-white">
          <van-icon name="chat"
                    class="fz-20" />
        </div>
      </div>
    </div>
    <!-- vip -->
    <div class="h-130 w-full bg-orange px-12 box-border flex items-center justify-center rounded-12 relative top-24- cl-white"
         @click="$router.push('/profile/vip')">
      vip详情
    </div>
    <!-- 钱包 -->
    <div class="h-60 w-full rounded-12 bg-white relative flex px-12 box-border top-12-">
      <div class="flex-1 ">
        <div class="h-30 line-36">我的钱包</div>
        <div class="h-30 line-24">XXXXX.XX 元</div>
      </div>
      <div class="flex-1 flex items-center justify-end">
        <div class="flex cl-white text-center">
          <div class="w-60 h-30 line-30 bg-red rounded-16"
               @click="$router.push('/profile/deposit')">充值</div>
          <div class="w-60 h-30 ml-8 line-30 bg-blue rounded-16">提现</div>
        </div>
      </div>
    </div>
    <!-- 必备工具 -->
    <div class="p-all-12 box-border bg-white relative rounded-12">
      <div class="h-30 line-30 fz-16 bolder">必备工具</div>
      <div class="flex box-border flex-flow">
        <div class="w-Equally-4 h-80 box-border relative"
             v-for="(v, k) in 8"
             :key="k">
          <div class="w-full h-full bg-red rounded-12"></div>
        </div>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="mt-12 h-150 w-full">
      <van-swipe class="my-swipe"
                 :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <!-- 我的频道 -->
    <div class="p-all-12 box-border bg-white rounded-12">
      <div class="h-30 line-30 fz-16 bolder">我的频道</div>
      <div class="flex box-border flex-flow">
        <div class="w-Equally-4 h-80 box-border relative"
             v-for="(v, k) in 8"
             :key="k">
          <div class="w-full h-full bg-red rounded-12"></div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="p-all-12 box-border bg-white mt-12 rounded-12">
      <div class="w-full h-36 line-36 flex">
        <div class="flex-1">
          <van-icon name="fire-o"
                    class="fz-20" />
          余额宝
        </div>
        <div class="w-fit">
          <van-icon name="arrow"
                    class="fz-20" />
        </div>
      </div>
      <div class="w-full h-36 line-36 flex">
        <div class="flex-1">
          <van-icon name="fire-o"
                    class="fz-20" />
          余额宝
        </div>
        <div class="w-fit">
          <van-icon name="arrow"
                    class="fz-20" />
        </div>
      </div>
      <div class="w-full h-36 line-36 flex">
        <div class="flex-1">
          <van-icon name="fire-o"
                    class="fz-20" />
          余额宝
        </div>
        <div class="w-fit">
          <van-icon name="arrow"
                    class="fz-20" />
        </div>
      </div>
      <div class="w-full h-36 line-36 flex">
        <div class="flex-1">
          <van-icon name="fire-o"
                    class="fz-20" />
          余额宝
        </div>
        <div class="w-fit">
          <van-icon name="arrow"
                    class="fz-20" />
        </div>
      </div>
      <div class="w-full h-36 line-36 flex">
        <div class="flex-1">
          <van-icon name="fire-o"
                    class="fz-20" />
          余额宝
        </div>
        <div class="w-fit">
          <van-icon name="arrow"
                    class="fz-20" />
        </div>
      </div>
    </div>
    <div class="h-80 flex items-center justify-center">
      <div class="w-280 h-40 rounded-20 cl-red text-center line-40 bg-white">退出登录</div>
    </div>
    <!-- 留白 -->
    <div class="h-50 bg-f1f1f1"></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'profile',
  components: {},
  props: [''],
  data () {
    return {

    };
  },
  watch: {},
  created () { },
  beforeMount () { },
  mounted () { },
  methods: {},
  computed: {}
})
</script>
<style lang='scss' scoped>
.profile {
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
