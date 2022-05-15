Feature: Pagina con contenido

@user1 @web
Scenario: Como usuario administrador publico una página con contenido
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I take a screenshot '/version441/screenshot11-1'
  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'Q*5S#9iKWaNVkhF'
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/version441/screenshot11-2'
  When I click on Pages
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot11-3'
  And I click on New Page
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot11-4'
  And I enter title "Page de prueba Kraken"
  And I wait for 5 seconds
  And I take a screenshot '/version441/screenshot11-5'
  And I enter content "Texto de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot11-6'
  And I click on Publish
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot11-7'
  And I click on Ready to Publish
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot11-8'
  Then I click on return