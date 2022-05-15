//feature cambiar contraseña. Escenarios: 3
describe('Feature: Cambiar contraseña', () => {

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
    
    //escenario 1: cambiar la contraseña con un valor de verificación de contraseña diferente al valor de la contraseña nueva
    it('Cambiar contraseña con valores diferentes en contraseña nueva y verificación de contraseña', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter old password
        cy.get('#user-password-old').type('UniandesMisw2022' )
        cy.wait(2000)

        //And I enter new password
        cy.get('#user-password-new').type('UniandesMisw2022nueva' )
        cy.wait(2000)

        //And I confirm new password
        cy.get('#user-new-password-verification').type('UniandesMisw2022diferente' )
        cy.wait(2000)
    
        //And I click Change Password button
        cy.get('.button-change-password').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new password
        cy.get('.error>.response').should('exist')

    })

    //escenario 2: cambiar la contraseña con el mismo valor de la contraseña antigua
    it('Cambiar contraseña con el mismo valor de la contraseña antigua', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter old password
        cy.get('#user-password-old').type('UniandesMisw2022' )
        cy.wait(2000)

        //And I enter new password
        cy.get('#user-password-new').type('UniandesMisw2022' )
        cy.wait(2000)

        //And I confirm new password
        cy.get('#user-new-password-verification').type('UniandesMisw2022' )
        cy.wait(2000)
    
        //And I click Change Password button
        cy.get('.button-change-password').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new password
        cy.get('.error>.response').should('exist')

    })

    //escenario 3: cambiar la contraseña
     it('Cambiar contraseña', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter old password
        cy.get('#user-password-old').type('UniandesMisw2022' )
        cy.wait(2000)

        //And I enter new password
        cy.get('#user-password-new').type('UniandesMisw2022nueva' )
        cy.wait(2000)

        //And I confirm new password
        cy.get('#user-new-password-verification').type('UniandesMisw2022nueva' )
        cy.wait(2000)
    
        //And I click Change Password button
        cy.get('.button-change-password').click()
        cy.wait(2000)

        //And I close notification message
        cy.get('.gh-notification-close').click()
        cy.wait(2000)

        //And I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I log out
        cy.get('.user-menu-signout').click()
        cy.wait(2000)

        //And I sign in with new password
        cy.get('form').within(() => {
            cy.get('#ember7').type('sg.ramirez940@uniandes.edu.co')
            cy.get('#ember9').type('UniandesMisw2022nueva')
            cy.get('#ember11').click()
        })
        cy.wait(3000)

        //Then I expect to be able to login with new password
        cy.get('.gh-main.gh-main-wide').should('exist')

        //a partir de este paso, se restablece el password antiguo para evitar conflictos con las demás pruebas
        
        //And I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter old password
        cy.get('#user-password-old').type('UniandesMisw2022nueva' )
        cy.wait(2000)

        //And I enter new password
        cy.get('#user-password-new').type('UniandesMisw2022' )
        cy.wait(2000)

        //And I confirm new password
        cy.get('#user-new-password-verification').type('UniandesMisw2022' )
        cy.wait(2000)
    
        //And I click Change Password button
        cy.get('.button-change-password').click()
        cy.wait(2000)


    }) 

    

    
  })