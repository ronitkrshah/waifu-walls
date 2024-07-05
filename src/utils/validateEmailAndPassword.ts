const EMAIL_REGEX =
  /^(?!.*\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function validateEmailAndPassword(email: string, password: string) {
  const returnObj = {
    emailVerified: false,
    passwordVerified: false,
  };

  if (email) {
    const verfiedEmail = email.match(EMAIL_REGEX);
    if (verfiedEmail) {
      returnObj.emailVerified = true;
    }
  }

  if (password.length > 8) {
    returnObj.passwordVerified = true;
  }

  return returnObj;
}
