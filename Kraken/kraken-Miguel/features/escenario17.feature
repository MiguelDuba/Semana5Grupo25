Feature: Regresar evitando guardar un post editado

@user1 @web
Scenario: Editar post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I go to the post list
    And I wait for 2 seconds
    And I click in the first post of the list
    And I wait for 2 seconds
    And I clean the title 
    And I click outside the page content
    And I wait for 2 seconds
    And I click button to return to the pages list
    And I confirm to leave the page
    Then I expect return to the post list page