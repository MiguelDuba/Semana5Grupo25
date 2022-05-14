Feature: Editar página

@user1 @web
Scenario: Como usuario administrador del sitio edito una página
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot6-1'
  When I enter email 'sg.ramirez940@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'UniandesMisw2022'
  And I click next
  And I wait for 4 seconds
  And I take a screenshot '/version441/screenshot6-2'
  And I go to pages list
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-3'
  And I click New page button 
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-4'
  And I enter title 'Página para editar'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-5'
  And I click outside the page content
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-6'
  And I click Publish
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-7'
  And I confirm Publish
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot6-8'
  And I click button to return to the pages list
  And I wait for 4 seconds
  And I take a screenshot '/version441/screenshot6-9'
  And I click on a created page
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-10'
  And I click on the page content
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-11'
  And I enter content 'Página editada'
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-12'
  And I click Publish
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-13'
  And I confirm Publish
  And I wait for 3 seconds
  And I take a screenshot '/version441/screenshot6-14'
  Then I click button to return to the pages list
  And I wait for 2 seconds
  And I take a screenshot '/version441/screenshot6-15'
  And I expect to return to pages list
