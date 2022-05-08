Feature: Crear miembro

@user1 @web
Scenario: Crear miembro
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I go to the members list
    And I wait for 2 seconds
    And I click New member
    And I enter name 'Miembro 1'
    And I enter email 'test@otro.com'
    And I click Save
    And I wait for 2 seconds
    And I go to the members list
    Then I expect see the new member in the list