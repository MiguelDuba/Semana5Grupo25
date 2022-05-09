Feature: Crear Tag

@user1 @web
Scenario: Corregir tag creado con error debe de guardarse (ERROR Encontrado)
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

  And I enter text "Tag_conError_Para_Busqueda"
  And I wait for 2 seconds

  And I click on save
  And I wait for 2 seconds

  And I click tags
  And I wait for 2 seconds

  And I expect to be able to see new tag