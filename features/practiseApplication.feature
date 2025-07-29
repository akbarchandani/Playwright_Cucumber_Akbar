Feature: Practise app scenarious
    @Regression @Practise
    Scenario Outline: Create and order and verify order is sucessfully placed
        Given a login to Ecommerce2 application with "<username>" and "<password>"

        Examples:
            | username          | password    |
            | anshika@gmail.com | Iamking@000 |
