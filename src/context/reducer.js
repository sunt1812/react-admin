 import { SET_MODE,SET_COLOR,GET_THEME } from "./action"

const reduce = (state,action) => {
    const {type,payload} = action
    switch(type) {
        case SET_MODE:
            return {...state,themeMode:payload}
        case SET_COLOR:
            return {...state,themeColor:payload}
        default:
            return state
    }
}
export default reduce