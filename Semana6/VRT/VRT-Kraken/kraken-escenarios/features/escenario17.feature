Feature: Regresar evitando guardar un post editado

@user1 @web
Scenario: Editar post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    And I take a screenshot '/version4413/screenshot17-1'
    When I enter email 's.mayav@uniandes.edu.co'
    And I wait for 2 seconds
    And I take a screenshot '/version4413/screenshot17-2'
    And I enter password 'Q*5S#9iKWaNVkhF'
    And I wait for 3 seconds
    And I take a screenshot '/version4413/screenshot17-3'
    And I click next
    And I wait for 4 seconds
    And I take a screenshot '/version4413/screenshot17-4'
    And I go to the post list
    And I wait for 2 seconds
    And I take a screenshot '/version4413/screenshot17-5'
    And I click in the first post of the list
    And I wait for 2 seconds
    And I take a screenshot '/version4413/screenshot17-6'
    And I enter title ''
    And I wait for 2 seconds
    And I take a screenshot '/version4413/screenshot17-7'
    And I click button to return2
    And I wait for 4 seconds
    And I take a screenshot '/version4413/screenshot17-8'
    Then I expect return to the 'Post' page2
    And I wait for 4 seconds
    And I take a screenshot '/version4413/screenshot17-9'

@user2 @web
Scenario: Editar post
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 3 seconds
    And I take a screenshot '/version3419/screenshot17-1'
    When I enter email 's.mayav@uniandes.edu.co'
    And I wait for 2 seconds
    And I take a screenshot '/version3419/screenshot17-2'
    And I enter password 'Prueb4Mis8341'
    And I wait for 3 seconds
    And I take a screenshot '/version3419/screenshot17-3'
    And I click next
    And I wait for 4 seconds
    And I take a screenshot '/version3419/screenshot17-4'
    And I go to the post list
    And I wait for 2 seconds
    And I take a screenshot '/version3419/screenshot17-5'
    And I click in the first post of the list
    And I wait for 2 seconds
    And I take a screenshot '/version3419/screenshot17-6'
    And I enter title ''
    And I wait for 2 seconds
    And I take a screenshot '/version3419/screenshot17-7'
    And I click button to return1
    And I wait for 4 seconds
    And I take a screenshot '/version3419/screenshot17-8'
    And I wait for 4 seconds
    Then I expect return to the 'Post' page
    And I take a screenshot '/version3419/screenshot17-9'