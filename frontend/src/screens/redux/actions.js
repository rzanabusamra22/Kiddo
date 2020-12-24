// frontend/src/screens/redux/actions.js

// Creates Redux functions that edit the Redux variables to be used by any React connected component

export const sendvideo = (z) => {
  return {
    type: "sendvideo",
    videolink: z,
  };
};
export const sendgame = (z) => {
  return {
    type: "sendgame",
    gamelink: z,
  };
};
export const senddraw = (z) => {
  return {
    type: "senddraw",
    drawlink: z,
  };
};
export const sendcoloring = (z) => {
  return {
    type: "sendcoloring",
    coloringlink: z,
  };
};
export const sendvideocat = (z) => {
  return {
    type: "sendvideocat",
    videocat: z,
  };
};
export const senduser = (z) => {
  return {
    type: "senduser",
    user: z,
  };
};
