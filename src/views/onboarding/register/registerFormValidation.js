import * as Yup from 'yup';

export const registerFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(4, 'To short name')
    .max(15, 'To long name')
    .required('Required field'),

  email: Yup.string()
    .email('Must be email')
    .required('Required field'),

  password: Yup.string()
    .min(6, 'To short name')
    .max(15, 'To long name')
    .required('Required field'),
});
