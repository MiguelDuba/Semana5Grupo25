Feature: Cambiar contraseña


@user1 @web
Scenario: Como usuario administrador del sitio intento cambiar la contraseña con un valor de verificación de contraseña diferente a la contraseña nueva
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 3 seconds
  When I enter email 'sg.ramirez940@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'UniandesMisw2022'
  And I click next
  And I wait for 3 seconds
  And I click user icon
  And I wait for 2 seconds
  And I go to user profile
  And I wait for 2 seconds
  And I enter old password 'UniandesMisw2022'
  And I wait for 2 seconds
  And I enter new password 'UniandesMisw2022nueva'
  And I wait for 2 seconds
  And I confirm new password 'UniandesMisw2022diferente'
  And I click Change Password button
  And I wait for 2 seconds
  Then I expect to not be able to save the new password