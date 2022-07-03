Feature: Test home page

  Scenario: Check if products rendered correctly
    Given I am on the home page
    Then I should see a title message saying "Micro Frontend (POC) - Biswanath Das"

  Scenario Outline: Verify products display correctly
    Then I can see the product <productIndex> listed with name <productName>

    Examples: 
      | productIndex | productName    |
      |            1 | Apple watch    |
      |            2 | Fustrack watch |

  Scenario Outline: Test add to cart
    When I click on the add to cart button of <productIndex>
    Then I can see <cartCount> no of product added to cart

    Examples: 
      | productIndex | cartCount |
      |            1 |         1 |
      |            2 |         2 |
      |            4 |         3 |
