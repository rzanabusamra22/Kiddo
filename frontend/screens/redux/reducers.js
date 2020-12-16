import { sendvideo,sendgame, sendcoloring,senddraw, senditem, sendvideocat, } from './actions';

// Creates the Redux variables
const initState = {
    videolink: "",
    gamelink : "",
    drawlink : "",
    coloringlink : "",
    videoitem: "asdS",
    videocat: ""
}

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'sendvideo':
            return {...state, videolink: action.videolink}
        case 'sendgame':
            return {...state, gamelink: action.gamelink}
        case 'senddraw':
            return {...state,drawlink:action.drawlink}
        case 'sendcoloring':
            return {...state,coloringlink:action.coloringlink}
        case 'senditem':
            return {...state,videoitem:action.videoitem}
        case 'sendvideocat':
            return {...state,videocat:action.videocat}
        default:
            return state;
    }
}
export default rootReducer