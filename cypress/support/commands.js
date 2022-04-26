const TODO_ITEM_ONE = "Sleep for 16 hours"
const TODO_ITEM_TWO = "Remember to eat"
const TODO_ITEM_THREE = "See if u need a shower"

Cypress.Commands.add('createDefaultTodos', () => {

  // To print a message at the top of the test body and
  // log into the console a bit of context of what going on

  // ? Save Command log inside a variable to use aliases
  let cmd = Cypress.log({
    name: "create default todos",
    consoleProps() {
      return {
        "Inserted Todos": [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE],
      }
    },
  })

  cy.get('.new-todo', { log: false })
    .type(`${TODO_ITEM_ONE}{enter}`, { log: false })
    .type(`${TODO_ITEM_TWO}{enter}`, { log: false })
    .type(`${TODO_ITEM_THREE}{enter}`, { log: false })

  // Setting alias with our li items
  cy.get('.todo-list li', { log: false }).then((listItems) => {
    cmd.set({ el: listItems }) // to set variables in the alias
      .snapshot() // to take a snapshot
      .end() // tell cy we the command is finished
  })

})