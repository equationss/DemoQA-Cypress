describe('DemoQA', () => {

  beforeEach(() =>{
    //Visit this page
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('[id="userName-label"]').as('nameLabel')


})
  it('Practice Form', () => {

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


  it.only('Wait', () => {
   //To Visit
   cy.visit('https://www.demoblaze.com/')
   
   //Wait in Cypress
   cy.get('.cypress', {timeout: 8000})


  })

  it('Aliases', () => {

    //Alias
    cy.get('@nameLabel').then(label => {
    expect(label.text()).to.eq('Name')
    })
    
  })

  it('Each Method', () => {

    //Each Method for Loop
    cy.get('#hobbiesWrapper').each(checkBoxDiv => {
    cy.wrap(checkBoxDiv).find('[type="checkbox"]').check({force: true})
      
    })
  })

  it('Chai Jquery Assertion', () => {

    //Chai JQuery Username label Text
    cy.get('[id="userName-label"]').then($label =>{
      expect($label.text()).to.eq('Name')
    })

  })

  it('Invoke command', () => {

    //Invoke Username label Text
    cy.get('[id="userName-label"]').invoke('text').then(labelText =>{
      expect(labelText).to.eq('Name')
    })

    //Invoke Class Label
    cy.get('[id="userName-label"]').invoke('attr', 'class').then(elementClass =>{
      expect(elementClass).to.eq('form-label')
    })

  })

  it('Wrap Method', () => {

    //Wrap Username label Text
    cy.get('[id="userName-label"]').then (label =>{
    cy.wrap(label).should('contain', 'Name')    
  })
  })

  it('Yield subject from commands', () => {

    //Yield Username label Text
    cy.get('[id="userName-label"]').then (label =>{
      expect(label.text()).to.eq('Name')
    })
  })

  it.skip('Methods to find Locators', () => {

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