import { navigateTO } from "../support/DemoSitePages"

describe('Page Object Model', () => {
  
  
  
    it('Test with a Page Object', () => {
        
        cy.visit('https://demoqa.com/automation-practice-form')
        navigateTO.FormPage()
      
  
    })
})