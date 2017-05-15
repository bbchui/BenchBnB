import React from 'react';
import {merge} from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS }
        from '../actions/session_actions';

const defaultState = {currentUser: null, errors: []};


const SessionReducer = (state = defaultState, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge(defaultState, action.user);
      return newState;
    case RECEIVE_ERRORS:
      let newState2 = merge(defaultState, action.errors);
      return newState2;
    default:
      return state;
  }
};

export default SessionReducer;
