export const onboardingRoute = () => `/onboarding`;
export const dashboardRoute = () => `/dashboard`;
export const homepageRoute = () => `${dashboardRoute()}/home`;
export const loginRoute = () => `${onboardingRoute()}/login`;
export const registerRoute = () => `${onboardingRoute()}/register`;
export const verificationRoute = () =>
  `${onboardingRoute()}/verification`;
