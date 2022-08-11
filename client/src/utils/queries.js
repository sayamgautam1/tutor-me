import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
    }
  }
`

export const QUERY_SKILLS = gql`
  query Skills {
    skills {
      name
      teacher
    }
  }
`
