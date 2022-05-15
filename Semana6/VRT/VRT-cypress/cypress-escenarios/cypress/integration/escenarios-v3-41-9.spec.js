//Escenarios v3.41.9
describe('Escenarios v3.41.9', () => {

    //given I navigate to Ghost page
    beforeEach(() => {
        cy.visit('http://localhost:3002/ghost/#signin')
        cy.wait(3000)

        //And I sign in
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('sg.ramirez940@uniandes.edu.co')
            cy.get('input[name="password"]').type('UniandesMisw2022')
            cy.get('.login.gh-btn').click()
        })
        cy.wait(3000)

    })

    //escenario 1: Crear Post
    it('Crear un Post', () => {
        cy.screenshot('screenshot-1-1')
        //when I click on new post
        cy.get('.gh-nav-new-post').click()
        cy.wait(2000)
        cy.screenshot('screenshot-1-2')
    
        //I enter title
        cy.get('textarea.gh-editor-title').type('Post Nuevo con Cypress{enter}')
        cy.wait(2000)
        cy.screenshot('screenshot-1-3')


        //I enter article
        cy.get('article').type('Post Nuevo con Cypress contenido{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-1-4')

    
        //Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        cy.screenshot('screenshot-1-5')

        // Publish2
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        cy.screenshot('screenshot-1-6')


        // Publish3
        //dado que este paso existe en la otra versión pero en esta no, se toma una pantallazo adicional
        cy.wait(2000)
        cy.screenshot('screenshot-1-7') 

        //Return Posts
        cy.get('a[href="#/posts/"]').first().click()
        cy.wait(2000)
        cy.screenshot('screenshot-1-8')

        //Verificar Guardado
        cy.get('.posts-list').should('exist')


    })
    
    
    //escenario 7: editar una página y salir sin guardar
    it('escenario 7: Editar una página sin guardar', () => {
        
        //when I go to pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-1')

        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('a[href="#/editor/page/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-2')
    
        //And I enter title 'Página nueva para editar'
        cy.get('textarea.gh-editor-title').type('Página nueva para editar{enter}' )
        cy.wait(2000)
        cy.screenshot('screenshot-7-3')
    
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-4')
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-5')
        //And I return to the pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-6')

        //and I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-7')
        //And I enter content 'Contenido para no guardar'
        cy.get('article>div:nth-child(1)>div').type('Contenido para no guardar')
        cy.wait(2000)
        cy.screenshot('screenshot-7-8')

        //And I click button to return to the pages list
        cy.get('a[href="#/pages/"]').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-9')

        //And I confirm to leave the page
        cy.get('.gh-btn-red').click()
        cy.wait(2000)
        cy.screenshot('screenshot-7-10')

        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')

    })

    //escenario 8: cambiar la contraseña con un valor de verificación de contraseña diferente al valor de la contraseña nueva
    it('escenario 8: Cambiar contraseña con valores diferentes en contraseña nueva y verificación de contraseña', () => {
        
        //when I go to user profile
        cy.visit("http://localhost:3002/ghost/#/staff/sara")
        cy.wait(2000)
        cy.screenshot('screenshot-8.1')
    
        //And I enter old password
        cy.get('#user-password-old').type('UniandesMisw2022' )
        cy.wait(2000)
        cy.screenshot('screenshot-8.2')

        //And I enter new password
        cy.get('#user-password-new').type('UniandesMisw2022nueva' )
        cy.wait(2000)
        cy.screenshot('screenshot-8.3')

        //And I confirm new password
        cy.get('#user-new-password-verification').type('UniandesMisw2022diferente' )
        cy.wait(2000)
        cy.screenshot('screenshot-8.4')
    
        //And I click Change Password button
        cy.get('.button-change-password').click()
        cy.wait(2000)
        cy.screenshot('screenshot-8.5')

        //Then I expect to not be able to save the new password
        cy.get('.error>.response').should('exist')

    })

    //escenario 13: Editar un tag
    it('escenario 13: Editar un tag', () => {
        
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
        cy.get('.gh-btn.gh-btn-blue').click()
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
        cy.get('.gh-btn.gh-btn-blue').click()
        cy.wait(2000)
        cy.screenshot('screenshot-13.8')

    })

    //Escenario 17: Regresar evitando guardar un post editado
    it("Escenario 17: Regresar evitando guardar un post editado", () => {

        cy.visit("http://localhost:3002/ghost/#/posts");
        cy.wait(2000)
        cy.screenshot('screenshot-17.1');
    
        cy.get("li.gh-posts-list-item").first().click();
        cy.wait(2000)
        cy.screenshot('screenshot-17.2');
    
        cy.get("textarea").get(".gh-editor-title").clear();
        cy.wait(2000)
        cy.screenshot('screenshot-17.3');
    
        cy.get("article").click();
        cy.wait(1500);
        cy.screenshot('screenshot-17.4');
    
        cy.get("body").type("{esc}");
        cy.wait(2000)
        cy.screenshot('screenshot-17.5');
    
        cy.wait(1500);
        
        cy.url().should("eq", "http://localhost:3002/ghost/#/posts");
        
      });

    
  })