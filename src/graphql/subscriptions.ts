/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEnglishSentence = /* GraphQL */ `subscription OnCreateEnglishSentence(
  $filter: ModelSubscriptionEnglishSentenceFilterInput
) {
  onCreateEnglishSentence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEnglishSentenceSubscriptionVariables,
  APITypes.OnCreateEnglishSentenceSubscription
>;
export const onUpdateEnglishSentence = /* GraphQL */ `subscription OnUpdateEnglishSentence(
  $filter: ModelSubscriptionEnglishSentenceFilterInput
) {
  onUpdateEnglishSentence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEnglishSentenceSubscriptionVariables,
  APITypes.OnUpdateEnglishSentenceSubscription
>;
export const onDeleteEnglishSentence = /* GraphQL */ `subscription OnDeleteEnglishSentence(
  $filter: ModelSubscriptionEnglishSentenceFilterInput
) {
  onDeleteEnglishSentence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEnglishSentenceSubscriptionVariables,
  APITypes.OnDeleteEnglishSentenceSubscription
>;
