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
    ]
  }