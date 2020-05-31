import { types } from '../components';

export const showMessage = message => ({
  type: types.SHOW_MESSAGE,
  message,
});

export const hideMessage = () => ({
  type: types.HIDE_MESSAGE
});