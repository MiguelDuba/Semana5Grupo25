//feature crear tag. Escenarios: 3
describe('Feature: Crear Post', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3003/ghost/#/signin')
        cy.wait(5000)

        cy.get('form').within(() => {
            cy.get('#ember7').type('admin@ghost.com')
            cy.get('#ember9').type('Krishtian98')
            cy.get('#ember12').click()
        })
        cy.wait(3000)

    })
    //escenario 3: Crear tag sin nombre no debe de guardarse
    it('crear tag', () => {

        cy.screenshot('actions/CrearTagSinNombre/esc3-1-menuPrincipal')
        //when I click on tags
        cy.get('#ember38').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagSinNombre/esc3-2-Tags')


        //when I Click New tag
        cy.get('.gh-btn-green').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagSinNombre/esc3-3-New Tag')


        //Save
        cy.get('.gh-btn-icon').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagSinNombre/esc3-4-GuardarTag')


        
        //Click en tags
        cy.get('#ember38').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagSinNombre/esc3-5-ListaTags2')


        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('exist')
        cy.wait(2000)
        cy.screenshot('actions/CrearTagSinNombre/esc3-6-EmergenteLeave')


    })

    
    //escenario 4: Crear tag exitoso 
    it('Crear un tag exitoso', () => {
        
        cy.screenshot('actions/CrearTagExitoso/esc4-1-menuPrincipal')
        //when I click on tags
        cy.get('#ember38').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagExitoso/esc4-2-Tags')


        //when I Click New tag
        cy.get('.gh-btn-green').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagExitoso/esc4-3-New Tag')


        //I enter title
        cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('actions/CrearTagExitoso/esc4-4-Dar nombre')


        //I enter article
        cy.get('textarea').type('Descripción Tag para Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('actions/CrearTagExitoso/esc4-5-Dar contenido')

    
        //Save
        cy.get('.gh-btn-icon').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagExitoso/esc4-6-GuardarTag')

        
        //Click en tags
        cy.get('#ember38').click()
        cy.wait(1000)
        cy.screenshot('actions/CrearTagExitoso/esc4-7-ListaTags2')


        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('not.exist')
        cy.screenshot('actions/CrearTagExitoso/esc4-8-EmergenteLeave')

    })

    
    //escenario 5: Corregir tag creado con error debe de guardarse (ERROR Encontrado)
    it('Corregir tag nuevo con error inicial', () => {
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-1-menuPrincipal')
             
        //when I click on tags
        cy.get('#ember38').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-2-Tags')


        //when I Click New tag
        cy.get('.gh-btn-green').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-3-New Tag')

    
        //Save
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-4-GuardarTag')


        //I enter title
        cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-5-Dar nombre')


        //I enter article
        cy.get('textarea').type('Descripción Tag para Cypress{enter}' )
        cy.wait(2000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-6-Dar contenido')


        //click on save
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-7-GuardarTag2')

        
        //Click en tags
        cy.get('#ember38').click()
        cy.wait(2000)
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-8-ListaTags2')


        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('not.exist')
        cy.screenshot('actions/CrearTagCorregirNombre/esc5-9-EmergenteLeave')

    })

  })