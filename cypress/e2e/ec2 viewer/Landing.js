describe('Landing', () => {
  it('Light/Dark mode', () => {
    cy.visit('/');

    cy.get('body').should('have.class', 'chakra-ui-light');

    cy.findByRole('button', {
      name: /Switch to dark mode/i,
    })
      .should('exist')
      .click();

    cy.get('body').should('have.class', 'chakra-ui-dark');

    cy.findByRole('button', {
      name: /Switch to light mode/i,
    })
      .should('exist')
      .click();

    cy.get('body').should('have.class', 'chakra-ui-light');
  });
});
