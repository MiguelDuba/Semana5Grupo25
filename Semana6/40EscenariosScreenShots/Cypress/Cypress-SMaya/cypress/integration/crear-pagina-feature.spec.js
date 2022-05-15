//feature Crear página. Escenarios: 2
describe('Feature: Crear página', () => {

    //given I navigate to Ghost page
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(3000)
        cy.screenshot('screenshot-login')

        //And I sign in
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('s.mayav@uniandes.edu.co')
            cy.get('input[name="password"]').type('Q*5S#9iKWaNVkhF')
            cy.get('.login.gh-btn').click()
        })
        cy.wait(3000)
        cy.screenshot('screenshot-inicio')

    })
    
    //escenario 11: Crear una página con contenido
    it('Crear una página', () => {
        
        //when I go to pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-11.1')

        //And I click New page button 
        //Se crea una página
        cy.get('a[href="#/editor/page/"]').first().click()
        cy.wait(2000)
        cy.screenshot('screenshot-11.2')
    
        //And I enter title 'Page de prueba Cypress'
        cy.get('textarea.gh-editor-title').type('Page de prueba Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-11.3')
    
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        cy.screenshot('screenshot-11.4')

        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        cy.screenshot('screenshot-11.5')

        //And I return to the pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-11.6')

    })

    //escenario 12: Crear una página sin contenido
    it('Crear una página sin contenido', () => {

        //when I go to pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-12.1')

        //And I click New page button 
        //Se crea una página
        cy.get('a[href="#/editor/page/"]').first().click()
        cy.wait(2000)
        cy.screenshot('screenshot-12.2')
    
        //And I enter title 'Page de prueba Cypress'
        cy.get('textarea.gh-editor-title').type('Page de prueba Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-12.3')

        //And I erase title 'Page de prueba Cypress'
        cy.get('textarea.gh-editor-title').type('prueba vacia').clear()
        cy.wait(2000)
        cy.screenshot('screenshot-12.4')

        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        cy.screenshot('screenshot-12.5')

        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        cy.screenshot('screenshot-12.6')

        //And I return to the pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-12.7')

        
    })

    
  })