export class DemoSitePages {

    FormPage()
    
    {
        cy.get('#firstName').clear().type('Raja Junaid')
        cy.get('#lastName').clear().type('Ullah Khan')
        cy.get('#userEmail').clear().type('junaidraja2@gmail.com')  
   

    }

}

export const navigateTO= new DemoSitePages()