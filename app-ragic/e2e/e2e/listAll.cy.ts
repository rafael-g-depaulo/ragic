describe("route '/pokemon/'", () => {
  beforeEach(() => {
    cy.visit("/pokemon")
  })

  it("should show the List All Pokemon Page", () => {
    cy.get("h1").contains("List all Pokemon")
  })

  it.only("should have links for the individual pokemon pages", () => {
    cy.get("h3")
      .contains("Bulbasaur")
      .closest("a")
      .should("have.attr", "href", "/pokemon/1")
      .click()

    cy.url().should("match", /\pokemon\/1$/)
  })
})
