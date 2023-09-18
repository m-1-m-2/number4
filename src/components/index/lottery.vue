<template>
  <div class='lottery absolute top right bottom left box-border fz-14'>
    <!-- 热门主播 -->
    <div class="mt-12 bg-white px-12 box-border">
      <div class="h-24 w-full line-24">热门主播</div>
      <div class="flex">
        <div class="w-40 mr-12"
             v-for="(v, k) in 4"
             :key="k">
          <div class="w-40 h-40 rounded bg-red">
          </div>
          <div class="w-40 h-24 fz-12 line-24 text-center">主播</div>
        </div>
      </div>
    </div>
    <!-- 正在直播 -->
    <div class="mt-12 bg-white">
      <div class="h-24 w-full line-24 px-12 box-border">正在直播</div>
      <div class="flex px-6 box-border flex-flow">
        <div class="w-Equally-2 h-160 p-all-6 box-border relative"
             v-for="(v, k) in 15"
             :key="k">
          <div class="w-full h-full bg-red rounded-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'lottery',
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
.lottery {
  line-height: normal;
}
</style>
