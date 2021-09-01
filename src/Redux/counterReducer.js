const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, action) => {
    console.log('got action: ', action)
    switch (action.type) {
        case 'counter/incrememnted':
            return { ...state, value: state.value + 1 }
        case 'counter/decremented':
            return { ...state, value: state.value - 1 }
        default:
            return state
    }
}

