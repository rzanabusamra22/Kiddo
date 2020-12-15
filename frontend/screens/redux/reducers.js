import { sendvideo,sendgame, sendcoloring,senddraw } from './actions';

// Creates the Redux variables
const initState = {
    videolink: "",
    gamelink : "",
    drawlink : "",
    coloringlink : "",
}

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case sendvideo:
            return {...state, videolink: action.videolink}
        case sendgame:
            return {...state, gamelink: action.gamelink}
        case senddraw:
            return {...state,drawlink:action.drawlink}
        case sendcoloring:
            return {...state,coloringlink:action.coloringlink}
        default:
            return state;
    }
}
export default rootReducer