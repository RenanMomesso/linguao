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
