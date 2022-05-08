describe('Test sobre miembro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(1500)

        //And I sign in
        cy.get('form').within(() => {
            cy.get('#ember7').type('test@test.com')
            cy.get('#ember9').type('12345678910')
            cy.get('#ember11').click()
        })
        cy.wait(1500)

    })

    it('Crear miembro', () => {

        const number = Math.random();
    
        cy.visit('http://localhost:2368/ghost/#/members')
    
        cy.get('.gh-btn-primary').click()
        cy.wait(1500)
    
        cy.get('#member-name').click()
        cy.get('body').type('Miembro '+ number)
    
        cy.get('#member-email').click()
        cy.get('body').type('test@otro'+ number +'.com')
    
        cy.get('.gh-btn-primary').click()
        cy.wait(1500)
    
        cy.visit('http://localhost:2368/ghost/#/members')
        cy.wait(1500)
    
        cy.get('tr').then(before => {
      
          const number2 = Math.random();
    
          cy.get('.gh-btn-primary').click()
          cy.wait(1500)
    
          cy.get('#member-name').click()
          cy.get('body').type('Miembro '+ number2)
    
          cy.get('#member-email').click()
          cy.get('body').type('test@otro'+ number2 +'.com')
    
          cy.get('.gh-btn-primary').click()
          cy.wait(1500)
    
          cy.visit('http://localhost:2368/ghost/#/members')
          cy.wait(1500)
    
          cy.get('tr').then(after => expect(after.length).to.equal(before.length + 1))
        })
      })

    it('Ediar miembro', () =>{

        const number = Math.random();
    
        cy.visit('http://localhost:2368/ghost/#/members')
    
        cy.get('.gh-btn-primary').click()
        cy.wait(1500)
    
        cy.get('#member-name').click()
        cy.get('body').type('Miembro '+ number)
    
        cy.get('#member-email').click()
        cy.get('body').type('test@otro'+ number +'.com')
    
        cy.get('.gh-btn-primary').click()
        cy.wait(1500)
    
        cy.visit('http://localhost:2368/ghost/#/members')
        cy.wait(1500)

        cy.get('tr').then(before => {

            cy.get('.gh-list-data').first().click()

            const number2 = Math.random();
      
            cy.get('#member-name').click()
            cy.get('body').type('Miembro '+ number2)
      
            cy.get('.gh-btn-primary').click()
            cy.wait(1500)
      
            cy.visit('http://localhost:2368/ghost/#/members')
            cy.wait(1500)
      
            cy.get('tr').then(after => expect(after.length).to.equal(before.length))
          })
    })

    it('Validar campo de notas', () =>{
        const number = Math.random();
        const note = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
        cy.visit('http://localhost:2368/ghost/#/members')
    
        cy.get('.gh-list-data').first().click()
        cy.wait(1500)
    
        cy.get('.response').last().should('have.attr', 'hidden')
        cy.get('textarea').type(note)

        cy.get('.gh-btn-primary').click()

        cy.go('back')

        cy.get('.gh-btn')
        .get('.gh-btn-red')
        .contains('Leave').click()
        cy.wait(1500)

        cy.get('.gh-list-data').first().click()

        cy.get('p').last().should('have.attr', 'hidden')
    })
})