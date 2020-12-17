// Creates the Redux variables
const initState = {
    test: [
        { username: "", password: "" }
    ],
    videolink: "",
    gamelink : "",
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
    return state;
}
export default rootReducer;