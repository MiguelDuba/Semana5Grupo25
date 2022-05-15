Feature: Editar miembro

@user1 @web
Scenario: Cambiar nombre
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    And I take a screenshot '/version441/screenshot19-1'
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-2'
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I take a screenshot '/version441/screenshot19-3'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-4'
    And I click on New Member
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-5'
    And I set member name 'test nuevo'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-6'
    And I set member email random
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-7'
    And I click on save
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-8'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-9'
    And I select the first member
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-10'
    And I set member name 'test editado'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-11'
    And I click on save
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-12'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot19-13'
    Then I expect the title of the new member change to 'test editado'