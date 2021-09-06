export const ADDMININGPLAN = "ADDMININGPLAN"
export const dummyPlan = ["ore1", "ore2", "ore3", "ore4", "ore5", "ore6"]
export const AddMiningPlan = plan => {
    if (plan.length === 0) {plan = dummyPlan}
    plan = plan.map(ore => {
        return {name:ore, amount:0, jobs:0}
    })
    return {
        type: ADDMININGPLAN,
        payload: plan
    }
}

export const ADDMININGENTRY = "ADDMININGENTRY"
export const AddMiningEntry = (amount, lastBlock) => {
    return {
        type: ADDMININGENTRY,
        payload: {amount, lastBlock}
    }
}

export const SETLASTCHECKED = "SETLASTCHECKED"
export const setLastChecked = (isSet) => {
    return {
        type: SETLASTCHECKED,
        payload: isSet
    }
}