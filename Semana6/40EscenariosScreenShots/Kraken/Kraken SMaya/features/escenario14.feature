Feature: Editar un tag sin nombre

@user1 @web
Scenario: Como usuario administrador del sitio edito un tag y lo guardo sin nombre
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I take a screenshot '/version441/screenshot14-1'
  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-2'
  And I enter password 'Q*5S#9iKWaNVkhF'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-3'
  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/version441/screenshot14-4'
  When I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-5'
  And I click on New Tag
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot14-6'
  And I enter name "Tag de prueba2 Kraken"
  And I wait for 5 seconds
  And I take a screenshot '/version441/screenshot14-7'
  And I click on save
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-8'
  When I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-9'
  And I click on Edit Tag
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-10'
  And I erase Tag name
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot14-11'
  And I click on save
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot14-12'
  And I click on save
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot14-13'
