import * as APIUtils from '../util/sessions_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => (
  APIUtils.login(user)
    .then(_user => dispatch(receiveCurrentUser(_user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtils.signup(user)
    .then(_user => dispatch(receiveCurrentUser(_user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtils.logout()
    .then(dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});
