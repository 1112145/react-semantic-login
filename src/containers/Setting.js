import React, { Component } from 'react'
import { withHeader } from './AppHeader';

class Setting extends Component {
    render() {
        return (
            <div>
                This is setting page
            </div>
        )
    }
}

export default withHeader(Setting);
