import React from "react";
import { Button, Input, Form, Tag } from "antd";
import { withFormik, Form as FormikForm, Field as FormikField, FieldArray } from "formik";
import * as Yup from 'yup';
import { FileTextFilled, FormOutlined } from '@ant-design/icons';

import * as _ from 'lodash';

const FormItem = Form.Item;

const InnerForm = ({
  props,
  values,
  errors,
  touched,
  isSubmitting,
  handleSubmit,
}) => {
  const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const colors = [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ];
  const inputTagRef = React.createRef();
  return (
    <FormikForm onSubmit={handleSubmit} style={{ margin: '0 auto', width: '500px' }}>
      <FormItem 
        validateStatus={touched.title && errors.title ? 'error' : null}
        help={touched.title && errors.title ? errors.title : null}
      >
        <FormikField name="title">
            {({
              field, // { name, value, onChange, onBlur }
              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                  <Input prefix={<FileTextFilled />} type="text" placeholder="Input title" {...field} />
              </div>
            )}
        </FormikField>
      </FormItem>
      <FormItem
        validateStatus={touched.description && errors.description ? 'error' : null}
        help={touched.description && errors.description ? errors.description : null}
      >
        <FormikField name="description">
            {({
              field, // { name, value, onChange, onBlur }
              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                  <Input prefix={<FormOutlined />} type="text" placeholder="Input description" {...field} />
              </div>
            )}
        </FormikField>
      </FormItem>
      <FormItem
        validateStatus={touched.body && errors.body ? 'error' : null}
        help={touched.body && errors.body ? errors.body : null}
      >
        <FormikField name="body">
            {({
              field, // { name, value, onChange, onBlur }
              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                  <Input.TextArea autoSize={{ minRows: 8, maxRows: 8 }} type="text" placeholder="Input body" {...field} />
              </div>
            )}
        </FormikField>
      </FormItem>
      <Form.Item
            validateStatus={touched.tagList && errors.tagList ? 'error' : null}
            help={touched.tagList && errors.tagList ? errors.tagList : null}
          >
        <FieldArray
            name="tagList"
            render={({ remove, push }) => {
            const tags =
              values.tagList &&
              values.tagList.map((tag, index) => (
              <Tag
                color={colors[randomNumber(1, 11)]}
                style={{marginBottom: '10px', float: 'left'}}
                key={_.uniqueId()}
                closable
                name={`tagList[${index}]`}
                onClose={() => remove(index)}
              >
                {tag}
              </Tag>
            ));
            return (
                <div>
                {tags}
                <Input ref={inputTagRef} />
                <Button
                    type="primary"
                    style={{marginTop: '20px', float: 'left'}}
                    onClick={() => {
                    push(inputTagRef.current.state.value);
                    inputTagRef.current.state.value = '';
                    }}
                >
                    Добавить тег
                </Button>
                </div>
            );
            }}
        />
        </Form.Item>
      <FormItem>
        <Button
          htmlType="submit"
          type="primary"
          disabled={isSubmitting}
          style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }}
        >
          Save changes
        </Button>
      </FormItem>
    </FormikForm>
  );
};

const MyFormikForm = withFormik({
  mapPropsToValues({ initialValues = {}, title, description, body, tagList }) {
    return {
      title: initialValues.title || title || '',
      description: initialValues.description || description || '',
      body: initialValues.body || body || '',
      tagList: initialValues.tagList || tagList || [],
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    body: Yup.string().required('Body is required'),
    tagList: Yup.array()
      .of(Yup.string().required('Enter a tagname'))
      .min(1, 'Must be minimum one tag'),
  }),

  handleSubmit( values, actions) {
    const { props, setSubmitting } = actions;
    props.actionToDispatch(values);
    setSubmitting(false);
  }
})(InnerForm);

export default MyFormikForm;

