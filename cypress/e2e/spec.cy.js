

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Masukan Email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')
      .type('123456').should('have.value', '123456')   
    
    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
          .should('be.visible')
          cy.get('div.sidebar')
          .should('be.visible') 
    
    cy.get('[data-testid="users"]').click()
    
    cy.url().should('include', '/users')
    
    cy.get('div.datatableTitle').contains('USERS')

    cy.get('[data-testid="categories"]').click()
    
    cy.url().should('include', '/categories')

    cy.get('div.widget')
          .should('be.visible')
          cy.get('div.myDatatable')
          .should('be.visible') 

    cy.get('[data-testid="add-new"]').click()

    cy.get('input#name')
    .should('be.visible')
    .should('have.attr', 'placeholder', 'Coffee')

    .type('Dessert').should('have.value', 'Dessert')
    
    cy.get('[data-testid="send"]').click()
    cy.contains('Dessert',{ timeout: 6000 }).parent().find('.deleteButton').click();
    
    cy.get('Dessert').should('not.exist');
    cy.reload();



  })
    

})