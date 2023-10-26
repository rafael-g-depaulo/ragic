describe("route /type/:type_id", () => {
  beforeEach(() => {
    cy.visit("/type/14")
  })

  it("should show the Pokemon List by Type Page", () => {
    cy.get("h1").get("span").parent().contains("Pokemon")
  })

  it("should correctly extract the index information from URL", () => {
    cy.get("h1").contains("psychic")
  })
})
