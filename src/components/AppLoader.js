import React from 'react';
import { connect } from 'react-redux';
import { Loader, Dimmer } from 'semantic-ui-react';

const AppLoader = (props) => {
    return <Dimmer page active={props.isLoading} inverted>
        <Loader />
    </Dimmer>
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.appState.isLoading
    }
}

export default connect(mapStateToProps)(AppLoader);

