// frontend/jest.config.js
// this file sets the configurations for jest
module.exports = {
    "preset": "jest-expo/universal",
    "verbose": true,
    "setupFiles": [
      "./jest/setup.js"
    ],
    "setupFilesAfterEnv": [
      "./jest/setup.js"
    ],
    "testEnvironment": "jsdom",
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
    ],
    "moduleNameMapper": {
      "\\.(css|scss|less)$": "./jest/styleMock.js",
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./jest/fileMock.js"
    }
}
