import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';




document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
