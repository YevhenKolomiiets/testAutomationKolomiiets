beforeEach(() => {
    cy.visit('/');
    cy.get('#customer_menu_top').click();
})

it('Login', () => {
    cy.get('#loginFrm_loginname').type('Client');
    cy.get('#loginFrm_password').type('Password');
    cy.get('[title="Login"]').click();
    cy.get('.alert-error').should('contain', 'Error: Incorrect login or password provided.');
})

it('Forgot password', () => {
    cy.get('div + a').click();
    cy.get('.maintext').should('contain', 'Forgot Your Password?')
})

it('Forgot login', () => {
    cy.get('div + a + a').click();
    cy.get('.maintext').should('contain', 'Forgot Your Login Name')
})