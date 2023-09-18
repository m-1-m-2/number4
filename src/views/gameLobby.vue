<template>
  <div class='gameLobby w-full h-full relative fz-12 bg-black scroll-y'>
    <!-- 头部 -->
    <div class="h-120 bg-red pt-50 box-border">
      <div class="h-36 flex px-24 box-border">
        <div class="flex-1"></div>
        <div class="w-60">
          <div class="w-60 rounded-12 bg-orange h-30 line-30 cl-white text-center"
               @click="$router.push('/profile/deposit')">登录</div>
        </div>
      </div>
    </div>
    <!-- 游戏区 -->
    <div class="relative top-24-">
      <div class="h-360 rounded-12 w-full bg-white mb-12">

      </div>
      <div class="h-360 rounded-12 w-full bg-white mb-12">

      </div>
      <div class="h-360 rounded-12 w-full bg-white mb-12">

      </div>
      <div class="h-360 rounded-12 w-full bg-white mb-12">

      </div>
      <div class="h-360 rounded-12 w-full bg-white mb-12">

      </div>
      <!-- 留白 -->
      <div class="h-26"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'gameLobby',
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
  methods: {
    depositFun () { }
  },
  computed: {}
})
</script>
<style lang='scss' scoped>
.gameLobby {
  line-height: normal;
}
</style>
