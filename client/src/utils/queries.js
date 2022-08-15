import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      teachSkill {
        name
        teacher
      }
      learnSkill {
        name
        teacher
      }
    }
  }
`;
export const QUERY_SKILLS = gql`
  query Skills {
    skills {
      teacher
      name
      _id
      classLength
    }
  }
`;
