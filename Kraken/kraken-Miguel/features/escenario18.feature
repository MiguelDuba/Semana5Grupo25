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
    And I click on New Member
    And I wait for 2 seconds
    And I set member name 'test nuevo'
    And I wait for 2 seconds
    And I set member email random
    And I wait for 2 seconds
    And I click on save
    And I wait for 2 seconds
    And I go to the members list
    And I wait for 2 seconds
    Then I expect the title of the new member change to 'test nuevo'