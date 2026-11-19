describe('SauceDemo Automation Assignment', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    // TEST 1: Login with invalid credentials
    it('should not allow login with invalid credentials', () => {

        cy.get('[data-test="username"]')
            .type('standard_user');

        cy.get('[data-test="password"]')
            .type('WrongPassword123');

        cy.get('[data-test="login-button"]')
            .click();

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username and password do not match');

    });





    

    // TEST 2: Login with valid credentials
 it('should login successfully with valid credentials', () => {

        cy.get('[data-test="username"]')
            .type('standard_user');

        cy.get('[data-test="password"]')
            .type('secret_sauce');

        cy.get('[data-test="login-button"]')
            .click();

        cy.url()
            .should('include', '/inventory.html');

        cy.get('[data-test="inventory-container"]')
            .should('be.visible');

    });






    

it('should filter products alphabetically from A to Z', () => {

    
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

    cy.url()
        .should('include', '/inventory.html');

    cy.get('[data-test="product-sort-container"]')
        .should('be.visible')
        .select('az');

    cy.get('[data-test="inventory-item-name"]')
        .then(($products) => {

            const productNames = [...$products].map((product) =>
                product.innerText.trim()
            );

            const sortedNames = [...productNames].sort((a, b) =>
                a.localeCompare(b)
            );

            expect(productNames).to.deep.equal(sortedNames);

        });
cy.wait(2000); // Wait for 2 seconds before proceeding to the next test
});




 // TEST 4: Filter products from Low to High
    it('should filter products by price from low to high', () => {

    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

        cy.get('[data-test="product-sort-container"]')
            .select('lohi');

        cy.get('[data-test="inventory-item-price"]')
            .then(($prices) => {

                const prices = [...$prices].map((price) =>
                    Number(price.innerText.replace('$', ''))
                );

                const sortedPrices = [...prices].sort((a, b) => a - b);

                expect(prices).to.deep.equal(sortedPrices);

            });
cy.wait(2000);
    });



// TEST 5: Add four products to the cart
    it('should add four products to the cart', () => {

       cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

        cy.get('[data-test^="add-to-cart-"]')
            .should('have.length.at.least', 4)
            .then(($buttons) => {

                [...$buttons].slice(0, 4).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        cy.get('[data-test="shopping-cart-badge"]')
            .should('have.text', '4');
cy.wait(2000);
    });




// TEST 6: Remove two products from the cart
    it('should remove two products from the cart', () => {

        cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

        // Add four products
        cy.get('[data-test^="add-to-cart-"]')
            .then(($buttons) => {

                [...$buttons].slice(0, 4).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        // Open cart
        cy.get('[data-test="shopping-cart-link"]')
            .click();

        cy.url()
            .should('include', '/cart.html');

        // Remove two products
        cy.get('[data-test^="remove-"]')
            .should('have.length', 4)
            .then(($buttons) => {

                [...$buttons].slice(0, 2).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        cy.get('[data-test="cart-list"]')
            .children()
            .should('have.length', 6);
cy.wait(2000);
    });






// TEST 7: Proceed to checkout
    it('should proceed to checkout with two products', () => {

        cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

        // Add four products
        cy.get('[data-test^="add-to-cart-"]')
            .then(($buttons) => {

                [...$buttons].slice(0, 4).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        // Open cart
        cy.get('[data-test="shopping-cart-link"]')
            .click();

        // Remove two products
        cy.get('[data-test^="remove-"]')
            .then(($buttons) => {

                [...$buttons].slice(0, 2).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        // Proceed to checkout
        cy.get('[data-test="checkout"]')
            .click();

        cy.url()
            .should('include', '/checkout-step-one.html');

        cy.get('[data-test="firstName"]')
            .should('be.visible');
cy.wait(2000);
    });




// TEST 8: Complete checkout
    it('should complete checkout successfully', () => {

         cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

        // Add four products
        cy.get('[data-test^="add-to-cart-"]')
            .then(($buttons) => {

                [...$buttons].slice(0, 4).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        // Open cart
        cy.get('[data-test="shopping-cart-link"]')
            .click();

        // Remove two products
        cy.get('[data-test^="remove-"]')
            .then(($buttons) => {

                [...$buttons].slice(0, 2).forEach((button) => {
                    cy.wrap(button).click();
                });

            });

        // Proceed to checkout
        cy.get('[data-test="checkout"]')
            .click();

        // Enter checkout information
        cy.get('[data-test="firstName"]')
            .type('PELUMI');

        cy.get('[data-test="lastName"]')
            .type('ADE');

        cy.get('[data-test="postalCode"]')
            .type('100001');

        cy.get('[data-test="continue"]')
            .click();

        // Verify checkout overview
        cy.url()
            .should('include', '/checkout-step-two.html');

        cy.get('[data-test="cart-list"]')
            .children()
            .should('have.length', 4);

        // Finish order
        cy.get('[data-test="finish"]')
            .click();

        // Verify order confirmation
        cy.get('[data-test="complete-header"]')
            .should('be.visible')
            .and('contain', 'Thank you for your order!');

    });

});


