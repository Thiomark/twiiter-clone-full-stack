const state = {
    layout: '',
    bottomNavbar: false
}

const mutations = {
    setTheLayout(state, payload){
        state.layout = payload
    }, 
    bottomNavbarState(state){
        state.bottomNavbar = !state.bottomNavbar
    }, 
}

const getters = {
    getTheLayout: state => state.feedTwoots,
    getBottomNavbar: state => state.bottomNavbar,
}

export default {
    namespaced: true,
    state,
    mutations,
    getters
}