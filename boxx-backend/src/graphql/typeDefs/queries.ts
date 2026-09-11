export const queries = /* GraphQL */ `
  type Query {
  # / — Головна сторінка
  getHomeData: HomeDataPayload!

  # /catalog та /catalog?cat={}&q={}
  getCatalog(
    categoryId: ID
    searchQuery: String
    limit: Int = 20
    offset: Int = 0
  ): [Item!]!

  # /item/:id
  getItemById(id: ID!): Item

  # /profile/:id
  getUserProfile(id: ID!): User

  # /profile/settings та поточний сеанс
  getCurrentUser: User

  # /chat — Всі чати поточного авторизованого юзера
  getMyChats: [Chat!]!

  # /chat/:id — Конкретний чат із повідомленнями
  getChatById(id: ID!): Chat

  # /order/:id
  getOrderById(id: ID!): Order

  # /order/history
  getOrderHistory: [Order!]!
}

type HomeDataPayload {
  categories: [Category!]!
  topItems: [Item!]!
}
`