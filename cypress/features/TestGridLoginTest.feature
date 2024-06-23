Feature: Login into the site with valid data
  Background: Navigate to the Website
      Given I navigate to the Website
  Scenario: Login into the application with valid data
      When I click on Sign In Link
      And I entered valid credential
          | email                    | validpassword |
          | xxxxxx@gmail.com | xxxxx@1234     |
      And Click on sign in button
    