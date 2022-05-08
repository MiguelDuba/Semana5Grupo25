Feature: Editar miembro

@user1 @web
Scenario: Cambiar nombre
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I go to the members list
    And I wait for 2 seconds
    And I click in the first member of the list
    And I enter name 'Miembro 50'
    And I click Save
    And I wait for 2 seconds
    And I go to the members list
    Then I expect see the new member name in the list