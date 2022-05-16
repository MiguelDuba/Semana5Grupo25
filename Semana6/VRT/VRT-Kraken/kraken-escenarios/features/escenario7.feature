Feature: Editar página

@user1 @web
Scenario: Como usuario administrador del sitio edito una página y salgo sin guardar
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 10 seconds
  And I take a screenshot '/version4413/screenshot7-1'
  And I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-2'
  And I enter password 'Q*5S#9iKWaNVkhF'
  And I take a screenshot '/version4413/screenshot7-3'
  And I click next
  And I wait for 15 seconds
  And I take a screenshot '/version4413/screenshot7-4'
  When I click on Pages
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-5'
  And I click on New Page
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-6'
  And I enter title "Page de prueba Kraken"
  And I wait for 5 seconds
  And I take a screenshot '/version4413/screenshot7-7'
  And I enter content "Texto de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-8'
  And I click on Publish
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-9'
  And I click on Ready to Publish
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-10'
  When I go to pages list
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-11'
  And I click on a created page
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-12'
  And I click on the page content
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-13'
  And I enter content N 'Contenido para no guardar'
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-14'
  And I click button to return to the pages list
  And I take a screenshot '/version4413/screenshot7-15'
  And I confirm to leave the page
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-16'
  Then I expect to return to pages list
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot7-17'

  @user2 @web
Scenario: Como usuario administrador del sitio edito una página y salgo sin guardar
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 10 seconds
  And I take a screenshot '/version3419/screenshot7-1'
  And I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-2'
  And I enter password 'Prueb4Mis8341'
  And I take a screenshot '/version3419/screenshot7-3'
  And I click next
  And I wait for 15 seconds
  And I take a screenshot '/version3419/screenshot7-4'
  When I click on Pages
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-5'
  And I click on New Page
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-6'
  And I enter title "Page de prueba Kraken"
  And I wait for 5 seconds
  And I take a screenshot '/version3419/screenshot7-7'
  And I enter content "Texto de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-8'
  And I click on Publish
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-9'
  And I click on Ready to Publish
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-10'
  When I go to pages list
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-11'
  And I click on a created page
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-12'
  And I click on the page content
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-13'
  And I enter content N 'Contenido para no guardar'
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-14'
  And I click button to return to the pages list
  And I take a screenshot '/version3419/screenshot7-15'
  And I take a screenshot '/version3419/screenshot7-16'
  Then I expect to return to pages list
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot7-17'

