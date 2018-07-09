import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Icon, Header, Segment, Image } from 'semantic-ui-react';

export default class Login extends Component {
    render() {
        return (
            <Grid centered inverted>
                <GridColumn computer={4} tablet={10} mobile={16}  >
                    <GridRow centered>
                        <br /><Image centered src='https://www.dirox.net/wp-content/uploads/2017/09/LOGO-DIROX_SMALL.png' size='tiny' />
                        <Header as='h1' textAlign='center'>Log In</Header><br />
                    </GridRow>
                    <GridRow centered>
                        <Form as={Segment} textAlign='center' >
                            <Form.Input icon='at' iconPosition='left' placeholder='Email Address' fluid />
                            <Form.Input icon='lock' iconPosition='left' placeholder='Password' type='password' fluid />
                            <Form.Button fluid color='green'>Log In</Form.Button>
                            <Form.Button fluid color='facebook'><Icon name='facebook' position='left' />Log In with FaceBook</Form.Button>
                            <Form.Button fluid color='google plus'><Icon name='google plus' />Log In with Google+</Form.Button>
                            <a href='/#'>Forgot password?</a>
                        </Form>

                    </GridRow>
                    <GridRow centered>
                        <br />
                        <Header textAlign='center' as='h4'>Dont' have an account?<a href='/#'> Sign up</a></Header>
                    </GridRow>
                </GridColumn>
            </Grid>
        )
    }
}
