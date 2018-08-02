import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Header, Segment, Image, Message } from 'semantic-ui-react';
import { formMsg, localStorageConstant } from '../constant';
import { isEmpty, isNotEmpty, isNotEmail, runValidator } from '../common/customValidator';
import { register } from '../services/user.service';
import _ from 'lodash';
import { connect } from 'react-redux';
import { registerSuccess, registerFailure } from '../actions/user.action';
import config from '../config';
import { browserHistory } from '../common/helper';



class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            error: {},
            serverError: ''
        }

        this.validator = {
            email: [
                { method: isEmpty, message: formMsg.empty_email },
                { method: isNotEmail, message: formMsg.wrong_email_format }],
            password: [{ method: isEmpty, message: formMsg.empty_password }],
            passwordConfirm: [
                { method: isEmpty, message: formMsg.empty_confirm },
                { method: this.isPasswordMissMatch, message: formMsg.password_missmatch }
            ],
        }

    }

    isPasswordMissMatch = (passwordConfirm) => {
        const { password } = this.state;
        return password !== passwordConfirm;
    }

    componentWillMount() {
        if (localStorage.getItem(localStorageConstant.USER)) {
            browserHistory.push('/');
        }
    }

    handleOnClickRegister = () => {
        const { email, password, passwordConfirm } = this.state;
        const dataObject = { email: email, password: password, passwordConfirm: passwordConfirm };
        const error = runValidator(dataObject, this.validator);
        if (_.isEmpty(error)) {
            register({ email: email, password: password }).then(res => {
                this.setState({ serverError: '' });
                if (res.data.access_token) {
                    localStorage.setItem(localStorageConstant.USER, JSON.stringify(res.data.data));
                }
                this.props.dispatch(registerSuccess(res.data));
                browserHistory.push('/');
            }).catch(error => {
                this.setState({ serverError: error.response.data.message });
                this.props.dispatch(registerFailure(error.response.data));
            })
        }
        this.setState({ error: error });

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
                        <br /><Image centered src={config.logo} size='tiny' />
                        <Header as='h1' textAlign='center'>Register</Header><br />
                    </GridRow>
                    <GridRow centered>
                        <Form as={Segment} textAlign='center'>
                            <Form.Input name='email' onChange={this.handleChange} icon='at' iconPosition='left' placeholder='Email Address' fluid error={isNotEmpty(error.email)} />
                            <Message visible={isNotEmpty(error.email)} error header={formMsg.invalid_email} content={error.email} />
                            <Form.Input name='password' onChange={this.handleChange} icon='lock' iconPosition='left' placeholder='Password' type='password' fluid error={isNotEmpty(error.password)} />
                            <Message visible={isNotEmpty(error.password)} error header={formMsg.invalid_password} content={error.password} />
                            <Form.Input name='passwordConfirm' onChange={this.handleChange} icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' fluid error={isNotEmpty(error.passwordConfirm)} />
                            <Message visible={isNotEmpty(error.passwordConfirm)} error header={formMsg.invalid_confirm} content={error.passwordConfirm} />
                            <Form.Button onClick={this.handleOnClickRegister} fluid color='red'>Register</Form.Button>
                            <a href='/login'>Back to Login</a>
                        </Form>
                    </GridRow>
                    <GridRow centered>
                        <br />
                        <Header textAlign='center' color='red' as='h4' visible={this.state.serverError} content={this.state.serverError} />
                    </GridRow>
                </GridColumn>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { authentication: state.authentication }
}

export default connect(mapStateToProps)(RegisterPage);
