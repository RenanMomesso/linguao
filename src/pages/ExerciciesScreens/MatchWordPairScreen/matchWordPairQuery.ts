import { gql } from "@apollo/client";

export const wordListsQuery = gql`
  query getWordsList {
    listWordLists(limit: 1, filter: { level: { eq: B1 } }) {
      items {
        id
        level
        Words {
          items {
            id
            languange
            portuguese
            wordlistID
          }
        }
      }
    }
  }
`;
