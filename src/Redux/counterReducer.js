import { ADDMININGENTRY, ADDMININGPLAN, SETLASTCHECKED, SETAMOUNTMINED } from "./actions"

const initialState = {
    miningPlan: ["ore1", "ore2", "ore3", "ore4", "ore5", "ore6"].map(ore => {
        return { name: ore, amount: 0, jobs: 0 }
    }),
    currentOre: 0,
    finishedLastOre: false,
    lastChecked: false,
    amountMined: ''
}

export const counterReducer = (state = initialState, action) => {
    console.log('got action: ', action)
    switch (action.type) {
        case ADDMININGPLAN:
            return { ...initialState, miningPlan: action.payload }
        case ADDMININGENTRY:
            let nextOre = action.payload.lastBlock ? state.currentOre + 1 : state.currentOre
            const noMoreOres = nextOre === state.miningPlan.length
            let newPlan = [...state.miningPlan]
            newPlan[state.currentOre].amount += action.payload.amount
            newPlan[state.currentOre].jobs++
            return {
                ...state,
                miningPlan: newPlan,
                currentOre: nextOre,
                finishedLastOre: noMoreOres,
                lastChecked: false,
                amountMined: action.payload.lastBlock ? '' : state.amountMined
            }
        case SETLASTCHECKED: {
            return { ...state, lastChecked: action.payload }
        }
        case SETAMOUNTMINED: {
            return { ...state, amountMined: action.payload }
        }
        default:
            return state
    }
}

