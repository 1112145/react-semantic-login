import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Header, Segment, Image, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { formMsg, localStorageConstant } from '../../constant';
import { isEmpty, isNotEmpty, isNotEmail, validate } from '../../common/customValidator';
import { login } from '../../services/user.service';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/user.action';
import config from '../../config';
import { browserHistory } from '../../common/helper';



class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {}
        }

        this.validator = {
            email: [
                { method: isEmpty, message: formMsg.empty_email },
                { method: isNotEmail, message: formMsg.wrong_email_format }],
            password: [{ method: isEmpty, message: formMsg.empty_password }]
        }

        this.serverError = '';

    }

    componentWillMount() {
        if (localStorage.getItem(localStorageConstant.USER)) {
            browserHistory.push('/');
        }
    }

    handleOnClickLogin = () => {
        const { email, password } = this.state;
        const dataObject = { email: email, password: password };
        this.serverError = '';

        const error = validate(dataObject, this.validator);
        if (_.isEmpty(error)) {

            login({ email: email, password: password }).then(res => {
                this.setState({ serverError: '' });
                if (res.data.access_token) {
                    localStorage.setItem(localStorageConstant.USER, JSON.stringify(res.data));
                }
                this.props.dispatch(loginSuccess(res.data));
                browserHistory.push('/');
            }).catch(err => {
                if (err.response) {
                    this.serverError = err.response.data.message;
                    this.props.dispatch(loginFailure(err.response.data));
                }

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
                        <Header as='h1' textAlign='center'>Log In</Header><br />
                    </GridRow>
                    <GridRow centered>
                        <Form as={Segment} textAlign='center'>
                            <Form.Input name='email' onChange={this.handleChange} icon='at' iconPosition='left' placeholder='Email Address' fluid error={isNotEmpty(error.email)} />
                            <Message visible={isNotEmpty(error.email)} error header={formMsg.invalid_email} content={error.email} />
                            <Form.Input name='password' onChange={this.handleChange} icon='lock' iconPosition='left' placeholder='Password' type='password' fluid error={isNotEmpty(error.password)} />
                            <Message visible={isNotEmpty(error.password)} error header={formMsg.invalid_password} content={error.password} />
                            <Message visible={this.serverError !== ''} error content={this.serverError} />
                            <Form.Button onClick={this.handleOnClickLogin} fluid color='green'>Log In</Form.Button>
                            <Link to='/forgot-password'>Forgot password?</Link>
                        </Form>
                    </GridRow>
                    <GridRow centered>
                        <br />
                        <Header textAlign='center' color='red' as='h4' visible={this.state.serverError} content={this.state.serverError} />
                        <Header textAlign='center' as='h4'>Dont' have an account?<Link to='/register'> Register</Link></Header>
                    </GridRow>
                </GridColumn>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { authentication: state.authentication }
}

export default connect(mapStateToProps)(LoginPage);
