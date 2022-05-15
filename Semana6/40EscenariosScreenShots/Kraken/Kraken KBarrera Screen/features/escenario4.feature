Feature: Crear Tag

@user4 @web
Scenario: Creación de tag completo
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 3 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 1 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a screenshot '/kraken443/esc4/1-menuPrincipal'

  Then I click tags
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc4/2-Tags'


  And I click on new Tag
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc4/3-New Tag'

  And I click on tagname
  And I wait for 2 seconds

  And I enter text "Tag de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc4/4-Dar nombre'


  And I click on save
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc4/5-GuardarTag'


  And I click tags
  And I wait for 5 seconds
  And I take a screenshot '/kraken443/esc4/-ListaTags2'


  And I expect to be able to see tag list
  And I take a screenshot '/kraken443/esc4/7-EmergenteLeave'
