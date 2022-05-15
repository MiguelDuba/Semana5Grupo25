Feature: Editar un tag

@user1 @web
Scenario: Como usuario administrador del sitio edito un tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'Q*5S#9iKWaNVkhF'
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  When I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I click on New Tag
  And I wait for 3 seconds
  And I enter name "Tag de prueba Kraken"
  And I click on save
  And I wait for 2 seconds
  When I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I click on Edit Tag
  And I wait for 2 seconds
  And I enter name "Editar Tag de prueba Kraken"
  And I wait for 2 seconds
  And I click on save
  And I wait for 3 seconds
  