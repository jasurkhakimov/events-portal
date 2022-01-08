import Vue from 'vue';
import Vuex from 'vuex';
import { Module } from './modules';
import userModule from './modules/user';

Vue.use(Vuex)

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  [Module.USER]: userModule,
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})