<template>
  <div class='mainLayout w-100vw h-100vh flex items-center justify-center'>
    <div class="container w-full h-full bg-white relative">
      <!-- {{ baseStore.getters_showLogin }} -->
      <router-view></router-view>
      <footerVue class="fixed bottom left right"></footerVue>
      <!-- 登录页面 -->
      <van-popup v-model:show="baseStore.getters_showLogin"
                 position="right"
                 :style="{ width: '100%', height: '100%' }">
        <div class="absolute top bottom left right">
          <div class="h-48 w-full flex line-48 text-center items-center justify-center">
            <div class="w-60"
                 @click="baseStore.actions_showLogin(false)">
              <van-icon name="arrow-left"
                        class="fz-20" />
            </div>
            <div class="flex-1 fz-16">{{isLogin? '登录': '注册'}}</div>
            <div class="w-60">
            </div>
          </div>
          <div class="absolute top-48 bottom left right flex justify-center">
            <div class="flex-col pt-20 box-border"
                 v-if="isLogin">
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入用户名"
                       class="inputStyle"
                       maxlength="16" />
              </div>
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入密码"
                       class="inputStyle"
                       maxlength="16" />
              </div>
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入验证码"
                       class="inputStyle code"
                       maxlength="16" />
                <div class="w-100">
                  <div class="h-40 w-80 bg-red ml-20"></div>
                </div>
              </div>
              <div class="h-48 mt-30 fz-16 text-center line-48 bg-a8a8a8 rounded-6 cl-white">
                登录
              </div>
              <div class="h-36 line-36 flex fz-10 mt-12">
                <div class="flex-1 cl-blue">忘记密码</div>
                <div class="flex-1 text-right">没有账号？<span class="cl-blue"
                        @click="isLogin = false">在此注册</span></div>
              </div>
            </div>
            <div v-else
                 class="flex-col pt-20 box-border">
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入用户名"
                       class="inputStyle"
                       maxlength="16" />
              </div>
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入密码"
                       class="inputStyle"
                       maxlength="16" />
              </div>
              <!-- 密码强度 -->
              <div class="h-30 line-30 fz-14">密码强度</div>
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入重新密码"
                       class="inputStyle"
                       maxlength="16" />
              </div>
              <div class="flex h-48 line-48">
                <input type="text"
                       placeholder="请输入真实姓名"
                       class="inputStyle"
                       maxlength="16" />
              </div>
              <div class="h-30 line-30 fz-12 cl-red">
                需与提现帐号户名一致，否则将无法提现
              </div>
              <div class="h-30 line-30 fz-12">
                我已同意并阅读相关<span class="cl-blue">「合约条款」</span>与<span class="cl-blue">「隐私说明」</span>
              </div>
              <div class="h-48 mt-4 fz-16 text-center line-48 bg-a8a8a8 rounded-6 cl-white">
                点击完成验证
              </div>
              <div class="h-30 line-30 fz-12 mt-4 text-right">
                已有账号<span class="cl-blue"
                      @click="isLogin = true">在此登录</span>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import footerVue from '../components/mainLayout/footerBar.vue';
import { baseStore } from 'store';
import API from 'apis';

export default defineComponent({
  name: 'mainLayout',
  components: { footerVue },
  props: [''],
  data () {
    return {
      showLogin: false,
      baseStore: null,
      isLogin: true,
    };
  },
  watch: {},
  created () { this.baseStore = baseStore() },
  beforeMount () { },
  mounted () {
    // console.log(API.User.login())
  },
  methods: {},
  computed: {}
})
</script>
<style lang='scss' scoped>
.mainLayout {
  line-height: normal;
  @media screen and (min-width: 460px) {
    .container {
      // width: 460px !important;
    }
  }
  .inputStyle {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 13px 14px;
    width: 300px;
    font-size: 14px;
    font-weight: 700;
    font-family: "Microsoft soft";
    height: 12px;
  }
  .code {
    width: 200px !important;
  }
  .inputStyle:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
}
</style>
