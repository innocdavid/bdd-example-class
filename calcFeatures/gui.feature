Feature: gui

  Background: background
    Given I visit the homepage on "http://localhost:3000"
    When I include value1 of 12 
    And I include value2 of 6

  Example: addition
  And my operand is "add"
  When I submit 
  Then the display should show 18