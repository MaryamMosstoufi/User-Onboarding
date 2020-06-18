// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('User Onboarding Form', () => {
    it('Ability to navigate to site', () => {
        cy.visit('http://localhost:3001')
        cy.url().should('include', 'localhost:3001')
    })

    it('Submit Button to be disabled by default', () => { // second test
        cy.get('button').should('be.disabled')
    })

    it('Can type text for Name', () => {
        cy.get('input[name=name]')
            .type('Maryam Mosstoufi')
            .should('have.value', 'Maryam Mosstoufi')
    })

    it('Can type text for Email', () => {
        cy.get('input[name=email]')
            .type('maryam@maryam.com')
            .should('have.value', 'maryam@maryam.com')
    })

    it('Can type text for Password', () => {
        cy.get('input[name=password]')
            .type('mypassword')
            .should('have.value', 'mypassword')
    })

    it('Can agree to Terms', () => {
        cy.get('input[name=terms]')
            .check()
            .should('be.checked')
    })

    it('Submit Button being enabled', () => {
        cy.get('button').should('not.be.disabled')
            .click()
    })

    it('Form clears after submit', () => {
        cy.get('input[name=name]').should('be.empty')
        cy.get('input[name=email]').should('be.empty')
        cy.get('input[name=password]').should('be.empty')
        cy.get('input[name=terms]').should('not.be.checked')
    })

})