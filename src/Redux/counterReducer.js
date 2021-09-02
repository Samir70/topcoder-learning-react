import { ADDMININGENTRY, ADDMININGPLAN } from "./actions"

const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, action) => {
    // console.log('got action: ', action)
    switch (action.type) {
        case ADDMININGPLAN:
            return { ...state, miningPlan:action.payload }
        case ADDMININGENTRY:
            return { ...state, value: state.value + action.payload.amount}
        default:
            return state
    }
}

