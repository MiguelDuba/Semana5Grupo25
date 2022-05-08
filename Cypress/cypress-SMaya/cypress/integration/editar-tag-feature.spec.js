//feature Editar Tag. Escenarios: 3
describe('Feature: Editar Tag', () => {

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
    
    //escenario 13: Editar un tag
    it('Editar un tag', () => {
        
        //when I go to tags list
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(2000)

        //And I click New Tag button 
        //Se crea una Tag
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
    
        //And I enter name 'Tag de prueba Cypress'
        cy.get('#tag-name').type('Tag de prueba Cypress{enter}' )
        cy.wait(2000)
    
        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

        //And I return to the tags list
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(5000)

        //And I click on Edit Tag
        cy.get('a:contains("prueba")').first().click()
        cy.wait(2000)

        //And I enter name "Editar Tag de prueba Cypress"
        cy.get('#tag-name').type(' Editado{enter}' )
        cy.wait(2000)

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

    })

    //escenario 14: Editar un tag sin nombre
    it('Editar un tag sin nombre', () => {

        //when I go to tags list
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(2000)

        //And I click New Tag button 
        //Se crea una Tag
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
    
        //And I enter name 'Tag de prueba2 Cypress'
        cy.get('#tag-name').type('Tag de prueba2 Cypress{enter}' )
        cy.wait(2000)
    
        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

        //And I return to the tags list
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(5000)

        //And I click on Edit Tag
        cy.get('a:contains("prueba")').first().click()
        cy.wait(2000)

        //And I erase Tag name 
        cy.get('#tag-name').clear()
        cy.wait(2000)

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

        

                
    })

    //escenario 15: Corregir un tag editado
    it('Corregir un tag editado', () => {

        //when I go to tags list
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(2000)

        //And I click New Tag button 
        //Se crea una Tag
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
    
        //And I enter name 'Tag de prueba3 Cypress'
        cy.get('#tag-name').type('Tag de prueba3 Cypress{enter}' )
        cy.wait(2000)
    
        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

        //And I return to the tags list
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(5000)

        //And I click on Edit Tag
        cy.get('a:contains("prueba")').first().click()
        cy.wait(2000)

        //And I erase Tag name 
        cy.get('#tag-name').clear()
        cy.wait(3000)

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

        //And I enter name 'Tag de prueba SIN NOMBRE Cypress'
        cy.get('#tag-name').type('Tag de prueba SIN NOMBRE Cypress{enter}' )
        cy.wait(2000)

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)

        

                
    })

    
  })