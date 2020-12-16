// Creates the Redux variables
const initState = {
    videolink: "",
    gamelink : "",
}

// Edits the Redux variables
export default rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'sendvideo':
            return {...state, videolink: action.videolink}
        case 'sendgame':
            return {...state, gamelink: action.gamelink}
        default:
            return state;
    }
}
