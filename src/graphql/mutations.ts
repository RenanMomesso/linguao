/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createEnglishSentence = /* GraphQL */ `mutation CreateEnglishSentence(
  $input: CreateEnglishSentenceInput!
  $condition: ModelEnglishSentenceConditionInput
) {
  createEnglishSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEnglishSentenceMutationVariables,
  APITypes.CreateEnglishSentenceMutation
>;
export const updateEnglishSentence = /* GraphQL */ `mutation UpdateEnglishSentence(
  $input: UpdateEnglishSentenceInput!
  $condition: ModelEnglishSentenceConditionInput
) {
  updateEnglishSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEnglishSentenceMutationVariables,
  APITypes.UpdateEnglishSentenceMutation
>;
export const deleteEnglishSentence = /* GraphQL */ `mutation DeleteEnglishSentence(
  $input: DeleteEnglishSentenceInput!
  $condition: ModelEnglishSentenceConditionInput
) {
  deleteEnglishSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEnglishSentenceMutationVariables,
  APITypes.DeleteEnglishSentenceMutation
>;
