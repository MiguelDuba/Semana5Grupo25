Feature: Crear miembro

@user1 @web
Scenario: Crear miembro
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-1'
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I take a screenshot '/version441/screenshot18-2'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-3'
    And I click on New Member
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-4'
    And I set member name 'test nuevo'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-5'
    And I set member email random
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-6'
    And I click on save
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-7'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot18-8'
    Then I expect the title of the new member change to 'test nuevo'