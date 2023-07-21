describe('DemoQA', () => {
  it('Practice Form', () => {

    //Visit this page
    cy.visit('https://demoqa.com/automation-practice-form')

    cy.get('#firstName').clear().type('Raja Junaid')
    cy.get('#lastName').clear().type('Ullah Khan')
    cy.get('#userEmail').clear().type('junaidraja2@gmail.com')  

    //You can use click to check the checkbox
    /*cy.get('#genterWrapper')
    .find('[value= "Male"]')
    .click({force: true})*/

    //You can aslo use check to check the checkbox
    cy.get('#genterWrapper')
    .find('[value= "Male"]')
    .check({force: true})

    

  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the uncaught exception here
    console.error('Uncaught exception:', err);
    // Return false to prevent Cypress from failing the test
    return false;
  })

  it.skip('Methods to find Locators', () => {
    
    //Visit this page
    cy.visit('https://demoqa.com/automation-practice-form')


    //Chain Method to find Locator
    cy.get('#userForm')
    .find('#userName-wrapper')
    .next()

    //Another Chain Method to find Locator via first Div
    cy.get('#userForm')
    .find('div')
    .first()

    //Another Chain Method to find Locator via last Div
    cy.get('#userForm')
    .find('div')
    .last()

    //Another Chain Method to find Locator via Parent 
    cy.get('#userForm')
    .find('#userName-label')
    .parent()

    //Another Chain Method to find Locator via Child 
    cy.get('#userForm')
    .find('#userName-wrapper')
    .children()

    //Eq method
    cy.get('#userForm')
    .find('#userName-wrapper')
    .find('div')
    .eq(2)

  })
})