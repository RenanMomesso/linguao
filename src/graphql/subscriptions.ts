/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSentence = /* GraphQL */ `subscription OnCreateSentence($filter: ModelSubscriptionSentenceFilterInput) {
  onCreateSentence(filter: $filter) {
    id
    phrase
    language
    level
    fakeSentence
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSentenceSubscriptionVariables,
  APITypes.OnCreateSentenceSubscription
>;
export const onUpdateSentence = /* GraphQL */ `subscription OnUpdateSentence($filter: ModelSubscriptionSentenceFilterInput) {
  onUpdateSentence(filter: $filter) {
    id
    phrase
    language
    level
    fakeSentence
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSentenceSubscriptionVariables,
  APITypes.OnUpdateSentenceSubscription
>;
export const onDeleteSentence = /* GraphQL */ `subscription OnDeleteSentence($filter: ModelSubscriptionSentenceFilterInput) {
  onDeleteSentence(filter: $filter) {
    id
    phrase
    language
    level
    fakeSentence
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSentenceSubscriptionVariables,
  APITypes.OnDeleteSentenceSubscription
>;
export const onCreateWord = /* GraphQL */ `subscription OnCreateWord($filter: ModelSubscriptionWordFilterInput) {
  onCreateWord(filter: $filter) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWordSubscriptionVariables,
  APITypes.OnCreateWordSubscription
>;
export const onUpdateWord = /* GraphQL */ `subscription OnUpdateWord($filter: ModelSubscriptionWordFilterInput) {
  onUpdateWord(filter: $filter) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWordSubscriptionVariables,
  APITypes.OnUpdateWordSubscription
>;
export const onDeleteWord = /* GraphQL */ `subscription OnDeleteWord($filter: ModelSubscriptionWordFilterInput) {
  onDeleteWord(filter: $filter) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWordSubscriptionVariables,
  APITypes.OnDeleteWordSubscription
>;
export const onCreateWordList = /* GraphQL */ `subscription OnCreateWordList($filter: ModelSubscriptionWordListFilterInput) {
  onCreateWordList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWordListSubscriptionVariables,
  APITypes.OnCreateWordListSubscription
>;
export const onUpdateWordList = /* GraphQL */ `subscription OnUpdateWordList($filter: ModelSubscriptionWordListFilterInput) {
  onUpdateWordList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWordListSubscriptionVariables,
  APITypes.OnUpdateWordListSubscription
>;
export const onDeleteWordList = /* GraphQL */ `subscription OnDeleteWordList($filter: ModelSubscriptionWordListFilterInput) {
  onDeleteWordList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWordListSubscriptionVariables,
  APITypes.OnDeleteWordListSubscription
>;
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
    fakeSentences
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
    fakeSentences
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
    fakeSentences
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEnglishSentenceSubscriptionVariables,
  APITypes.OnDeleteEnglishSentenceSubscription
>;
