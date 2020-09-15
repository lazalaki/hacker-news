import { post, patch } from '../httpService'

const authServiceBaseUrl = () => `/auth`;
const registerRequestUrl = () => `${authServiceBaseUrl()}/register`;
const loginRequestUrl = () => `${authServiceBaseUrl()}/login`;
const verificationRequestUrl = () => `${authServiceBaseUrl()}/verification`

export const registerRequest = (body) => post(registerRequestUrl(), body);

export const loginRequest = (body) => post(loginRequestUrl(), body);

export const verificationRequest = (body) => patch(verificationRequestUrl(), body);
