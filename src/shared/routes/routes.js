export const onboardingRoute = () => `/onboarding`;
export const dashboardRoute = () => `/dashboard`;
export const homepageRoute = () => `${dashboardRoute()}/new`;
export const loginRoute = () => `${onboardingRoute()}/login`;
export const registerRoute = () => `${onboardingRoute()}/register`;
export const verificationRoute = () =>
  `${onboardingRoute()}/verification`;
