/// <reference types="cypress" />
import {MainPage} from '../page-objects/main'
import {LoginPage} from '../page-objects/login'
import {WelcomePage} from '../page-objects/welcome'


describe('TESTS DE LOGIN', () => {
  const loginPage = new LoginPage()
  const mainPage = new MainPage()
  const welcome = new WelcomePage()


  beforeEach(() => {
    mainPage.navigate()
    mainPage.clickLoginOption()
  


     })

  it ('A valid user can login', () =>{
    loginPage.fillUser("tomsmith")
    loginPage.fillPass("SuperSecretPassword!")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("You logged into a secure area!")



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
        
        
        


