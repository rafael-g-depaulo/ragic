describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('test01', () => {
  it('Opens the home page', () =>{
    cy.visit('google.com')
  })
})