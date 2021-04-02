import axios from 'axios'
// const { getAlls } = require('../services/TwootService')

const state = {
    feedTwoots: []
}

const mutations = {
    FeedTwoots(state, payload){
        state.feedTwoots = payload
    }, 
    addTwoot(state, payload){
        state.feedTwoots.unshift(payload);
    }, 
}

const actions = {
    async fetchFeedTwoots({commit}){
        const data = await axios.get('api/v1/twoots')
        commit('FeedTwoots', data.data.rows)
    },
    createTwoot(context, {commit}, twoot){
        //! attention
        const user = context.rootState.user.user
        console.log(user)
        // commit('addTwoot', twoot)
    }
}

const getters = {
    getFeedTwoots: state => state.feedTwoots,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}