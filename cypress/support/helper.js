export function loginViaUI(user) {
    cy.visit('/index.php?rt=account/login');

    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('#loginFrm button').click();

    cy.get('.heading1 .subtext').should('have.text', user.firstName);
}

