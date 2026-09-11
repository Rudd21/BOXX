export const mutations = /* GraphQL */ `
  type Mutation {
    # /register & /login
    register(input: RegisterInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!

    # /profile/settings
    updateProfile(input: UpdateProfileInput!): User!

    # /item/create & /item/:id/edit
    createItem(input: CreateItemInput!): Item!
    updateItem(id: ID!, input: UpdateItemInput!): Item!
    deleteItem(id: ID!): Boolean!

    # Створення чату при натисканні "Написати продавцю" на сторінці /item/:id
    startChat(itemId: ID!): Chat!
    
    # Відправка повідомлення в /chat/:id
    sendMessage(chatId: ID!, text: String!): ChatMessage!

    # Створення замовлення (Купити товар)
    createOrder(itemId: ID!): Order!
    updateOrderStatus(orderId: ID!, status: OrderStatus!): Order!
  }
`