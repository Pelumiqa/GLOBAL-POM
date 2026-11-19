import SignupLoginPages from '../pages/SignupLoginPages';

describe('Assignment 2: Registration and Login Automation', () => {

    it('Register new user', () => {
        SignupLoginPages.visit();
        
        // Execute registration flow
        SignupLoginPages.initiateSignup();
        SignupLoginPages.fillAccountDetails();
        SignupLoginPages.verifyAccountCreated();
        
        // Verify registration success (lands on home page logged in)
        SignupLoginPages.verifySuccessfulLogin(SignupLoginPages.userData.name);
    });

    it('Login into account', () => {
        SignupLoginPages.visit();
        
      
        const testEmail = SignupLoginPages.userData.email;
        const testPassword = SignupLoginPages.userData.password;

        // Execute login flow independently
        SignupLoginPages.loginUser(testEmail, testPassword);
        
        // Verify login success
        SignupLoginPages.verifySuccessfulLogin(SignupLoginPages.userData.name);
    });

});