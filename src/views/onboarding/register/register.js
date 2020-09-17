import React from 'react';
import { useFormik } from 'formik';
import Input from '../../../components/input/input';

import Button from '../../../components/button/button';
import { registerRequest } from '../../../services/auth/authService';
import { withRouter } from 'react-router';
import { loginRoute } from '../../../shared/routes/routes';
import { registerFormValidation } from './registerFormValidation';
import phone from '../../../images/phone.svg';
import avatar from '../../../images/avatar.svg';
import { showMessage } from '../../../services/shared/toastService';

const Register = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerFormValidation,
  });

  const onSubmitHandler = async () => {
    try {
      await registerRequest(formik.values);
      showMessage(
        'Success',
        'Please go to your email to confrim account',
        'success',
      );
      history.push(loginRoute());
    } catch (error) {}
  };

  return (
    <>
      <div className="container">
        <div className="img">
          <img className="img__phone" src={phone} alt="Phone" />
        </div>
        <div className="form">
          <div className="form__header">
            <img className="form__avatar" src={avatar} alt="Avatar" />
            <h2>Welcome</h2>
          </div>
          <div className="form__form">
            <Input
              type={'text'}
              id={'name'}
              name={'name'}
              forName={'name'}
              text={'Enter Your Name'}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors}
              placeholder={'Your Name'}
            />

            <Input
              type={'email'}
              id={'email'}
              name={'email'}
              forName={'email'}
              text={'Enter Your Email'}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors}
              placeholder={'Your Email'}
            />

            <Input
              type={'password'}
              id={'password'}
              name={'password'}
              forName={'password'}
              text={'Enter Your Password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors}
              placeholder={'Your Password'}
            />

            <Button
              disabled={!formik.dirty || !formik.isValid}
              onClick={onSubmitHandler}
              text={'Register'}
            />
          </div>
        </div>
      </div>
      {/* <div className="form">
          <div className="form__picture"></div>
          <div className="form__box">
            <Input
              type={'text'}
              id={'name'}
              name={'name'}
              forName={'name'}
              text={'Enter Your Name'}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors}
              isDirty={formik.dirty}
            />

            <Input
              type={'email'}
              id={'email'}
              name={'email'}
              forName={'email'}
              text={'Enter Your Email'}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors}
              isDirty={formik.dirty}
            />

            <Input
              type={'password'}
              id={'password'}
              name={'password'}
              forName={'password'}
              text={'Enter Your Password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors}
              isDirty={formik.dirty}
            />

            <Button
              disabled={!formik.isValid}
              onClick={onSubmitHandler}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default withRouter(Register);
