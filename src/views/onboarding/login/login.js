import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { loginRequest } from '../../../services/auth/authService';
import { dashboardRoute } from '../../../shared/routes/routes';
import { withRouter } from 'react-router';

import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import phone from '../../../images/phone.svg';
import avatar from '../../../images/avatar.svg';

import { showMessage } from '../../../services/shared/toastService';
import { GlobalStore } from '../../../store/global-store';
import { loginFormValidation } from './loginFormValidation';

const Login = ({ history }) => {
  const { setUser } = useContext(GlobalStore);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormValidation,
  });

  const onSubmitHandler = async () => {
    try {
      const { data } = await loginRequest(formik.values);
      showMessage(
        'Success',
        'You have succesfully logged in',
        'success',
      );
      setUser(data.user);
      history.push(dashboardRoute());
    } catch (error) {
      showMessage('Warning', `${error}`, 'danger');
    }
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
              text={'Login'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
