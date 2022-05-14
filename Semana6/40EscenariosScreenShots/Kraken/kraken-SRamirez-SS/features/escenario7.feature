Feature: Editar página

@user1 @web
Scenario: Como usuario administrador del sitio edito una página y salgo sin guardar
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 10 seconds
  And I take a screenshot '/version441/screenshot7-1'
  And I enter email 'sg.ramirez940@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot7-2'
  And I enter password 'UniandesMisw2022'
  And I take a screenshot '/version441/screenshot7-3'
  And I click next
  And I wait for 15 seconds
  And I take a screenshot '/version441/screenshot7-4'
  When I go to pages list
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot7-5'
  And I click on a created page
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot7-6'
  And I click on the page content
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot7-7'
  And I enter content 'Contenido para no guardar'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot7-8'
  And I click button to return to the pages list
  And I take a screenshot '/version441/screenshot7-9'
  And I confirm to leave the page
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot7-10'
  Then I expect to return to pages list