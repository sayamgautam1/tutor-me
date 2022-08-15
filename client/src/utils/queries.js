import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      username
      email
      teachSkill {
        _id
        name
        teacher {
          username
        }
      }
      learnSkill {
        _id
        name
        teacher {
          username
        }
      }
    }
  }
`;
export const QUERY_SKILLS = gql`
  query Skills {
    skills {
      _id
      name
      classLength
      teacher {
        username
      }
      students {
        username
        email
      }
    }
  }
`;

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
    }
  }
`;
