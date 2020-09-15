import React from 'react';
import { useFormik } from 'formik';
import { loginRequest } from '../../../services/auth/authService';
import { dashboardRoute } from '../../../shared/routes/routes';
import { withRouter } from 'react-router';

import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import wave from '../../../images/wave.png';
import phone from '../../../images/phone.svg';
import avatar from '../../../images/avatar.svg';
import './login.scss';

const Login = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler = async () => {
    try {
      await loginRequest(formik.values);
      history.push(dashboardRoute());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img className="wave" src={wave} alt="Wave" />
      <div className="container">
        <div className="img">
          <img className="img__phone" src={phone} alt="Phone" />
        </div>
        <div className="register">
          <div className="register__header">
            <img
              className="register__avatar"
              src={avatar}
              alt="Avatar"
            />
            <h2>Welcome</h2>
          </div>
          <div className="register__form">
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
              isDirty={formik.dirty}
              placeholder={'Your Password'}
            />

            <Button
              disabled={!formik.isValid}
              onClick={onSubmitHandler}
              text={'Login'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
