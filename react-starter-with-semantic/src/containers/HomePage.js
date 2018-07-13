import React, { Component } from 'react';
import { withHeader } from './AppHeader';

class HomePage extends Component {
    render() {
        return (
            <div>
                This is Home Page
            </div>
        )
    }
}

export default withHeader(HomePage);