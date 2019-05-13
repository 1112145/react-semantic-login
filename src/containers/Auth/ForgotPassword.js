import React from 'react'
import { Grid, GridRow, GridColumn, Form, Header, Segment, Image, Container } from 'semantic-ui-react';
import config from '../../config';

const ForgotPassword = (props) => {
    return <Grid centered inverted padded>
    <GridColumn computer={4} tablet={10} mobile={16} >
        <GridRow centered>
            <br /><Image centered src={config.logo} size='tiny' />
            <Header as='h1' textAlign='center'>Forgot Password?</Header><br />
            <Container >
                Please enter your email. We will send you a password reset link.
            </Container>
            <br/>
        </GridRow>
        <GridRow centered>
            <Form as={Segment} textAlign='center'>
                <Form.Input name='email' icon='at' iconPosition='left' placeholder='Email Address' fluid />
                <Form.Button fluid color='blue'>Send email to reset password</Form.Button>
            </Form>
        </GridRow>
        <GridRow centered>
            <br />
            <Header textAlign='center' as='h4'><a href='/login'> Back to login</a></Header>
        </GridRow>
    </GridColumn>
</Grid>
}

export default ForgotPassword;