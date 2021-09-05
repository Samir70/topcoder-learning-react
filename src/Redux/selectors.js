export const getCurrentOreName = state => state.miningPlan[state.currentOre].name
export const getCurrentOreAmount = state => state.miningPlan[state.currentOre].amount
export const getResults = state => state.miningPlan.slice(0, state.currentOre + 1)
export const checkIfLastOreFinished = state => state.finishedLastOre
