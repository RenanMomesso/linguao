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


export const CREATE_WORDLIST = gql`
  mutation CreateWordList($input: CreateWordListInput!) {
    createWordList(input: $input) {
      id
      name
      words {
        items {
          id
          word
          translation
        }
      }
    }
  }
`;
