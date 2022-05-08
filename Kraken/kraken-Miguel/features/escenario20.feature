Feature: Editar miembro

@user1 @web
Scenario: Editar miembro
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
    And I enter note 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    Then I expect to see the error message
    And I wait for 2 seconds
    And I go to the members list
    And I click in the first member of the list
    And I expect to the error message hidden