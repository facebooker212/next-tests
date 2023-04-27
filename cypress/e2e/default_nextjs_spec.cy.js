describe('Default Next.js Project', () => {
  beforeEach(() => {
    // Visiting the base URL of your Next.js project
    cy.visit('/');
  });

  it('renders the app correctly', () => {
    // Check if the main heading is rendered
    cy.get('h1').contains('Welcome to Next.js!');

    // Check if the starter links are rendered
    cy.get('a').contains('Documentation').should('have.attr', 'href', 'https://nextjs.org/docs');
    cy.get('a').contains('Learn').should('have.attr', 'href', 'https://nextjs.org/learn');
    cy.get('a').contains('Examples').should('have.attr', 'href', 'https://github.com/vercel/next.js/tree/master/examples');
    cy.get('a').contains('Deploy').should('have.attr', 'href', 'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app');
  });

  it('navigates to the /api/hello page', () => {
    // Visiting the /api/hello page
    cy.visit('/api/hello');

    // Check if the API response is rendered with the expected content
    cy.contains('{"name":"John Doe"}');
  });
});

