Feature: Feature escenario1

@user1 @web
Scenario: Creación de post con contenido
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 5 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 2 seconds

  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/0-Login'


  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/kraken443/esc1/1-menuPrincipal'


  Then I click on new post
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/2-newpost'

  
  And I click on Post Title
  And I wait for 2 seconds
  
  And I enter text "Post de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/3-IngresaTitulo'

  
  And I click on Post boddy
  And I wait for 2 seconds
  
  And I enter text "Contenido de post de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/4-IngresaContenido'

  
  And I click on publish
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/5-publicar1'

  
  And I click on publish2
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/6-publicar2'

  
  And I click on publish3
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/6-1-publicar2'

  
  And I click on post
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc1/7-listapost'


  And I expect to return to post list
  And I take a screenshot '/kraken443/esc1/8-postCreado'


