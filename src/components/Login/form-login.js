import React, {useState} from 'react';
import {
    WrapperLoginForm,
    WrapperTitles,
    LoginTitle,
    LoginSubtitle,
} from './style';
import {Form, Input, Button, message} from 'antd';
import {LoginService} from '../../api/login';
import {setUserSession} from '../../utils/auth';

message.config({
    duration: 3,
});

const tailLayout = {
    wrapperCol: {
        span: 24,
    },
};

const layout = {
    wrapperCol: {span: 24},
};

const showMessage = (type) => {
    switch (type) {
        case 'error': {
            message.error(
                'Something is wrong! Check your credencials and try again, please!'
            );
            break;
        }
        case 'success': {
            message.success('You are welcome! Please, enjoy the app!');
            break;
        }
        default: {
            message.warning('Type was not defined.');
        }
    }
};

const LoginForm = (props) => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        const email = values.email.trim();
        const password = values.password.trim();
        setLoading(true);

        try {
            const loginResponse = await LoginService.logIn(email, password);
            if (loginResponse.success) {
                setUserSession(loginResponse);
                props.redirectUser();
                showMessage('success');
            }
        } catch (error) {
            showMessage('error');
        }

        setLoading(false);
    };

    return (
        <div>
            <WrapperTitles>
                <LoginTitle>How many people have your country?</LoginTitle>
                <LoginSubtitle>Try to answer it signing up:</LoginSubtitle>
            </WrapperTitles>
            <WrapperLoginForm>
                <Form
                    {...layout}
                    layout={'vertical'}
                    hideRequiredMark={true}
                    name="login"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your e-mail/username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button
                            style={{
                                background: '#00AC07',
                                width: '100%',
                                fontFamily: 'Sans-serif',
                            }}
                            loading={loading}
                            type="primary"
                            htmlType="submit"
                        >
                            LOG IN
                        </Button>
                    </Form.Item>
                </Form>
            </WrapperLoginForm>
        </div>
    );
};

export default LoginForm;
