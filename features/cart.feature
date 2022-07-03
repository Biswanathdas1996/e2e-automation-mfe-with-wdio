Feature: Test cart page

  Scenario Outline: Test add to cart
    Given I am on the home page
    When I click on the add to cart button of <productIndex>
    Then I can see <cartCount> no of product added to cart

    Examples: 
      | productIndex | cartCount |
      |            1 |         1 |
      |            2 |         2 |
      |            4 |         3 |
