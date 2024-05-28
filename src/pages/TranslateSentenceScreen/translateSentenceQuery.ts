import { gql } from "@apollo/client";

export const englishSentenceQuery = gql`
  query getEnglishSentences {
    listEnglishSentences(limit: 1) {
      items {
        level
        id
        fakeWords
        sentence
        audioUrl
        createdAt
        translation
      }
    }
  }
`;
