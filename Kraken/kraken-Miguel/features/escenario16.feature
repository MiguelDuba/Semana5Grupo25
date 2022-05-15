Feature: Editar post

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
    And I enter title 'Test para editar un post' 
    And I wait for 2 seconds
    And I click on Update
    And I wait for 2 seconds
    And I click on Update again
    And I wait for 2 seconds
    And I go to the post list
    And I wait for 2 seconds
    And I expect the title of the post change to 'Test para editar un post'