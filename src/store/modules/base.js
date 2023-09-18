import { defineStore } from 'pinia';

export const baseStore = defineStore('base', {
  persist: true,
  state: () => ({
    showLogin: false,
  }),
  getters: {
    getters_showLogin: (state) => {
      return state.showLogin;
    }
  },
  actions: {
    actions_showLogin (val) {
      this.showLogin = val
    },
  },
});
