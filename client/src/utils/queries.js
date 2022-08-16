import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query Me {
    me {
      username
      email
      teachSkill {
        _id
        name
        classLength
      }
      learnSkill {
        _id
        name
        classLength
      }
    }
  }
`
export const QUERY_SKILLS = gql`
  query Skills {
    skills {
      _id
      name
      classLength
      teacher {
        username
        _id
      }
      students {
        username
        email
        _id
      }
    }
  }
`

export const QUERY_SINGLE_SKILL = gql`
  query Query($skillId: ID!) {
    skill(skillId: $skillId) {
      _id
      name
      classLength
      teacher {
        username
        email
      }
      availTimes {
        startTime
        endTime
        _id
      }
    }
  }
`
