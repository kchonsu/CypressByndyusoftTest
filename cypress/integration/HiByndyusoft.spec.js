///<reference types="cypress" />

it("should open web site", () => {
  cy.visit("https://byndyusoft.com/");
  cy.get('.know-more__container > .btn').click();
  cy.get('.popup-callback__footer-contacts > a').should('have.text', 'sales@byndyusoft.com')
});
