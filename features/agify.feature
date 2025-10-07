Feature: Agify.io API Age Prediction

  Background:
    Given the Agify API base URL is "https://api.agify.io"

  Scenario: Predict age for a valid name
    When I send a GET request with the name "billybob"
    Then the response status should be 200
    And the response should contain the field "name" with value "billybob"
    And the response should contain the field "age"
