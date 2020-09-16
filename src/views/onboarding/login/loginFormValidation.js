import * as Yup from 'yup';

export const loginFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Must be email')
    .required('Required field'),

  password: Yup.string().required('Required field'),
});
