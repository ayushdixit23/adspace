const EmailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const ValidateSignIn = (email) => {
  const emailRes = EmailRegExp.test(email);
  return emailRes;
};
