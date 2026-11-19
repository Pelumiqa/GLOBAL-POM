import { faker } from '@faker-js/faker';

class AuthPage {
  navigateToHome() {
    cy.visit('https://www.automationexercise.com/');
  }

  clickSignupLoginBtn() {
    cy.get("a[href='/login']").click();
  }

  fillSignupForm() {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    cy.get("input[data-qa='signup-name']").type(randomName);
    cy.get("input[data-qa='signup-email']").type(randomEmail);
    cy.get("button[data-qa='signup-button']").click();

    return { randomName, randomEmail };
  }

  fillAccountDetailsAndRegister() {
    cy.get('#id_gender1').click();
    cy.get('#password').type('Password123');
    cy.get('#days').select('15');
    cy.get('#months').select('July');
    cy.get('#years').select('1995');
    
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#address1').type('123 Main Street');
    cy.get('#country').select('United States');
    cy.get('#state').type('California');
    cy.get('#city').type('Los Angeles');
    cy.get('#zipcode').type('90001');
    cy.get('#mobile_number').type('+1234567890');

    cy.get("button[data-qa='create-account']").click();
  }

  verifyAccountCreated() {
    cy.get("h2[data-qa='account-created']").should('be.visible');
    cy.get("a[data-qa='continue-button']").click();
  }

  logout() {
    cy.get("a[href='/logout']").click();
  }

  fillLoginForm(email, password) {
    cy.get("input[data-qa='login-email']").type(email);
    cy.get("input[data-qa='login-password']").type(password);
    cy.get("button[data-qa='login-button']").click();
  }

  verifyLoggedIn(username) {
    cy.get('body').should('contain', username);
  }
}

export default AuthPage;