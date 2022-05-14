Feature: Cambiar contraseña

@user1 @web
Scenario: Como usuario administrador del sitio cambio la contraseña 
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 40 seconds
  And I take a screenshot '/version441/screenshot10-1'
  When I enter email 'sg.ramirez940@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'UniandesMisw2022'
  And I click next
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot10-2'
  And I click user icon
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-3'
  And I go to user profile
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-4'
  And I enter old password 'UniandesMisw2022'
  And I wait for 2 seconds
  And I enter new password 'UniandesMisw2022nueva'
  And I wait for 2 seconds
  And I confirm new password 'UniandesMisw2022nueva'
  And I click Change Password button
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-5'
  And I close notification message
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-6'
  And I click user icon
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-7'
  And I log out
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-8'
  Then I enter email 'sg.ramirez940@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'UniandesMisw2022nueva'
  And I click next
  And I take a screenshot '/version441/screenshot10-9'
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot10-10'
  And I click user icon
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-11'
  And I go to user profile
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-12'
  And I enter old password 'UniandesMisw2022nueva'
  And I wait for 2 seconds
  And I enter new password 'UniandesMisw2022'
  And I wait for 2 seconds
  And I confirm new password 'UniandesMisw2022'
  And I click Change Password button
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot10-13'