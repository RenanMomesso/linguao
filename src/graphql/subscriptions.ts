/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
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
    word
    translatedWord
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
    word
    translatedWord
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
    word
    translatedWord
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
    name
    Words {
      items {
        id
        languange
        word
        translatedWord
        wordlistID
        createdAt
        updatedAt
        __typename
      }
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
    name
    Words {
      items {
        id
        languange
        word
        translatedWord
        wordlistID
        createdAt
        updatedAt
        __typename
      }
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
    name
    Words {
      items {
        id
        languange
        word
        translatedWord
        wordlistID
        createdAt
        updatedAt
        __typename
      }
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
    type
    imageUrl
    translation
    fakeWords
    level
    fakeSentences
    language
    category
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
    type
    imageUrl
    translation
    fakeWords
    level
    fakeSentences
    language
    category
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
    type
    imageUrl
    translation
    fakeWords
    level
    fakeSentences
    language
    category
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEnglishSentenceSubscriptionVariables,
  APITypes.OnDeleteEnglishSentenceSubscription
>;
export const onCreateImageMapModal = /* GraphQL */ `subscription OnCreateImageMapModal(
  $filter: ModelSubscriptionImageMapModalFilterInput
) {
  onCreateImageMapModal(filter: $filter) {
    id
    imageUrl
    items {
      items {
        id
        shape
        x1
        y1
        x2
        y2
        width
        height
        radius
        fill
        prefill
        name
        imageMapModalID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateImageMapModalSubscriptionVariables,
  APITypes.OnCreateImageMapModalSubscription
>;
export const onUpdateImageMapModal = /* GraphQL */ `subscription OnUpdateImageMapModal(
  $filter: ModelSubscriptionImageMapModalFilterInput
) {
  onUpdateImageMapModal(filter: $filter) {
    id
    imageUrl
    items {
      items {
        id
        shape
        x1
        y1
        x2
        y2
        width
        height
        radius
        fill
        prefill
        name
        imageMapModalID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateImageMapModalSubscriptionVariables,
  APITypes.OnUpdateImageMapModalSubscription
>;
export const onDeleteImageMapModal = /* GraphQL */ `subscription OnDeleteImageMapModal(
  $filter: ModelSubscriptionImageMapModalFilterInput
) {
  onDeleteImageMapModal(filter: $filter) {
    id
    imageUrl
    items {
      items {
        id
        shape
        x1
        y1
        x2
        y2
        width
        height
        radius
        fill
        prefill
        name
        imageMapModalID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteImageMapModalSubscriptionVariables,
  APITypes.OnDeleteImageMapModalSubscription
>;
export const onCreateImageMapItem = /* GraphQL */ `subscription OnCreateImageMapItem(
  $filter: ModelSubscriptionImageMapItemFilterInput
) {
  onCreateImageMapItem(filter: $filter) {
    id
    shape
    x1
    y1
    x2
    y2
    width
    height
    radius
    fill
    prefill
    name
    imageMapModalID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateImageMapItemSubscriptionVariables,
  APITypes.OnCreateImageMapItemSubscription
>;
export const onUpdateImageMapItem = /* GraphQL */ `subscription OnUpdateImageMapItem(
  $filter: ModelSubscriptionImageMapItemFilterInput
) {
  onUpdateImageMapItem(filter: $filter) {
    id
    shape
    x1
    y1
    x2
    y2
    width
    height
    radius
    fill
    prefill
    name
    imageMapModalID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateImageMapItemSubscriptionVariables,
  APITypes.OnUpdateImageMapItemSubscription
>;
export const onDeleteImageMapItem = /* GraphQL */ `subscription OnDeleteImageMapItem(
  $filter: ModelSubscriptionImageMapItemFilterInput
) {
  onDeleteImageMapItem(filter: $filter) {
    id
    shape
    x1
    y1
    x2
    y2
    width
    height
    radius
    fill
    prefill
    name
    imageMapModalID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteImageMapItemSubscriptionVariables,
  APITypes.OnDeleteImageMapItemSubscription
>;
