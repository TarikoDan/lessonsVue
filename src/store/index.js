import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counterX: 0,
        clicks: 0,
    },

    getters: {
        circuit: state => {
            return (state.counterX * 2 * Math.PI).toFixed(2)
        },
        circleArea: state => {
            return (state.counterX * state.counterX * Math.PI).toFixed(2)
        },
        clicks: state => {
            return state.clicks + " clicks"
        }
    },

    mutations: {
        increment: (state, val) => {
            state.counterX += val;
            state.clicks++
        },
        decrement: (state, val) => {
            state.counterX -= val;
            state.clicks++
        },
        resetClicks: state => {
            state.clicks = 0
        },
        resetCounter: state => {
            state.counterX = 0
        },
    },

    actions: {
        incTimeout:({commit}, payload) => {
            setTimeout(() => {
                commit("increment", payload.value)
            },payload.timeOut)

        }
    }
})
