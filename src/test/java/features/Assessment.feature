
Feature: BMICaculator

@RegressionTest
 Scenario Outline: Calculate BMI
    Given User is on https://www.calculator.net/ page
    And clicks on BMI Calculator
    And clicks on Metrics
    When User enters Age<Age>, Height<Height> and Weight<Weight>
    And User clicks on Calculate BMI button
     Then BMI Result will be shown
   And Close the Browser

    Examples: 
      |Age | Height | Weight |
      |10|127|40|
      |30|156|70|
      |25|152|55| 
      |20|160|45|
      |35|160|70|