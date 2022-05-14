Feature: Crear Tag 

@user1 @web
Scenario: Creación de tag sin nombre no debe guardar
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 3 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 1 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a screenshot '/kraken443/esc3/1-menuPrincipal'

  Then I click tags
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc3/2-Tags'

  And I click on new Tag
  And I wait for 2 seconds
   And I take a screenshot '/kraken443/esc3/3-New Tag'

  And I click on save
  And I wait for 2 seconds
   And I take a screenshot '/kraken443/esc3/4-GuardarTag'


  And I click tags
  And I wait for 2 seconds
   And I take a screenshot '/kraken443/esc3/5-ListaTags2'


  And I expect to have the leave button
   And I take a screenshot '/kraken443/esc3/6-EmergenteLeave'
