//feature Crear página. Escenarios: 2
describe('Feature: Crear página', () => {

    //given I navigate to Ghost page
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(3000)

        //And I sign in
        cy.get('form').within(() => {
            cy.get('#ember7').type('s.mayav@uniandes.edu.co')
            cy.get('#ember9').type('Q*5S#9iKWaNVkhF')
            cy.get('#ember11').click()
        })
        cy.wait(3000)

    })
    
    //escenario 11: Crear una página con contenido
    it('Crear una página', () => {
        
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)

        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
    
        //And I enter title 'Page de prueba Cypress'
        cy.get('textarea').type('Page de prueba Cypress{enter}' )
        cy.wait(2000)
    
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

    })

    //escenario 12: Crear una página sin contenido
    it('Crear una página sin contenido', () => {

        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)

        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
    
        //And I enter title 'Page de prueba Cypress'
        cy.get('textarea').type('Page de prueba Cypress{enter}' )
        cy.wait(2000)

        //And I erase title 'Page de prueba Cypress'
        cy.get('textarea').type('prueba vacia').clear()
        cy.wait(2000)

        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)

        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)

        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

        
    })

    
  })