

describe('test login page', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')

    })
    it('should be visible elemets on login page', () => {
        //verify elements on Login page
        cy.contains('Login Page').should('be.visible')
        cy.get('input[id=username]').should('be.visible')
        cy.get('input[id=password]').should('be.visible')
        cy.get('button[type=submit]').should('be.visible')
    })    
    it('should login with correct credential', () => {

        // try login and verify login is successful
        cy.get('input[id=username]')
          .clear()
          .type('tomsmith')
        cy.get('input[id=password]')
          .clear()
          .type('SuperSecretPassword!')
        cy.get('button[type=submit]')
          .click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')  
        cy.get('div[id=flash]').should('be.visible')
        cy.get('.button')
         .should('be.visible')
         .click()
    });
     it('should alert messages appear if click login button without enter credential', () =>{
      cy.get('button[type=submit]')
      .click()
      cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ')
     })
     it('should alert messages appear if click login button without enter password', () => {
      cy.get('input[id=username]')
      .clear()
      .type('tomsmith')
      cy.get('button[type=submit]')
      .click()
      cy.get('#flash').should('have.text', '\n            Your password is invalid!\n            ×\n          ' )
     })
     it('should alert messages appear if click login button without enter username', () => {
      cy.get('input[id=password]')
      .clear()
      .type('SuperSecretPassword!')
      cy.get('button[type=submit]')
      .click()
      cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ') 
     })
     it('should alert messages appear with incorrect username', () => {
      cy.get('input[id=username]')
      .clear()
      .type('Tomsmith')
      cy.get('input[id=password]')
      .clear()
      .type('SuperSecretPassword!')
      cy.get('button[type=submit]')
      .click()
      cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ')
     })
     it('should alert messages appear with incorrect password', () => {
      cy.get('input[id=username]')
      .clear()
      .type('tomsmith')
      cy.get('input[id=password]')
      .clear()
      .type('SuperSecretPassword')
      cy.get('button[type=submit]')
      .click()
      cy.get('#flash').should('have.text', '\n            Your password is invalid!\n            ×\n          ')
     })    
});    