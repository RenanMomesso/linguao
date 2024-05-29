/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createWord = /* GraphQL */ `mutation CreateWord(
  $input: CreateWordInput!
  $condition: ModelWordConditionInput
) {
  createWord(input: $input, condition: $condition) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWordMutationVariables,
  APITypes.CreateWordMutation
>;
export const updateWord = /* GraphQL */ `mutation UpdateWord(
  $input: UpdateWordInput!
  $condition: ModelWordConditionInput
) {
  updateWord(input: $input, condition: $condition) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWordMutationVariables,
  APITypes.UpdateWordMutation
>;
export const deleteWord = /* GraphQL */ `mutation DeleteWord(
  $input: DeleteWordInput!
  $condition: ModelWordConditionInput
) {
  deleteWord(input: $input, condition: $condition) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWordMutationVariables,
  APITypes.DeleteWordMutation
>;
export const createWordList = /* GraphQL */ `mutation CreateWordList(
  $input: CreateWordListInput!
  $condition: ModelWordListConditionInput
) {
  createWordList(input: $input, condition: $condition) {
    id
    level
    Words {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWordListMutationVariables,
  APITypes.CreateWordListMutation
>;
export const updateWordList = /* GraphQL */ `mutation UpdateWordList(
  $input: UpdateWordListInput!
  $condition: ModelWordListConditionInput
) {
  updateWordList(input: $input, condition: $condition) {
    id
    level
    Words {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWordListMutationVariables,
  APITypes.UpdateWordListMutation
>;
export const deleteWordList = /* GraphQL */ `mutation DeleteWordList(
  $input: DeleteWordListInput!
  $condition: ModelWordListConditionInput
) {
  deleteWordList(input: $input, condition: $condition) {
    id
    level
    Words {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWordListMutationVariables,
  APITypes.DeleteWordListMutation
>;
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
