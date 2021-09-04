import { ADDMININGENTRY, ADDMININGPLAN } from "./actions"

const initialState = {
    miningPlan: ['noMiningPlan', 'noOres'],
    currentOre: 0
}

export const counterReducer = (state = initialState, action) => {
    // console.log('got action: ', action)
    switch (action.type) {
        case ADDMININGPLAN:
            return { ...state, miningPlan: action.payload }
        case ADDMININGENTRY:
            let nextOre = action.payload.lastBlock ? state.currentOre + 1 : state.currentOre
            let newPlan = [...state.miningPlan]
            newPlan[state.currentOre].amount += action.payload.amount
            return {
                ...state,
                miningPlan: newPlan,
                currentOre: nextOre
            }
        default:
            return state
    }
}

