export const types = /* GraphQL */ `
  enum OrderStatus {
    PENDING
    PAID
    SHIPPED
    CANCELLED
  }

  type User {
    id: ID!
    username: String!
    email: String!
    phoneNumber: String
    city: String
    createdAt: String!
  }

  type Category {
    id: ID!
    name: String!
    slug: String!
    icon: String
  }

  type Item {
    id: ID!
    title: String!
    description: String
    price: Float!
    views: Int!
    city: String!
    images: [String!]!
    category: Category!
    seller: User!
    createdAt: String!
  }

  type ChatMessage {
    id: ID!
    sender: User!
    text: String!
    createdAt: String!
  }

  type Chat {
    id: ID!
    item: Item!
    buyer: User!
    seller: User!
    messages: [ChatMessage!]!
    updatedAt: String!
  }

  type Order {
    id: ID!
    item: Item!
    buyer: User!
    seller: User!
    status: OrderStatus!
    amount: Float!
    invoiceUrl: String
    createdAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;