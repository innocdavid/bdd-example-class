Feature: gui

  Background: background
    Given I visit the homepage on "http://localhost:3000"
    When I include value1 of 12 
    And I include value2 of 6

  Example: addition
  And my operand is "add"
  When I submit 
  Then the display should show 18
  
  Example: subtraction
  And my operand is "sub"
  When I submit 
  Then the display should show 6

  Example: multiplication
  And my operand is "mul"
  When I submit 
  Then the display should show 72

  Example: division
  And my operand is "div"
  When I submit 
  Then the display should show 2

