import { faker } from '@faker-js/faker';

import SignupLoginPage from '../pages/SignupLoginPages';


describe('Automation Exercise - Registration and Login', () => {

    const signupLoginPage = new SignupLoginPage();

    // Generate random user information using Faker

    const firstName = faker.person.firstName();

    const lastName = faker.person.lastName();

    const user = {

        name: `${firstName} ${lastName}`,

        firstName: firstName,

        lastName: lastName,

        email: faker.internet.email({
            firstName,
            lastName
        }).replace('@', `.${faker.string.alphanumeric(8)}@`),

        password: 'Test@12345',

        company: faker.company.name(),

        address: faker.location.streetAddress(),

        address2: faker.location.secondaryAddress(),

        state: faker.location.state(),

        city: faker.location.city(),

        zipcode: faker.location.zipCode('#####'),

        mobile: faker.string.numeric(10)

    };


    // TEST CASE 1: Successful Registration

    it('should register a new user successfully', () => {

        // Visit website
        signupLoginPage.visitSignupLoginPage();

        // Enter signup details
        signupLoginPage.enterSignupDetails(
            user.name,
            user.email
        );

        // Verify account information page
        cy.contains('Enter Account Information')
            .should('be.visible');

        // Fill account information
        signupLoginPage.enterAccountInformation(user);

        // Create account
        signupLoginPage.createAccount();

        // Verify account creation
        signupLoginPage.verifyAccountCreated();

        // Continue
        signupLoginPage.continueAfterRegistration();

        // Verify user is logged in
        signupLoginPage.verifySuccessfulLogin(user.name);

    });


    // TEST CASE 2: Successful Login

    it('should login with the registered user details', () => {

        // Visit website
        signupLoginPage.visitSignupLoginPage();

        // Enter login details
        signupLoginPage.enterLoginDetails(
            user.email,
            user.password
        );

        // Verify successful login
        signupLoginPage.verifySuccessfulLogin(user.name);

    });


    // TEST CASE 3: Invalid Login

    it('should not login with incorrect credentials', () => {

        signupLoginPage.visitSignupLoginPage();

        signupLoginPage.enterLoginDetails(
            faker.internet.email(),
            'WrongPassword123'
        );

        signupLoginPage.verifyInvalidLogin();

    });

});