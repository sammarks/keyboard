

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex.default : ex; }

const react = require('react');

const react__default = _interopDefault(react);
const reactNative = require('react-native');

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

exports.default = index;
// # sourceMappingURL=react-native-hooks-keyboard.cjs.js.map
