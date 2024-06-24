import { gql } from "@apollo/client";

export const LIST_WORDS_QUERY = gql`
  query listWordLists {
    listWordLists {
      
    
      items {
        id
        level
        Words {
          items {
            id
            word
            languange
            translatedWord
          }
        }
      }
    }
  }
`;
