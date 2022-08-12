import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query Me {
    me {
      name
      email
      teachSkill {
        name
      }
      learnSkill {
        name
      }
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
