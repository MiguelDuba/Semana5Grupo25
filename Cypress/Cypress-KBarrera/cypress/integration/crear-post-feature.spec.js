//feature crear Post. Escenarios: 2
describe('Feature: Crear Post', () => {

    //given I navigate to Ghost page
    beforeEach(() => {
        cy.visit('http://localhost:3001/ghost/#/signin')
        cy.wait(3000)

        //And I sign in
        cy.get('form').within(() => {
            cy.get('#ember7').type('admin@ghost.com')
            cy.get('#ember9').type('Krishtian98')
            cy.get('#ember11').click()
        })
        cy.wait(3000)

    })
    
    //escenario 1: Crear Post
    it('Crear un Post', () => {
        
        //when I click on new post
        cy.get('#ember27').click()
        cy.wait(2000)
    
        //I enter title
        cy.get('textarea').type('Post Nuevo con Cypress{enter}' )
        cy.wait(2000)

        //I enter article
        cy.get('article').type('Post Nuevo con Cypress contenido{enter}' )
        cy.wait(2000)
    
        //Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        // Publish2
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)

        // Publish3
        cy.xpath('//button/span[text()="Publish"]').click()
        cy.wait(2000)

        //Return Posts
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('not.exist')

    })

    //escenario 2: Crear post sin contenido ni título
    it('Crear post sin contenido ni título', () => {

        //when I click on new post
        cy.get('#ember27').click()
        cy.wait(2000)
    
        //I enter title
        cy.get('textarea').type('Post Nuevo con Cypress{enter}' )
        cy.wait(2000)

        //I enter article
        cy.get('textarea').clear()
        cy.wait(2000)
    
        //Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        // Publish2
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)

        // Publish3
        cy.xpath('//button/span[text()="Publish"]').click()
        cy.wait(2000)

        //Return Posts
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('exist')

    })

    
  })