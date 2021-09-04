import { ADDMININGENTRY, ADDMININGPLAN } from "./actions"

const initialState = {
    miningPlan: [{ name: 'noMiningPlan', amount: 0 }, { name: 'noOres', amount: 0 }],
    currentOre: 0,
    finishedLastOre: false
}

export const counterReducer = (state = initialState, action) => {
    console.log('got action: ', action)
    switch (action.type) {
        case ADDMININGPLAN:
            return { ...state, miningPlan: action.payload }
        case ADDMININGENTRY:
            let nextOre = action.payload.lastBlock ? state.currentOre + 1 : state.currentOre
            const noMoreOres = nextOre === state.miningPlan.length
            let newPlan = [...state.miningPlan]
            newPlan[state.currentOre].amount += action.payload.amount
            return {
                ...state,
                miningPlan: newPlan,
                currentOre: nextOre,
                finishedLastOre: noMoreOres
            }
        default:
            return state
    }
}

