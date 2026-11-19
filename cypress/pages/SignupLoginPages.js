import { faker } from '@faker-js/faker';

class SignupLoginPages {
    // Generate random user details using Faker
    userData = {
        name: faker.person ? faker.person.fullName() : faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };

    visit() {
        cy.visit('https://automationexercise.com/login');
    }

    // --- Register Flow Methods ---
    initiateSignup() {
        cy.get('[data-qa="signup-name"]').type(this.userData.name);
        cy.get('[data-qa="signup-email"]').type(this.userData.email);
        cy.get('[data-qa="signup-button"]').click();
    }

    fillAccountDetails() {
        cy.get('#id_gender1').click();
        cy.get('[data-qa="password"]').type(this.userData.password);
        cy.get('[data-qa="days"]').select('10');
        cy.get('[data-qa="months"]').select('June');
        cy.get('[data-qa="years"]').select('1995');

        cy.get('#newsletter').check();
        cy.get('#optin').check();

        cy.get('[data-qa="first_name"]').type(this.userData.name.split(' ')[0]);
        cy.get('[data-qa="last_name"]').type(this.userData.name.split(' ')[1] || 'Test');
        cy.get('[data-qa="company"]').type('QA Testing Inc.');
        cy.get('[data-qa="address"]').type('123 Automation St');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('1234567890');

        cy.get('[data-qa="create-account"]').click();
    }

    verifyAccountCreated() {
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }

    // --- Login Flow Methods ---
    loginUser(email, password) {
        cy.get('[data-qa="login-email"]').type(email);
        cy.get('[data-qa="login-password"]').type(password);
        cy.get('[data-qa="login-button"]').click();
    }

    // --- Verifications ---
    verifySuccessfulLogin(name) {
        cy.url().should('include', '/');
        cy.contains(`Logged in as ${name}`, { timeout: 10000 }).should('be.visible');
    }
}

export default new SignupLoginPages();