import apiRequest from "~/utils/apiRequest";
import Vue from 'vue';

export const state = () => ({
  pageData: {}, // meta, slides, etc.
  activePageIndex: 0
});

export const mutations = {
  setPageData(state, data) {
  	state.pageData[data.pageId] = data.pageData;
  },

  setActivePageIndex(state, data) {
    state.activePageIndex = data;
  }
}

export const actions = {
  async getPageData({commit, state}, pageId) {
  	if (!state.pageData[pageId]) {
	    const res = await apiRequest.get(`pages/${pageId}`);
	    commit('setPageData', { pageData: res.data, pageId});
	  }
    commit('setActivePageIndex', pageId);
  }
}
