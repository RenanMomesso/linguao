/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getEnglishSentence = /* GraphQL */ `query GetEnglishSentence($id: ID!) {
  getEnglishSentence(id: $id) {
    id
    sentence
    audioUrl
    translation
    fakeWords
    level
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEnglishSentenceQueryVariables,
  APITypes.GetEnglishSentenceQuery
>;
export const listEnglishSentences = /* GraphQL */ `query ListEnglishSentences(
  $filter: ModelEnglishSentenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnglishSentences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sentence
      audioUrl
      translation
      fakeWords
      level
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEnglishSentencesQueryVariables,
  APITypes.ListEnglishSentencesQuery
>;
