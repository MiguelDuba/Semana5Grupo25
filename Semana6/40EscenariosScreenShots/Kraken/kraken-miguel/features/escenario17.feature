Feature: Regresar evitando guardar un post editado

@user1 @web
Scenario: Editar post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    And I take a screenshot '/version441/screenshot17-1'
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot17-2'
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I take a screenshot '/version441/screenshot17-3'
    And I go to the post list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot17-4'
    And I click in the first post of the list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot17-5'
    And I enter title ''
    And I click button to return
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot17-6'
    Then I expect return to the 'Post' page