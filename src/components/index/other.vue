<template>
  <div class='other absolute top right bottom left box-border fz-14'>
    <!-- 正在直播 -->
    <div class="mt-12 bg-white">
      <div class="h-24 w-full line-24 px-12 box-border">正在直播</div>
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
  name: 'other',
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
.other {
  line-height: normal;
}
</style>
