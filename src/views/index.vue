<template>
  <div class='index w-full h-full relative'>
    <div class="h-48 w-full">
      <van-tabs v-model:active="active"
                color="red"
                shrink>
        <van-tab title="关注"></van-tab>
        <van-tab title="六合彩"></van-tab>
        <van-tab title="其他"></van-tab>
      </van-tabs>
    </div>
    <div class="absolute top-50 bottom-50 left right scroll-y bg-f1f1f1">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import follow from '../components/index/follow.vue';
import lottery from '../components/index/lottery.vue';
import other from '../components/index/other.vue';

export default defineComponent({
  name: 'index',
  components: { follow, lottery, other },
  props: [''],
  data () {
    return {
      componentsSet: ['follow', 'lottery', 'other'],
      active: 1,
    };
  },
  watch: {},
  created () { },
  beforeMount () { },
  mounted () { },
  methods: {},
  computed: {
    currentComponent () {
      return this.componentsSet[this.active]
    }
  }
})
</script>
<style lang='scss' scoped>
.index {
  line-height: normal;
}
</style>
