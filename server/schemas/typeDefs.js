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
        street: String
        city: String
        state : String
        zipCode: Int
    }

    type Query {
        products(name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
    }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, street: String!, city: String!, state: String!, zipCode: Int!): Auth
    
    addOrder(products: [ID]!): Order}
 
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!, street: String!, city: String!, state: String!, zipCode: Int!): User
    
    updateProduct(_id: ID!, name: String! description: String!, price: Int!): Product
    
    login(email: String!, password: String!): Auth
`;

module.exports = typeDefs;
