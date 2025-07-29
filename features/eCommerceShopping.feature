Feature: eCommerce Shopping scenarious
    @Regression @Order
    Scenario Outline: Create and order and verify order is sucessfully placed
        Given a login to Ecommerce application with "<username>" and "<password>"
        When Add "ZARA COAT 3" to Cart
        Then Verify "ZARA COAT 3" is displayed in the Cart
        When Enter valid details and Place the Order
        Then Verify order is present in the OrderHistory

        Examples:
            | username                | password |
            | akbarchandani@gmail.com | Iamstar  |