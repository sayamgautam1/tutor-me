const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    name: String
    teachSkill: [Skill]
    learnSkill: [Skill]
    nextClass: [ClassTime]
  }

  type Skill {
    _id: ID
    name: String
    classLength: Int
    teacher: [User]
    students: [User]
    availTimes: [ClassTime]
  }
  type ClassTime {
    _id: ID
    startTime: String
    endTime: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    skills: [Skill]
    skill(skillId: ID!): Skill
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addLearnSkill(learnSkill: String!): User
    addTeachSkill(
      teachSkill: String!
      classLength: String!
      description: String!
    ): User
    addClass(classId: ID!): User
    removeTeachSkill(skillId: ID!): User
    removeLearnSkill(skillId: ID!): User
    removeClass(classId: ID!): User
  }
`;

module.exports = typeDefs;
