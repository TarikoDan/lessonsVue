import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counterX: 0
    },

    getters: {
        multiCounter: state => {
            return state.counterX * 2
        },
        stringCount: state => {
            return state.counterX + "clicks"
        }
    },

    mutations: {
        increment: state => {
            state.counterX++;
        },
        decrement: state => {
            state.counterX--;
        },
    }
})
