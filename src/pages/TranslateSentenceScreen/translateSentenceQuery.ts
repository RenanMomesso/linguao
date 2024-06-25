import { gql } from "@apollo/client";

export const englishSentenceQuery = gql`
  query getEnglishSentences {
    listEnglishSentences(limit: 10) {
      items {
        level
        id
        fakeWords
        sentence
        imageUrl
        createdAt
        translation
        fakeSentences
      }
    }
  }
`;
