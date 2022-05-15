Feature: Pagina sin contenido

@user1 @web
Scenario: Como usuario administrador publico una página sin contenido
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I take a screenshot '/version441/screenshot12-1'
  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-2'
  And I enter password 'Q*5S#9iKWaNVkhF'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-3'
  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/version441/screenshot12-4'
  When I click on Pages
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-5'
  And I click on New Page
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-6'
  And I enter title "Page de prueba Kraken"
  And I wait for 5 seconds
  And I take a screenshot '/version441/screenshot12-7'
  And I click on content
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-8'
  And I erase page title
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-9'
  And I click on Publish
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-10'
  And I click on Ready to Publish
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot12-11'
  Then I click on return