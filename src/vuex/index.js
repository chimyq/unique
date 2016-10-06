import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'zepto'

Vue.use(Vuex)

class Ware {
  constructor () {
    this.info = {}
    this.weight = 1
    this.dish = ''
    this.sum = 1
  }
}

class User {
  constructor () {
    this.nickname = ''
    this.headimgurl = ''
    this.type = 1
    this.orders = []
    this.shopcar = []
    this.addresses = []
    this.coupons = []
    this.openid = ''
  }
}

class Order {
  constructor () {
    this.wares = []
    this.msg = ''
    this.addressId = ''
    this.receivingTime = ''
    this.payway = 0
    this.price = 0
  }
}

// 创建一个对象来保存应用启动时的初始状态
const state = {
  user: new User(),
  wares: {
    a: [],
    b: [],
    c: [],
    d: []
  },
  ware: new Ware(),
  order: new Order()
}

const mutations = {
  USERINIT (state) {
    state.user = new User()
  },
  USERINFO (state) {
    $.ajax({
      type: 'get',
      url: '/request/user',
      dataType: 'json',
      success: data => {
        if (data.state !== 0) {
          state.user = data
          state.user.headimgurl = state.user.headimgurl || 'http://cakeees.top/upload/img/head.jpg'
        }
      },
      error: () => $.toast('用户信息获取失败')
    })
  },
  WARESINFO (state) {
    $.ajax({
      type: 'get',
      url: '/request/ware',
      success: data => {
        data.forEach((ware) => {
          if (ware.type === 0) {
            state.wares.a.push(ware)
          } else if (ware.type === 1) {
            state.wares.b.push(ware)
          } else if (ware.type === 2) {
            state.wares.c.push(ware)
          } else if (ware.type === 3) {
            state.wares.d.push(ware)
          }
        })
      },
      error: () => $.toast('商品信息获取失败')
    })
  },
  WAREINIT (state) {
    state.ware = new Ware()
  },
  WAREINFO (state, wareId) {
    $.ajax({
      type: 'get',
      url: '/request/ware/' + wareId,
      success: data => { state.ware.info = data },
      error: () => $.toast('商品信息获取失败')
    })
  },
  ORDERINIT (state) {
    state.order = new Order()
  },
  ORDERWARES (state, ware) {
    state.order.wares.push(ware)
  }
}

const actions = {
  userInit ({ commit }) {
    commit('USERINIT')
  },
  userInfo ({ commit }) {
    commit('USERINFO')
  },
  waresInfo ({ commit }) {
    commit('WARESINFO')
  },
  wareInit ({ commit }) {
    commit('WAREINIT')
  },
  wareInfo ({ commit }, wareId) {
    commit('WAREINFO', wareId)
  },
  orderInit ({ commit }) {
    commit('ORDERINIT')
  },
  orderWares ({ commit }, ware) {
    commit('ORDERWARES', ware)
  }
}

const getters = {
  getUserInfo: state => {
    return state.user
  },
  getWaresInfo: state => {
    return state.wares
  },
  getWareInfo: state => {
    return state.ware
  },
  getOrderInfo: state => {
    return state.order
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store