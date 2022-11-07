/// <reference types="cypress" />

describe('TESTS DE LOGIN', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()

     })

  it ('A valid user can login', () =>{
    
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")

     })

  it('A invalid password cannot login', () =>{

    cy.get('#username').type("tomsmith")
    cy.get('#password').type("error!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
  
    })

   
  it('A invalid usename cannot login', () =>{

    cy.get('#username').type("errot!")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
      
    })
    
     
  it("invalid login", () =>{
 
    cy.get('#username')
    cy.get('#password')
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
   
    })

 })


        /// <reference types="cypress" />

it('Shifting content', () =>{    
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('li').should('have.length',5)
})
        
        
        


