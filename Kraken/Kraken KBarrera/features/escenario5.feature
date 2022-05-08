Feature: Crear Tag

@user1 @web
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