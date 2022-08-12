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
