describe('SauceDemo Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Login with standard_user', () => {
    cy.fixture('globalfixture').then((users) => {
      const user = users.standard_user;

      cy.get('#user-name').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#login-button').click();
    });
  });

  it('Login with locked_out_user', () => {
    cy.fixture('globalfixture').then((users) => {
      const user = users.locked_out_user;

      cy.get('#user-name').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#login-button').click();

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'locked out');
    });
  });

  it('Login with problem_user', () => {
    cy.fixture('globalfixture').then((users) => {
      const user = users.problem_user;

      cy.get('#user-name').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#login-button').click();
    });
  });

  it(' Login with performance_glitch_user', () => {
    cy.fixture('globalfixture').then((users) => {
      const user = users.performance_glitch_user;

      cy.get('#user-name').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#login-button').click();
    });
  });

});