// Creates the Redux variables
const initState = {
    videolink: "",
    gamelink : "",
    drawlink : "",
    coloringlink : "",
    videocat: "",
    user: {username:'User', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FMgEe33BwCdnfLO89QdJEYxWMgc9I982fw&usqp=CAU'}
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
        case 'sendvideocat':
            return {...state,videocat:action.videocat}
        case 'senduser':
            return {...state,user:action.user}
        default:
            return state;
    }
}
export default rootReducer
