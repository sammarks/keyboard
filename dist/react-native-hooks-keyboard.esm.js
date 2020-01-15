import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

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

  const _useState = useState(false);
      const visible = _useState[0];
      const setVisible = _useState[1];

  const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow';
  const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide';

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(function () {
    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    Keyboard.addListener(showEvent, onKeyboardShow);
    Keyboard.addListener(hideEvent, onKeyboardHide);
    return function () {
      Keyboard.removeListener(showEvent, onKeyboardShow);
      Keyboard.removeListener(hideEvent, onKeyboardHide);
    };
  }, [useWillShow, useWillHide]);
  return [visible, dismiss];
});

export default index;
// # sourceMappingURL=react-native-hooks-keyboard.esm.js.map
