import { gql } from "@apollo/client";

export const englishSentences = gql`
  query LoadSentences {
    listEnglishSentences {
      nextToken
      items {
        id
        sentence
      }
    }
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      age
      nativeLanguage
      avatar
      createdAt
    }
  }
`;
