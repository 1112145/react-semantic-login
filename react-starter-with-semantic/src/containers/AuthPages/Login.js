import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Icon, Header, Segment, Image, Message } from 'semantic-ui-react';
import { form_msg } from '../../constant';
import { isEmpty, isNotEmpty, isNotEmail, runValidator } from '../../common/customValidator';
import { login } from '../../services/user.service';
import _ from 'lodash';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {}
        }

        this.validator = {
            email: [
                { method: isEmpty, message: form_msg.empty_email },
                { method: isNotEmail, message: form_msg.wrong_email_format }],
            password: [{ method: isEmpty, message: form_msg.empty_password }]
        }
    }

    handleOnClickLogin = () => {
        const { email, password } = this.state;
        const dataObject = { email: email, password: password };
        const error = runValidator(dataObject, this.validator);
        if (!_.isEmpty(error)) {
            this.setState({ error: error })
        } else {
            login({ email: email, password: password }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error.message);
            })
        }
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }

    render() {
        const { error } = this.state;
        return (
            <Grid centered inverted padded>
                <GridColumn computer={4} tablet={10} mobile={16} >
                    <GridRow centered>
                        <br /><Image centered src={this.props.appLogo} size='tiny' />
                        <Header as='h1' textAlign='center'>Log In</Header><br />
                    </GridRow>
                    <GridRow centered>
                        <Form as={Segment} textAlign='center'>
                            <Form.Input name='email' onChange={this.handleChange} icon='at' iconPosition='left' placeholder='Email Address' fluid error={isNotEmpty(error.email)} />
                            <Message visible={isNotEmpty(error.email)} error header={form_msg.invalid_email} content={error.email} />
                            <Form.Input name='password' onChange={this.handleChange} icon='lock' iconPosition='left' placeholder='Password' type='password' fluid error={isNotEmpty(error.password)} />
                            <Message visible={isNotEmpty(error.password)} error header={form_msg.invalid_password} content={error.password} />
                            <Form.Button onClick={this.handleOnClickLogin} fluid color='green'>Log In</Form.Button>
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
