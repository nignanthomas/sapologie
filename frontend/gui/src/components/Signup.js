import React from 'react';
import { Form, Input, Icon, Button, Spin } from 'antd';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import * as actions from '../store/actions/auth';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            this.props.onAuth(
                values.userName,
                values.email,
                values.password,
                values.confirm)
        }
        });
        this.props.history.push('/')
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
        } else {
        callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
        }
        callback();
    }


    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }


        const { getFieldDecorator } = this.props.form;

        return (
            <div>
            {errorMessage}
            {
                this.props.loading ?
                <Spin indicator={antIcon} />

                :
                <Form className="col-10 mx-auto col-md-6 col-lg-3 text-center my-4 border rounded px-2 py-2 border-dark" onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>

                    <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                        required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                    </Form.Item>

                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{
                        required: true, message: 'Please input your password!',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </Form.Item>

                    <Form.Item>
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: 'Please confirm your password!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
                    )}
                    </Form.Item>

                    <div className="text-center mx-auto">
                    <Form.Item>
                            <Button type="primary"  htmlType="submit" style={{marginRight: '10px'}}>
                                Signup
                            </Button>
                            Or {" "}
                            <NavLink style={{marginRight: '10px'}} to="/login">
                                Login
                            </NavLink>
                    </Form.Item>
                    </div>
                </Form>
        }
        </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);


const mapStateToProps = (state) =>{
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm));
