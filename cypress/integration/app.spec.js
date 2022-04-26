/* eslint-disable mocha/no-exclusive-tests */
describe('React TodoMVC', () => {

  const TODO_ITEM_ONE = "Sleep for 16 hours"
  const TODO_ITEM_TWO = "Remember to eat"
  const TODO_ITEM_THREE = "See if u need a shower"

  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })

  it('adds a single todo', () => {

    // * Tell cypress where to go
    // cy.visit('http://localhost:8888')

    // * Adding Todo
    // cy.get('.new-todo') // to get html element by class name
      // .type('Have a shower{enter}') // to type in & {hitKeyName}

    // ! Adding a second todo
    // cy.get(".new-todo")
    //   .type("Pay Rent{enter}")
    //   .type("Have a shower{enter}") // Chaining type()'s

    // ? Adding todo
    cy.get(".new-todo").type("Buy Milk{enter}")

    // * Confirm todo was added
    cy.get(".todo-list li").should("have.length", 1)

  })

  it("should append new items to the bottom of the list", () => {
    cy.createDefaultTodos().as('todo-count')
    cy.get('@todo-count').eq(0).find('label').contains(TODO_ITEM_ONE)
    cy.get('@todo-count').eq(1).find('label').contains(TODO_ITEM_TWO)
    cy.get('@todo-count').eq(2).find('label').contains(TODO_ITEM_THREE)

  })



  it("adds three todos", () => {
    cy.createDefaultTodos().as('todos') // name our alias

    // use alias with @aliasName
    cy.get('@todos').should("have.length", 3)
  })


  it("does NOT display the footer|todo-list when there are no todos", () => {
    cy.get(".todo-list").should("not.exist")
    cy.get(".footer").should("not.exist")
  })


});