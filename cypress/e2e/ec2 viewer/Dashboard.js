describe('Landing', () => {
  it('Light/Dark mode', () => {
    cy.visit('/');
    cy.loginByAuth0Api(
      Cypress.env('auth0_username'),
      Cypress.env('auth0_password')
    );

    cy.findByText(/loading.../i).should('exist');

    cy.get('table', { timeout: 10000 }).should('exist');
  });
});
