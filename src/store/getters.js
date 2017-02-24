
export const travelListIndex = state => {
	return state.travelLists.slice(0,4)
}

export const travelList = state => {
	return state.travelLists
}

export const sportList = state => {
	return state.sportLists
}

export const userState = state => {
	return state.user
}