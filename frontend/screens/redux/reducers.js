// Creates the Redux variables
const initState = {
    test: [
        { username: "", password: "" }
    ],
    videolink: "",
    gamelink : "",
    drawlink : "",
    coloringlink : "",
}

// Edits the Redux variables
const rootReducer = (state = initState, action) => {
    if (action.type === "sendvideo") {
        return  {
            ...state,
            videolink: action.videolink
        }
    }
    if (action.type === "sendgame") {
        return  {
            ...state,
            gamelink: action.gamelink
        }
    }
    if (action.type === "senddraw") {
        return  {
            ...state,
            gamelink: action.drawlink
        }
    }
    if (action.type === "sendcoloring") {
        return  {
            ...state,
            gamelink: action.coloringlink
        }
    }
    
    return state;
}

export default rootReducer;

