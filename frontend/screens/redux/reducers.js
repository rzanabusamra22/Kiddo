// Creates the Redux variables
const initState = {
    test: [
        { username: "", password: "" }
    ],
    videolink: "",
}

// Edits the Redux variables
const rootReducer = (state = initState, action) => {
    if (action.type === "sendvideo") {
        return  {
            ...state,
            videolink: action.videolink
        }
    }
    return state;
}

export default rootReducer;

