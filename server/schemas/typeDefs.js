const typeDefs = `
    type Product {
        _id: ID
        name: String
        description: String
        price: Float
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type Query {
        products(name: String): [Product]
        product(_id: ID!): Product
        user(_id: ID!): User
        users: [User]
        order(_id: ID!): Order
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        updateProduct(_id: ID!, name: String!, description: String!, price: Int!): Product
        login(email: String!, password: String!): Auth
    }

    type Auth {
        token: ID!
        user: User
      }
      
`;

module.exports = typeDefs;
