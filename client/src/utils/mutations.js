import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`

export const ADD_LEARN_SKILL = gql`
  mutation addLearnSkill($learnSkill: String!) {
    addLearnSkill(learnSkill: $learnSkill) {
      email
      learnSkill {
        name
      }
    }
  }
`

export const ADD_TEACH_SKILL = gql`
  mutation addTeachSkill(
    $teachSkill: String!
    $classLength: String!
    $description: String!
  ) {
    addTeachSkill(
      teachSkill: $teachSkill
      classLength: $classLength
      description: $description
    ) {
      _id
      username
    }
  }
`
export const ADD_CLASS_TIME = gql`
  mutation addClass($classId: ID!) {
    addClass(classId: $classId) {
      nextClass {
        _id
        startTime
        endTime
      }
    }
  }
`
export const REMOVE_SKILL = gql`
  mutation Mutation($skillId: ID!) {
    removeTeachSkill(skillId: $skillId) {
      username
      email
    }
  }
`
// export const REMOVE_SKILL = gql`
//   mutation removeTeachSkill($skillId: ID!) {
//     removeTeachSkill(skillId: $skillId) {
//       _id
//       name
//       skills
//     }
//   }
// `
