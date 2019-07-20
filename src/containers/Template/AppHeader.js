import React, { Component, Fragment } from 'react'
import { Icon, Menu, Image, Sidebar, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/user.action';
import { browserHistory } from '../../common/helper';
import config from '../../config';


class AppHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSidebar: true
        }
    }

    handleClickLogout = () => {
        this.props.dispatch(logout());
        browserHistory.push('/login');
    }

    toggleSidebar = () => {
        let state = this.state;
        state.showSidebar = !this.state.showSidebar
        this.setState(state);
    }

    handleSidebarHide = () => this.setState({ showSidebar: false })

    render() {
        const { showSidebar } = this.state;
        const { user } = this.props;

        return (
            <Fragment>
                <Menu className='header-menu'>
                    <Menu.Item>
                        <Link to='/'>
                            <Image size="mini" src={config.logo} />
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Header>Semantic React UI</Header>
                    </Menu.Item>
                    <Menu.Item onClick={this.toggleSidebar}>
                        <Icon name='bars' />
                    </Menu.Item>
                    <Menu.Item position="right">
                        <span className='h-pad-1'>Hello, {user['user_name']}! </span>
                        <Icon onClick={() => { this.handleClickLogout() }} name='sign-out' size='large' />
                    </Menu.Item>
                </Menu>
                <div className='app-sidebar'>
                    <Sidebar.Pushable>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            vertical
                            visible={showSidebar}
                            style={{ width: '250px' }}
                            width='thin'
                        >
                            <Menu.Item className='sidebar-item'>
                                <Link to='/user-management'>
                                    <Icon name='users' size='large' />
                                    <div>Users</div>
                                </Link>
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <div className={`content-layout ${showSidebar ? 'collapse' : 'full'}`} >
                                {this.props.children}
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const userData = state.authentication.user ? state.authentication.user.data : {}
    return {
        user: userData 
    }
}

const ConnectedHeader = connect(mapStateToProps)(AppHeader);

export const withHeader = (Component) => (props) => <ConnectedHeader {...props}><Component {...props} /></ConnectedHeader>;

export default ConnectedHeader;
