const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    name: String
    age: Int
    city: String
    teachSkill: [Skill]
    learnSkill: [Skill]
  }

  type Skill {
    _id: ID
    name: String
    classLength: Int
    teacher: String
    students: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    skills: [Skill]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addLearnSkill(learnSkill: String!): User
  }
`;

module.exports = typeDefs;
