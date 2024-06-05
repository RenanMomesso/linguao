/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    languageLevel
    language
    nativeLanguage
    age
    email
    languagePurpose
    timePerDay
    avatar
    challenges
    diamonds
    followers
    following
    lifetimeexp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      languageLevel
      language
      nativeLanguage
      age
      email
      languagePurpose
      timePerDay
      avatar
      challenges
      diamonds
      followers
      following
      lifetimeexp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSentence = /* GraphQL */ `query GetSentence($id: ID!) {
  getSentence(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSentenceQueryVariables,
  APITypes.GetSentenceQuery
>;
export const listSentences = /* GraphQL */ `query ListSentences(
  $filter: ModelSentenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSentences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      phrase
      language
      level
      fakeSentence
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSentencesQueryVariables,
  APITypes.ListSentencesQuery
>;
export const getWord = /* GraphQL */ `query GetWord($id: ID!) {
  getWord(id: $id) {
    id
    languange
    portuguese
    wordlistID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetWordQueryVariables, APITypes.GetWordQuery>;
export const listWords = /* GraphQL */ `query ListWords(
  $filter: ModelWordFilterInput
  $limit: Int
  $nextToken: String
) {
  listWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      languange
      portuguese
      wordlistID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListWordsQueryVariables, APITypes.ListWordsQuery>;
export const wordsByWordlistID = /* GraphQL */ `query WordsByWordlistID(
  $wordlistID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelWordFilterInput
  $limit: Int
  $nextToken: String
) {
  wordsByWordlistID(
    wordlistID: $wordlistID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      languange
      portuguese
      wordlistID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WordsByWordlistIDQueryVariables,
  APITypes.WordsByWordlistIDQuery
>;
export const getWordList = /* GraphQL */ `query GetWordList($id: ID!) {
  getWordList(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWordListQueryVariables,
  APITypes.GetWordListQuery
>;
export const listWordLists = /* GraphQL */ `query ListWordLists(
  $filter: ModelWordListFilterInput
  $limit: Int
  $nextToken: String
) {
  listWordLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
  APITypes.ListWordListsQueryVariables,
  APITypes.ListWordListsQuery
>;
export const getEnglishSentence = /* GraphQL */ `query GetEnglishSentence($id: ID!) {
  getEnglishSentence(id: $id) {
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
      fakeSentences
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
