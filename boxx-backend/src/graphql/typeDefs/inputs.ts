export const inputTypes = /* GraphQL */ `
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    city: String
    phoneNumber: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UpdateProfileInput {
    username: String
    city: String
    phoneNumber: String
  }

  input CreateItemInput {
    title: String!
    description: String!
    price: Float!
    categoryId: ID!
    city: String!
    images: [String!]!
  }

  input UpdateItemInput {
    title: String
    description: String
    price: Float
    categoryId: ID
    city: String
    images: [String!]
  }
`