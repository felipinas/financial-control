# Finance Control

A Node API to control your finances.

# Functional Requirements

- [x] The user must be able to create a new transaction.
- [x] The user must be able to obtain a summary of their account.
- [x] The user must be able to list all transactions that have occurred.
- [x] The user must be able to view a single transaction.

# Business Rules

- [x] The transaction can be of the credit type (will add to the value) or debit type (will subtract).
- [ ] It should be possible to identify the user between requests.
- [ ] The user can only view transactions that they have created.

# Stack

- Node.js with TypeScript
- Fastify
- SQLite and Knex.js
- Zod
