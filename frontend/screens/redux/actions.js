// Creates Redux functions that edit the Redux variables to be used by any React||Redux component

export const sendvideo = (z) => {
    return {
        type: 'sendvideo',
        videolink: z
    }
}
