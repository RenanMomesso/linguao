import { gql } from "@apollo/client";

export const LIST_WORDS_QUERY = gql`
  query listWordLists {
    listWordLists {
      items {
        Words {
          items {
            word
            languange
            translatedWord
          }
        }
      }
    }
  }
`;
