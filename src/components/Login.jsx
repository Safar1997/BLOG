import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Input, Button, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import * as Yup from 'yup';
import * as action from '../store/actions';

const Login = () => {
  const { errors: errorsApi } = useSelector(state => state);
  const serverErrors = Object.keys(errorsApi).reduce((acc, cur) => {
    return `${acc}\n${cur}: ${errorsApi[cur].join(',')}`;
  }, '');
  const dispatch = useDispatch();
  const defaultField = (name, type, placeholder, Type, Prefix) => (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        meta,
      }) => (
        <div>
          <Type
            prefix={Prefix}
            type={type}
            placeholder={placeholder}
            {...field}
            style={{ marginBottom: '10px' }}
          />
          {meta.touched && meta.error && (
            <div className="error" style={{ color: 'red', marginTop: '-10px' }}>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
        loged: false,
      }}
      onSubmit={(values, actions) => {
        dispatch(action.loginAction(values));
        actions.setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {(props) => {
        const { isSubmitting } = props;
        return (
          <Form onSubmit={props.handleSubmit} style={{ margin: '0 auto', width: '300px', marginTop: '200px' }}>
            {defaultField('email', 'email', 'input email', Input, <MailOutlined />)}
            {defaultField('password', 'password', 'input password', Input.Password, <LockOutlined />)}
            <div />
            <Button
              disabled={isSubmitting}
              type="primary"
              htmlType="submit"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              Log in
            </Button>
            <Link to="/SignUp">
              SignUp
            </Link>
            {!isEmpty(errorsApi) && <Alert type="error" message={serverErrors} />}
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;