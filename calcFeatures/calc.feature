Feature: Calculator operations

  Demonstrate BDD with code from development to production using a Calculator App

  Background: Two numbers to be manipulated through +, -, *, /
    Given the numbers 12 and 6

  Example: Add two numbers
    When they are added together 
    Then should the result be 18

  Example: Subtract two numbers
    When the latter is subtracted from the former
    Then should the result be 6

  Example: Multiply two numbers
    When the two are multiplied together
    Then should the result be 72

  Example: Divide two numbers
    When the latter is divided by the former
    Then should the result be 2
