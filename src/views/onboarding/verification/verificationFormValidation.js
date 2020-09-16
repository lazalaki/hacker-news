import * as Yup from 'yup';

export const verificationFormValidation = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password to short')
    .required('Required field'),
});
