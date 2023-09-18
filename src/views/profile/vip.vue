<template>
  <div class='vip w-full h-full relative fz-12'>
    <!-- 导航 -->
    <div class="h-48 w-full flex line-48 text-center bb-1px fz-16">
      <div class="w-60">
        <van-icon name="arrow-left"
                  @click="$router.go(-1)"
                  class="fz-20" />
      </div>
      <div class="flex-1">ViP</div>
      <div class="w-60"
           @click="showRight = true">
        <van-icon name="manager-o"
                  class="fz-20" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vip',
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
.vip {
  line-height: normal;
}
</style>
