import React, { Component } from 'react'
import NavBar from '../components/NavBar';

import config from '../config';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout } from '../actions/user.action';
import { browserHistory } from '../common/helper';
import { sidebarMenu } from '../common/helper';

class AppHeader extends Component {

    rightItems = [
        { content: <Button onClick={() => { this.handleClickLogout() }} color='red'><Icon name='power off' />Log Out</Button>, key: 'logout' }
    ]

    leftItems = sidebarMenu;

    handleClickLogout = () => {
        this.props.dispatch(logout());
        browserHistory.push('/login');
    }

    render() {
        return (
            <NavBar logo={config.logo} leftItems={this.leftItems} rightItems={this.rightItems}>
                {this.props.children}
            </NavBar>
        )
    }
}

const ConnectedHeader = connect()(AppHeader);

export const withHeader = (Component) => () => <ConnectedHeader><Component /></ConnectedHeader>;

export default ConnectedHeader;
