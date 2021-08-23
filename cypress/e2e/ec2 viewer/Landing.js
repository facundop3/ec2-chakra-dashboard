describe('Landing', () => {
  it('Loads the homepage', function () {
    // Load the page or perform any other interactions with the app.
    cy.visit('/');

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });

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
