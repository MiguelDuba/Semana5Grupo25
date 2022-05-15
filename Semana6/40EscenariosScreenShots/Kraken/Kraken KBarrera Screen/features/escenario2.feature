Feature: Crear Post

@user1 @web
Scenario: Creación de post sin titulo ni contenido - Error encontrado
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 5 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 2 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/0-login'

  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/kraken443/esc2/1-menuPrincipal'

  Then I click on new post
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/2-newpost'

  And I click on Post Title
  And I wait for 2 seconds
  And I enter text "Post de prueba2 Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/3-IngresaTitulo'

  And I click on Post boddy
  And I wait for 2 seconds
  And I erase post title
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/4-borraTitulo'

  And I click on Post boddy
  And I wait for 2 seconds
  And I click on publish
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/5-publicar1'

  And I click on publish2
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/6-publicar2'

  And I click on publish3
  And I wait for 2 seconds
  And I take a screenshot '/kraken443/esc2/6-1-publicar2'

  And I click on post
  And I wait for 7 seconds
  And I take a screenshot '/kraken443/esc2/7-listapost'

  And I expect to not be able to post
  And I take a screenshot '/kraken443/esc2/8-postCreado'
