Feature: Feature Krishtian Barrera

@user1 @web
Scenario: Creación de post con contenido
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 5 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 2 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  Then I click on new post
  And I wait for 2 seconds
  And I click on Post Title
  And I wait for 2 seconds
  And I enter text "Post de prueba Kraken"
  And I wait for 2 seconds
  And I click on Post boddy
  And I wait for 2 seconds
  And I enter text "Contenido de post de prueba Kraken"
  And I wait for 2 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on publish2
  And I wait for 2 seconds
  And I click on publish3
  And I wait for 2 seconds
  And I click on post
  And I wait for 2 seconds

@user2 @web
Scenario: Creación de post sin titulo ni contenido
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 5 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 2 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  Then I click on new post
  And I wait for 2 seconds
  And I click on Post Title
  And I wait for 2 seconds
  And I enter text "Post de prueba2 Kraken"
  And I wait for 2 seconds
  And I click on Post boddy
  And I wait for 2 seconds
  And I erase post title
  And I wait for 2 seconds
  And I click on Post boddy
  And I wait for 2 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on publish2
  And I wait for 2 seconds
  And I click on publish3
  And I wait for 2 seconds
  And I click on post
  And I wait for 7 seconds

@user3 @web
Scenario: Creación de tag sin nombre
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 3 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 1 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  Then I click tags
  And I wait for 2 seconds

  And I click on new Tag
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds

  And I click on tagname
  And I wait for 2 seconds

  And I enter text "Tag de prueba Kraken"
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds

  And I click tags
  And I wait for 2 seconds
  And I click on leave
  And I wait for 2 seconds

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
  Then I click tags
  And I wait for 2 seconds

  And I click on new Tag
  And I wait for 2 seconds

  And I click on tagname
  And I wait for 2 seconds

  And I enter text "Tag de prueba Kraken"
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds

  And I click tags
  And I wait for 5 seconds

  @user5 @web
Scenario: Botón Retry cuando se crea un tag con error no ejecuta
  Given I navigate to page "http://localhost:3001/ghost/#/settings/staff/admin"
  And I wait for 3 seconds
  When I enter email 'Admin@ghost.com'
  And I wait for 1 seconds
  And I enter password 'Krishtian98'
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  Then I click tags
  And I wait for 2 seconds

  And I click on new Tag
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds

  And I click on tagslug
  And I wait for 2 seconds

  And I enter text "Tag Slug para recarga de retry"
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds



