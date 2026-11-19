import AuthPage from '../pom2/Authpage';

describe('Automation Exercise - Registration and Login Assignment', () => {
  const authObj = new AuthPage();

  it('Should register with Faker and then login successfully', () => {
    authObj.navigateToHome();
    authObj.clickSignupLoginBtn();

    // 1. Register with Faker generated name and email
    const { randomName, randomEmail } = authObj.fillSignupForm();
    authObj.fillAccountDetailsAndRegister();
    authObj.verifyAccountCreated();

    // 2. Logout to test login flow
    authObj.logout();

    // 3. Login using the newly registered credentials
    authObj.clickSignupLoginBtn();
    authObj.fillLoginForm(randomEmail, 'Password123');
    authObj.verifyLoggedIn(randomName);
  });
});