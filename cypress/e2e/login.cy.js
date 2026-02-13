describe('Login', () => {
    
    it('Realizar Login credenciais válidas', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/');
        // Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        // Assert
        // cy.url().should('include', '/inventory.html') // valida se a url contem a string
        // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // valida se a url é exatamente igual
        cy.location('pathname').should('eq', '/inventory.html')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="inventory-container"]').should('have.length.greaterThan', 0)

    })

    it('Login com credenciais inválidas', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com')

        // Act
        cy.get('[data-test="username"]').type('invalido');
        cy.get('[data-test="password"]').type('invalido');
        cy.get('[data-test="login-button"]').click()

        // Assert
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]')
        .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    it('Login com campo username em branco', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com')
        // Act
        //cy.get('[data-test="username"]').type('');
        cy.get('[data-test="login-button"]').click()
        // Assert
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
        cy.url().should('eq','https://www.saucedemo.com/')
    })

    it('Login com campo password em branco', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/');

        // Act
        cy.get('[data-test="username"]').type('standart_user')
        cy.get('[data-test="login-button"]').click()
        // Assert
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', "Epic sadface: Password is required")
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })  

    it('Acesso direto a página interna sem login', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/inventory.html', {failOnStatusCode:false});

        // Assert
        cy.get('[data-test="error"]').should('be.visible');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.get('[data-test="error"]')
        .should('have.text', "Epic sadface: You can only access '/inventory.html' when you are logged in.");
        

    })
})