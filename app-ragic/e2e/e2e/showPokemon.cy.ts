describe("route '/pokemon/:pokemon_id'", () => {

  beforeEach(() => {
    cy.visit("/pokemon/1")
  })

  it("should show the Single Pokemon Info Page", () => {
    cy.get("h1").contains("Showing")
  })

  it("should correctly grab the index information from the URL", () => {
    cy.get("h1").contains("Bulbasaur")
  })
})
