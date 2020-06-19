import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BTC_USDs: []
  },
  getters: {
    BTC_USDs(state){
      return state.BTC_USDs;
    }
  },
  mutations: {
    getBTC_USD(state, data) {
      state.BTC_USDs = data.BTC_USD;
    }
  },
  actions: {
    async getBTC_USD(context){
      let {data} = await axios.get(`https://api.exmo.com/v1/trades/?pair=BTC_USD`);
        context.commit('getBTC_USD', data);
      console.log(data);
}
  }
})
