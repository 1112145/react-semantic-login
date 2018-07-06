import React, { Component } from 'react';
import { Menu, Sidebar, Responsive, Icon, Image } from 'semantic-ui-react';

const NavBarMobile = (props) => {
  return <Sidebar.Pushable>
    <Sidebar as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={props.leftItems}
      vertical
      visible={props.visible} />
    <Sidebar.Pusher
      onClick={props.onPusherClick}
      style={{ minHeight: "100vh" }}>
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src={props.logo} />
        </Menu.Item>
        <Menu.Item onClick={props.onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
      </Menu>
      {props.children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>;
}

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

  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={this.props.leftItems}
            visible={this.state.isVisible}
            onToggle={this.onToggle.bind(this)} logo={this.props.logo} >
            <span>{this.state.isVisible}</span>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          This is desktop
        </Responsive>

      </div>
    )
  }
}
