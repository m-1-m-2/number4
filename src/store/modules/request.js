import { defineStore } from 'pinia';

export const requestStore = defineStore('request', {
  persist: true,
  state: () => ({
    resData: {},
  }),
  getters: {
    getters_resData: (state) => {
      return state.resData;
    }
  },
  actions: {
    actions_showLogin (val) {
      this.showLogin = val
    },
  },
});
