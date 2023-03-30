export default {
  namespaced: true,
  state: {
    userId: 0,
    nickname: "",
    money: 0,
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.userId = user.id;
      state.nickname = user.nickname;
      state.money = user.money;
    },
  },
  actions: {
    logout(self) {
      self.commit("setUser", {
        id: 0,
        nickname: "",
        money: 0,
      });
    },
  },
  modules: {},
};
