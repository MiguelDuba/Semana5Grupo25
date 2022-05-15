Feature: Pagina sin contenido

@user1 @web
Scenario: Como usuario administrador publico una página sin contenido
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'Q*5S#9iKWaNVkhF'
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  When I click on Pages
  And I wait for 2 seconds
  And I click on New Page
  And I wait for 2 seconds
  And I enter title "Page de prueba Kraken"
  And I wait for 5 seconds
  And I click on content
  And I wait for 2 seconds
  And I erase page title
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 2 seconds
  And I click on Ready to Publish
  And I wait for 2 seconds
  Then I click on return