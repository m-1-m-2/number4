<template>
  <div class='App absolute top bottom left right'>
    <mainLayout class="absolute top bottom left right"></mainLayout>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import mainLayout from './layouts/mainLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    mainLayout
  },
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
.App {
  line-height: normal;
}
</style>
