//your JS code here. If required.
cy.get("iframe#my-iframe")
  .wait(5000)
  .should("be.visible")
  .and("have.attr", "src", "https://acciojob.com/")
  .invoke('css', 'width')
  .should('equal', '800px');