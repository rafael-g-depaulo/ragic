describe("route '/type/'", () => {
  beforeEach(() => {
    cy.visit("/type")
  })

  it("shouldn't show any pages with a non-concrete route", () => {
    cy.get("div#root").should("be.empty")
  })
})
