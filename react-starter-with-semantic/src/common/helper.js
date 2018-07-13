import _ from 'lodash';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Icon } from "semantic-ui-react";

export const intellisense = (dataSource, keyWord, key) => {
    var results = [];

    if (keyWord.length === 0) return dataSource;

    const re = new RegExp(_.escapeRegExp(keyWord), 'i');

    const isMatch = result => re.test((key) ? result[key] : result);

    results = _.filter(dataSource, isMatch);

    return results;

}

export const browserHistory = createBrowserHistory();


export const sidebarMenu = [
    {
        content: <div><Icon name='home' />Home page</div>,
        key: 'home',
        onClick: () => { browserHistory.push('/') }
    },
    {
        content: <div><Icon name='setting' />Setting</div>,
        key: 'setting',
        onClick: () => { browserHistory.push('/setting') }
    }
]
