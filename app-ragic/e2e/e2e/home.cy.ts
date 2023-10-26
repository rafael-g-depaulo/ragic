describe("route '/'", () => {
  beforeEach(() => cy.visit("/"))

  it("should show the Home Page", () => {
    // path should show correct page.
    cy.get("h1").contains("Home Page")
  })

  it("should have link to pokemon list page", () => {
    // link should exist and point to correct page
    cy.get("a")
      .contains("All Pokemon")
      .should("have.attr", "href", "/pokemon/")
      .click()

    cy.url().should("match", /\/pokemon\/?$/)
  })

  it("should have links to pokemon type pages", () => {
    // check that link exists and points to correct page
    cy.get("a")
      .contains("psychic")
      .parent()
      .should("have.attr", "href", "/type/14")
      .click()

    cy.url().should("match", /\/type\/14$/)
  })
})
