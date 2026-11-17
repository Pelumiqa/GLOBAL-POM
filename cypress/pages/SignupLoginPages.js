class SignupLoginPage {

    // Open Signup/Login page
    visitSignupLoginPage() {
        cy.visit('/');

        cy.contains('Signup / Login').click();
    }

    // Registration - Initial signup
    enterSignupDetails(name, email) {

        cy.get('[data-qa="signup-name"]').type(name);

        cy.get('[data-qa="signup-email"]').type(email);

        cy.get('[data-qa="signup-button"]').click();
    }

    // Fill account information
    enterAccountInformation(user) {

        cy.get('#id_gender1').check();

        cy.get('#password').type(user.password);

        cy.get('#days').select('10');

        cy.get('#months').select('5');

        cy.get('#years').select('2000');

        cy.get('#newsletter').check();

        cy.get('#optin').check();

        cy.get('#first_name').type(user.firstName);

        cy.get('#last_name').type(user.lastName);

        cy.get('#company').type(user.company);

        cy.get('#address1').type(user.address);

        cy.get('#address2').type(user.address2);

        cy.get('#country').select('Canada');

        cy.get('#state').type(user.state);

        cy.get('#city').type(user.city);

        cy.get('#zipcode').type(user.zipcode);

        cy.get('#mobile_number').type(user.mobile);
    }

    // Create account
    createAccount() {

        cy.get('[data-qa="create-account"]').click();
    }

    // Verify successful registration
    verifyAccountCreated() {
    cy.get('[data-qa="account-created"]').should('be.visible');
}

    // Continue after registration
    continueAfterRegistration() {

        cy.get('[data-qa="continue-button"]').click();
    }

    // Login
    enterLoginDetails(email, password) {

        cy.get('[data-qa="login-email"]').type(email);

        cy.get('[data-qa="login-password"]').type(password);

        cy.get('[data-qa="login-button"]').click();
    }

    // Verify successful login
    verifySuccessfulLogin(name) {

        cy.contains(`Logged in as ${name}`).should('be.visible');
    }

    // Logout
    logout() {

        cy.contains('Logout').click();
    }

    // Verify unsuccessful login
    verifyInvalidLogin() {

        cy.contains('Your email or password is incorrect!')
            .should('be.visible');
    }

}

export default SignupLoginPage;