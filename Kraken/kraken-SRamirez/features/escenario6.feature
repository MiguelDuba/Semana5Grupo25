Feature: Editar página

@user1 @web
Scenario: Como usuario administrador del sitio edito una página
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 3 seconds
  When I enter email 'sg.ramirez940@uniandes.edu.co'
  And I wait for 2 seconds
  And I enter password 'UniandesMisw2022'
  And I click next
  And I wait for 4 seconds
  And I go to pages list
  And I wait for 2 seconds
  And I click New page button 
  And I wait for 2 seconds
  And I enter title 'Página para editar'
  And I wait for 2 seconds
  And I click outside the page content
  And I wait for 2 seconds
  And I click Publish
  And I wait for 2 seconds
  And I confirm Publish
  And I wait for 3 seconds
  And I click button to return to the pages list
  And I wait for 4 seconds
  And I click on a created page
  And I wait for 2 seconds
  And I click on the page content
  And I wait for 2 seconds
  And I enter content 'Página editada'
  And I wait for 2 seconds
  And I click Publish
  And I wait for 2 seconds
  And I confirm Publish
  And I wait for 3 seconds
  Then I click button to return to the pages list
  And I expect to return to pages list
