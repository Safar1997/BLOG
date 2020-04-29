import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Input, Button, Alert } from 'antd';
import { Formik, Field, Form } from 'formik';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import * as action from '../store/actions';
import 'antd/dist/antd.css';
import * as Yup from 'yup';


const SignUp = () => {

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
            <div className="error" style={{ color: 'red', marginTop: '-10px'}}>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );

  const validSchema = Yup.object({
    username: Yup.string()
      .max(50, 'Must 50 characters or less')
      .required('You must enter Name'),
    password: Yup.string()
      .matches(/^[a-zA-Z0-9]{0,}$/, 'Password have only latin letters and digits')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .max(40, 'Must be 40 characters or less')
      .matches(/[0-9]+/, 'Password must contain at least one digit')
      .matches(/[A-Z]+/, 'Password must contain an one uppercase character')
      .required('You must enter password'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('You must confirm password'),
    email: Yup.string()
      .email('Invalid email address')
      .required('You must enter email'),
  });

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
      }}
      onSubmit={async (values, actions) => {
        dispatch(action.registrAction(values));
        actions.setSubmitting(false);
      }}
      validationSchema={validSchema}
    >
      {(props) => {
        const { isSubmitting } = props;
        return (
          <Form
            onSubmit={props.handleSubmit}
            style={{ margin: '0 auto', width: '300px', marginTop: '200px' }}
          >
            {defaultField('username', 'input', 'input Name', Input, <UserOutlined />)}
            {defaultField('email', 'email', 'input email', Input, <MailOutlined />)}
            {defaultField('password', 'password', 'input password', Input.Password, <LockOutlined />)}
            {defaultField('passwordConfirmation', 'password', 'Confirm password', Input.Password, <LockOutlined />)}
            <div />
            <Button
              disabled={isSubmitting}
              type="primary"
              htmlType="submit"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              Sign Up
            </Button>
            <Link to="/Login"> Login </Link>
            {!isEmpty(errorsApi) && <Alert type="error" message={serverErrors} />}
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUp;