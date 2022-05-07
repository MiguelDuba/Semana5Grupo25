//feature editar página. Escenarios: 2
describe('Feature: Editar página', () => {

    //given I navigate to Ghost page
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(3000)

        //And I sign in
        cy.get('form').within(() => {
            cy.get('#ember7').type('sg.ramirez940@uniandes.edu.co')
            cy.get('#ember9').type('UniandesMisw2022')
            cy.get('#ember11').click()
        })
        cy.wait(3000)

    })
    
    //escenario 1: editar una página
    it('Editar una página', () => {
        
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)

        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
    
        //And I enter title 'Página nueva para editar'
        cy.get('textarea').type('Página nueva para editar{enter}' )
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

        //And I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I enter content 'Contenido para guardar'
        cy.get('article>div:nth-child(1)>div').type('Nuevo contenido para guardar')
        cy.wait(2000)

        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)

        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')

    })

    //escenario 2: editar una página y salir sin guardar
    it('Editar una página sin guardar', () => {

        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)

        //and I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I enter content 'Contenido para no guardar'
        cy.get('article>div:nth-child(1)>div').type('Contenido para no guardar')
        cy.wait(2000)

        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

        //And I confirm to leave the page
        cy.get('.gh-btn-red').click()
        cy.wait(2000)

        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')

    })

    
  })