describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('test01', () => {
  it('Opens the home page', () =>{
    cy.visit('http://localhost:3000/home')
  })
})

describe('test02', () => {
  it('Clicks button "card" and visits the card page', () => {
    cy.visit('http://localhost:3000/home')

    cy.contains('Card').click()

    cy.url().should('include', '/card')
  })
})