import React from 'react';
import Input from '../../../components/input/input';
import { verificationRequest } from '../../../services/auth/authService';
import Button from '../../../components/button/button';
import { useFormik } from 'formik';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import phone from '../../../images/phone.svg';
import avatar from '../../../images/avatar.svg';
import { verificationFormValidation } from './verificationFormValidation';

import { newRoute } from '../../../shared/routes/routes';
import { showMessage } from '../../../services/shared/toastService';

const Verification = ({ history, location }) => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: verificationFormValidation,
  });

  const onSubmitHandler = async () => {
    const password = formik.values.password;

    const token = queryString.parse(location.search).token;

    const payload = {
      token: token,
      password: password,
    };

    try {
      await verificationRequest(payload);
      showMessage(
        'Success',
        'Yout have succesfully verified your account',
        'success',
      );
      history.push(newRoute());
    } catch (error) {
      console.log(error);
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
              text={'Verify'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Verification);
