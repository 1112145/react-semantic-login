import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader, Dimmer } from 'semantic-ui-react';

class AppLoader extends Component {
    render() {
        return (
            <Dimmer page active={this.props.isLoading} inverted>
                <Loader />
            </Dimmer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.appState.isLoading
    }
}

export default connect(mapStateToProps)(AppLoader);

