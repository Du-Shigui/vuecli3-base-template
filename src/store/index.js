import Vue from 'vue'
import Vuex from 'vuex'
import { metaInfo } from '@/utils/const'

Vue.use(Vuex)

const state = {
	metaInfo,
};

const mutations = {
	CAHNGE_META_INFO(state, metaInfo) {
		state.metaInfo = {
			...state.metaInfo,
			...metaInfo
		};
	},
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
