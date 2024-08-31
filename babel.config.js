module.exports = {
  presets: [["module:metro-react-native-babel-preset",{unstable_transformProfile: 'hermes-stable'}]],
  plugins: ['nativewind/babel',["@babel/plugin-transform-private-methods", { "loose": true }]],
}