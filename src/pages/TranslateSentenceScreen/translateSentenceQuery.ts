import { gql } from "@apollo/client";

export const englishSentenceQuery = gql`
  query getEnglishSentences {
    listEnglishSentences(filter: { level: { eq: B1 } }) {
      items {
        level
        id
        fakeWords
        sentence
        audioUrl
        createdAt
      }
    }
  }
`;
