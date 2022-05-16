Feature: Feature escenario1

@user1 @web
Scenario: Creación de post con contenido
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  And I take a screenshot '/version4413/screenshot1-1'

  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-2'

  And I enter password 'Q*5S#9iKWaNVkhF'
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-3'


  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/version4413/screenshot1-4'


  Then I click on new post2
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-5'

  
  And I click on Post Title
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-6'
  
  And I enter text "Post de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-7'

  
  And I click on Post boddy
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-8'
  
  And I enter text "Contenido de post de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-9'

  
  And I click on publish
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-10'

  
  And I click on publish2
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-11'

  
  And I click on publish3
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-12'

  
  And I click on post
  And I wait for 2 seconds
  And I take a screenshot '/version4413/screenshot1-13'


  And I expect to return to post list2
  And I take a screenshot '/version4413/screenshot1-14'
  


@user2 @web
Scenario: Creación de post con contenido
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 5 seconds
  And I take a screenshot '/version3419/screenshot1-1'

  When I enter email 's.mayav@uniandes.edu.co'
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-2'

  And I enter password 'Prueb4Mis8341'
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-3'


  And I click next
  And I wait for 7 seconds
  And I take a screenshot '/version3419/screenshot1-4'


  Then I click on new post
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-5'

  
  And I click on Post Title
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-6'
  
  And I enter text "Post de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-7'

  
  And I click on Post boddy
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-8'
  
  And I enter text "Contenido de post de prueba Kraken"
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-9'

  
  And I click on publish
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-10'

  
  And I click on publish2
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-11'
  And I take a screenshot '/version3419/screenshot1-12'


  And I click on post
  And I wait for 2 seconds
  And I take a screenshot '/version3419/screenshot1-13'


  And I expect to return to post list
  And I take a screenshot '/version3419/screenshot1-14'