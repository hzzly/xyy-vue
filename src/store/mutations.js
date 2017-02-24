
import * as types from './mutation-types'


export default {
    [types.TRAVEL_LISTS] (state, lists) {
        state.travelLists = state.travelLists.concat(lists)
    },

    [types.SPORT_LISTS] (state, lists) {
        state.sportLists = state.sportLists.concat(lists)
    },

    [types.TRAVEL_DETAIL] (state, travel) {
        state.travelDetail = travel
    },

    [types.SPORT_DETAIL] (state, sport) {
        state.sportDetail = sport
    },

    [types.SPORT_DETAIL] (state, sport) {
        state.sportDetail = sport
    },

    [types.SET_USER] (state, user) {
        state.user = user
    },

    [types.REGIST] (state, user) {
        state.user = user
    },

    [types.LOGIN] (state, user) {
        state.user = user
    },

    [types.SHOW_TOAST] (state, palyload) {
        state.showToast = palyload
    },

    [types.SHOW_SUCCESS] (state, palyload) {
        state.showSuccess = palyload
    },

    [types.SHOW_FAIL] (state, palyload) {
        state.showFail = palyload
    },

    [types.TOAST_MSG] (state, palyload) {
        state.toastMsg = palyload
    },

    [types.SHOW_SIDEBAR] (state, palyload) {
        state.showSidebar = palyload
    },

    [types.SHOW_LOADING] (state, palyload) {
        state.showLoading = palyload
    },
    
}

