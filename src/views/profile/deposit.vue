<template>
  <div class='deposit w-full h-full relative fz-12'>
    <!-- 导航 -->
    <div class="h-48 w-full flex line-48 text-center bb-1px fz-16">
      <div class="w-60">
        <van-icon name="arrow-left"
                  @click="$router.go(-1)"
                  class="fz-20" />
      </div>
      <div class="flex-1">充值</div>
      <div class="w-60"
           @click="showRight = true">
        <van-icon name="manager-o"
                  class="fz-20" />
      </div>
    </div>
    <!--  -->
    <div>

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

export default defineComponent({
  name: 'deposit',
  components: {},
  props: [''],
  data () {
    return {
      showRight: false,
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
.deposit {
  line-height: normal;
}
</style>
