<template>
  <div class='follow absolute top right bottom left box-border fz-14'>
    <!-- 关注中 -->
    <div class="mt-12 bg-white">
      <div class="h-24 w-full line-24 px-12 box-border">关注中</div>
      <div class="flex px-6 box-border"
           style="flex-flow: wrap;">
        <div class="w-Equally-2 h-160 p-all-6 box-border relative"
             v-for="(v, k) in 2"
             :key="k">
          <div class="w-full h-full bg-red rounded-12"></div>
        </div>
      </div>
    </div>
    <!-- 为您推荐 -->
    <div class="mt-12 bg-white">
      <div class="h-24 w-full line-24 px-12 box-border">为您推荐</div>
      <div class="flex px-6 box-border"
           style="flex-flow: wrap;">
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
  name: 'follow',
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
.follow {
  line-height: normal;
}
</style>
