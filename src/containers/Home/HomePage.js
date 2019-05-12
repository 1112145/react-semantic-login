import React from 'react';
import { withHeader } from '../Template/AppHeader';

const HomePage = () => {
    return (
        <div>
            This is Home Page
        </div>
    )
}

export default withHeader(HomePage);