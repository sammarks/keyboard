(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-native')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-native'], factory) :
  (global = global || self, global['react-native-hooks-keyboard'] = factory(global.React, global.reactNative));
}(this, function (react, reactNative) { 

  const react__default = 'default' in react ? react.default : react;

  /* eslint-disable no-unused-vars */
  const index = (function (config) {
    if (config === void 0) {
      config = {};
    }

    const _config = config;
        const _config$useWillShow = _config.useWillShow;
        const useWillShow = _config$useWillShow === void 0 ? false : _config$useWillShow;
        const _config$useWillHide = _config.useWillHide;
        const useWillHide = _config$useWillHide === void 0 ? false : _config$useWillHide;

    const _useState = react.useState(false);
        const visible = _useState[0];
        const setVisible = _useState[1];

    const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide';

    function dismiss() {
      reactNative.Keyboard.dismiss();
      setVisible(false);
    }

    react.useEffect(function () {
      function onKeyboardShow() {
        setVisible(true);
      }

      function onKeyboardHide() {
        setVisible(false);
      }

      reactNative.Keyboard.addListener(showEvent, onKeyboardShow);
      reactNative.Keyboard.addListener(hideEvent, onKeyboardHide);
      return function () {
        reactNative.Keyboard.removeListener(showEvent, onKeyboardShow);
        reactNative.Keyboard.removeListener(hideEvent, onKeyboardHide);
      };
    }, [useWillShow, useWillHide]);
    return [visible, dismiss];
  });

  return index;

}));
// # sourceMappingURL=react-native-hooks-keyboard.js.map
