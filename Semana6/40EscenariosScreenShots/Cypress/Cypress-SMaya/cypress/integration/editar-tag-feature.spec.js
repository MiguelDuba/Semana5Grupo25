//feature Editar Tag version 4.41.3. Escenarios: 3
describe('Feature: Editar Tag 4.41.3', () => {

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
    
    //escenario 13: Editar un tag
    it('Editar un tag', () => {
        
        //when I go to tags list
        cy.get('a[href="#/tags/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-13.1')

        //And I click New Tag button 
        //Se crea una Tag
        cy.get('a[href="#/tags/new/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-13.2')
    
        //And I enter name 'Tag de prueba Cypress'
        cy.get('#tag-name').type('Tag de prueba Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-13.3')
    
        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-13.4')

         //And I return to the tags list
         cy.get('a[href="#/tags/"]').first().click()
         cy.wait(5000)
         cy.screenshot('screenshot-13.5')

        //And I click on Edit Tag
        cy.get('a:contains("prueba")').first().click()
        cy.wait(2000)
        cy.screenshot('screenshot-13.6')

        //And I enter name "Editar Tag de prueba Cypress"
        cy.get('#tag-name').type(' Editado{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-13.7')

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-13.8')

    })

    //escenario 14: Editar un tag sin nombre
    it('Editar un tag sin nombre', () => {

        //when I go to tags list
        cy.get('a[href="#/tags/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-14.1')

        //And I click New Tag button 
        //Se crea una Tag
        cy.get('a[href="#/tags/new/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-14.2')
    
        //And I enter name 'Tag de prueba2 Cypress'
        cy.get('#tag-name').type('Tag de prueba2 Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-14.3')
    
        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-14.4')

        //And I return to the tags list
        cy.get('a[href="#/tags/"]').first().click()
        cy.wait(5000)
        cy.screenshot('screenshot-14.5')

        //And I click on Edit Tag
        cy.get('a:contains("prueba")').first().click()
        cy.wait(2000)
        cy.screenshot('screenshot-14.6')

        //And I erase Tag name 
        cy.get('#tag-name').clear()
        cy.wait(2000)
        cy.screenshot('screenshot-14.7')

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-14.8')
                
    })

    //escenario 15: Corregir un tag editado
    it('Corregir un tag editado', () => {

        //when I go to tags list
        cy.get('a[href="#/tags/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-15.1')

        //And I click New Tag button 
        //Se crea una Tag
        cy.get('a[href="#/tags/new/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-15.2')
    
        //And I enter name 'Tag de prueba3 Cypress'
        cy.get('#tag-name').type('Tag de prueba3 Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-15.3')
    
        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-15.4')

        //And I return to the tags list
        cy.get('a[href="#/tags/"]').first().click()
        cy.wait(5000)
        cy.screenshot('screenshot-15.5')

        //And I click on Edit Tag
        cy.get('a:contains("prueba")').first().click()
        cy.wait(2000)
        cy.screenshot('screenshot-15.6')

        //And I erase Tag name 
        cy.get('#tag-name').clear()
        cy.wait(3000)
        cy.screenshot('screenshot-15.7')

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-15.8')

        //And I enter name 'Tag de prueba SIN NOMBRE Cypress'
        cy.get('#tag-name').type('Tag de prueba SIN NOMBRE Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-15.9')

        //And I click Save
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        cy.screenshot('screenshot-15.10')

    })

  })


