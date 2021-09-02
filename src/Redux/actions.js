export const ADDMININGPLAN = "ADDMININGPLAN"
export const dummyPlan = ["ore1", "ore2", "ore3", "ore4", "ore5", "ore6"]
export const AddMiningPlan = plan => {
    if (plan.length === 0) {plan = dummyPlan}
    plan = plan.map(ore => {
        return {name:ore, amount:0}
    })
    return {
        type: ADDMININGPLAN,
        payload: plan.length === 0 ? dummyPlan : plan
    }
}

export const ADDMININGENTRY = "ADDMININGENTRY"
export const AddMiningEntry = (amount, lastBlock) => {
    return {
        type: ADDMININGENTRY,
        payload: {amount, lastBlock}
    }
}