<template>
  <div class='footerBar bg-black h-50 flex cl-white line-50 text-center fz-12'>
    <div class="flex-1"
         @click="$router.push('/gameLobby')">娱乐</div>
    <div class="flex-1"
         @click="$router.push('/galleryHome')">图库</div>
    <div class="flex-1"
         @click="$router.push('/')">首页</div>
    <div class="flex-1"
         @click="$router.push('/chat')">微聊</div>
    <div class="flex-1"
         @click="$router.push('/profile')">个人</div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footerBar',
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
.footerBar {
  line-height: normal;
}
</style>
