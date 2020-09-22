export const onboardingRoute = () => `/onboarding`;
export const dashboardRoute = () => `/dashboard`;
export const newRoute = () => `${dashboardRoute()}/new`;
export const loginRoute = () => `${onboardingRoute()}/login`;
export const registerRoute = () => `${onboardingRoute()}/register`;
export const verificationRoute = () =>
  `${onboardingRoute()}/verification`;
export const commentsRoute = (id) => `${dashboardRoute()}/comments`;
