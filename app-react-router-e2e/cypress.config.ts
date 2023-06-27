import { defineConfig } from 'cypress'
import { appendFile } from 'fs/promises'

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "src/e2e/*cy.ts"
  },
})