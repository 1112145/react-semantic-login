import React, { Component } from 'react';
import { Menu, Sidebar, Responsive, Icon, Image } from 'semantic-ui-react';
import _ from 'lodash';

const NavBarMobile = (props) => {
    return <Sidebar.Pushable>
        <Sidebar as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            items={props.leftItems}
            vertical
            width="wide"
            visible={props.visible} />
        <Sidebar.Pusher
            onClick={props.onPusherClick}
            dimmed={props.visible}
            style={{ minHeight: "100vh" }}>
            <Menu fixed="top" inverted>
                <Menu.Item>
                    <Image size="mini" src={props.logo} />
                </Menu.Item>
                <Menu.Item onClick={props.onToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Menu position="right">
                    {_.map(props.rightItems, item => <Menu.Item {...item} />)}
                </Menu.Menu>
            </Menu>
            {props.children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>;
}

const NavBarDesktop = (props) => {
    return <Menu fixed="top" inverted>
        <Menu.Item>
            <Image size="mini" src={props.logo} />
        </Menu.Item>
        {_.map(props.leftItems, item => <Menu.Item {...item} />)}
        <Menu.Menu position="right">
            {_.map(props.rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
    </Menu>
}

const NavBarChildren = ({ children }) => (
    <div style={{ marginTop: "5em" }}>{children}</div>
);

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    onToggle() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    handlePusherClick() {
        if (this.state.isVisible) {
            this.setState({ isVisible: false });
        }
    }

    render() {
        return (
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        onPusherClick={this.handlePusherClick.bind(this)}
                        leftItems={this.props.leftItems}
                        rightItems={this.props.rightItems}
                        visible={this.state.isVisible}
                        onToggle={this.onToggle.bind(this)} logo={this.props.logo} >
                        <NavBarChildren>{this.props.children}</NavBarChildren>
                    </NavBarMobile>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavBarDesktop leftItems={this.props.leftItems} rightItems={this.props.rightItems} logo={this.props.logo} />
                    <NavBarChildren>{this.props.children}</NavBarChildren>
                </Responsive>
            </div>
        )
    }
}
