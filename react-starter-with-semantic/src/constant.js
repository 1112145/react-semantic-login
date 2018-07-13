import React from 'react';
import { Icon, Menu } from "semantic-ui-react";


export const formMsg = {
    invalid_email: 'Invalid Email',
    invalid_password: 'Invalid Password',
    wrong_email_format: 'Wrong email format',
    empty_email: 'Empty Email',
    empty_password: 'Empty Password'
}

export const userConstant = {
    LOGIN_SUCCESS: 'Login success!',
    LOGIN_FAILURE: 'Login failure!',
    LOGOUT: 'Logout!'
}

export const appConstant = {
    LOADING: 'Loading',
    LOADED: 'Loaded'
}

export const localStorageConstant = {
    USER: 'user'
}

export const sidebarMenu = [
    { content: <div><Icon name='home' />Dashboard</div>, key: 'dashboard' },
    { content: <div><Icon name='setting' />Setting</div>, key: 'setting' }
]