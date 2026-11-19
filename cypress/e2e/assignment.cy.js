import { faker } from '@faker-js/faker';
import AuthPage from '../pom/Authpage';

describe('Automation Exercise', () => {
  const auth = new AuthPage();
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const pass = 'Password123!';

  it('should register and login successfully', () => {
    auth.visitHome();
    auth.signup(name, email, pass);
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible');
    cy.contains(name, { timeout: 10000 }).should('be.visible');
    auth.logout();

    auth.visitHome();
    auth.login(email, pass);
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible');
    cy.contains(name, { timeout: 10000 }).should('be.visible');
  });
});