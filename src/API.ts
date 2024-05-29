/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWordInput = {
  id?: string | null,
  languange?: string | null,
  portuguese?: string | null,
  wordlistID: string,
};

export type ModelWordConditionInput = {
  languange?: ModelStringInput | null,
  portuguese?: ModelStringInput | null,
  wordlistID?: ModelIDInput | null,
  and?: Array< ModelWordConditionInput | null > | null,
  or?: Array< ModelWordConditionInput | null > | null,
  not?: ModelWordConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Word = {
  __typename: "Word",
  id: string,
  languange?: string | null,
  portuguese?: string | null,
  wordlistID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWordInput = {
  id: string,
  languange?: string | null,
  portuguese?: string | null,
  wordlistID?: string | null,
};

export type DeleteWordInput = {
  id: string,
};

export type CreateWordListInput = {
  id?: string | null,
  level?: EnglishLevel | null,
};

export enum EnglishLevel {
  C1 = "C1",
  C2 = "C2",
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
}


export type ModelWordListConditionInput = {
  level?: ModelEnglishLevelInput | null,
  and?: Array< ModelWordListConditionInput | null > | null,
  or?: Array< ModelWordListConditionInput | null > | null,
  not?: ModelWordListConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelEnglishLevelInput = {
  eq?: EnglishLevel | null,
  ne?: EnglishLevel | null,
};

export type WordList = {
  __typename: "WordList",
  id: string,
  level?: EnglishLevel | null,
  Words?: ModelWordConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelWordConnection = {
  __typename: "ModelWordConnection",
  items:  Array<Word | null >,
  nextToken?: string | null,
};

export type UpdateWordListInput = {
  id: string,
  level?: EnglishLevel | null,
};

export type DeleteWordListInput = {
  id: string,
};

export type CreateEnglishSentenceInput = {
  id?: string | null,
  sentence?: string | null,
  audioUrl?: string | null,
  translation?: string | null,
  fakeWords?: Array< string | null > | null,
  level?: EnglishLevel | null,
};

export type ModelEnglishSentenceConditionInput = {
  sentence?: ModelStringInput | null,
  audioUrl?: ModelStringInput | null,
  translation?: ModelStringInput | null,
  fakeWords?: ModelStringInput | null,
  level?: ModelEnglishLevelInput | null,
  and?: Array< ModelEnglishSentenceConditionInput | null > | null,
  or?: Array< ModelEnglishSentenceConditionInput | null > | null,
  not?: ModelEnglishSentenceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type EnglishSentence = {
  __typename: "EnglishSentence",
  id: string,
  sentence?: string | null,
  audioUrl?: string | null,
  translation?: string | null,
  fakeWords?: Array< string | null > | null,
  level?: EnglishLevel | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEnglishSentenceInput = {
  id: string,
  sentence?: string | null,
  audioUrl?: string | null,
  translation?: string | null,
  fakeWords?: Array< string | null > | null,
  level?: EnglishLevel | null,
};

export type DeleteEnglishSentenceInput = {
  id: string,
};

export type ModelWordFilterInput = {
  id?: ModelIDInput | null,
  languange?: ModelStringInput | null,
  portuguese?: ModelStringInput | null,
  wordlistID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWordFilterInput | null > | null,
  or?: Array< ModelWordFilterInput | null > | null,
  not?: ModelWordFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelWordListFilterInput = {
  id?: ModelIDInput | null,
  level?: ModelEnglishLevelInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWordListFilterInput | null > | null,
  or?: Array< ModelWordListFilterInput | null > | null,
  not?: ModelWordListFilterInput | null,
};

export type ModelWordListConnection = {
  __typename: "ModelWordListConnection",
  items:  Array<WordList | null >,
  nextToken?: string | null,
};

export type ModelEnglishSentenceFilterInput = {
  id?: ModelIDInput | null,
  sentence?: ModelStringInput | null,
  audioUrl?: ModelStringInput | null,
  translation?: ModelStringInput | null,
  fakeWords?: ModelStringInput | null,
  level?: ModelEnglishLevelInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEnglishSentenceFilterInput | null > | null,
  or?: Array< ModelEnglishSentenceFilterInput | null > | null,
  not?: ModelEnglishSentenceFilterInput | null,
};

export type ModelEnglishSentenceConnection = {
  __typename: "ModelEnglishSentenceConnection",
  items:  Array<EnglishSentence | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionWordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  languange?: ModelSubscriptionStringInput | null,
  portuguese?: ModelSubscriptionStringInput | null,
  wordlistID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWordFilterInput | null > | null,
  or?: Array< ModelSubscriptionWordFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWordListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  level?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWordListFilterInput | null > | null,
  or?: Array< ModelSubscriptionWordListFilterInput | null > | null,
};

export type ModelSubscriptionEnglishSentenceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sentence?: ModelSubscriptionStringInput | null,
  audioUrl?: ModelSubscriptionStringInput | null,
  translation?: ModelSubscriptionStringInput | null,
  fakeWords?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnglishSentenceFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnglishSentenceFilterInput | null > | null,
};

export type CreateWordMutationVariables = {
  input: CreateWordInput,
  condition?: ModelWordConditionInput | null,
};

export type CreateWordMutation = {
  createWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWordMutationVariables = {
  input: UpdateWordInput,
  condition?: ModelWordConditionInput | null,
};

export type UpdateWordMutation = {
  updateWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWordMutationVariables = {
  input: DeleteWordInput,
  condition?: ModelWordConditionInput | null,
};

export type DeleteWordMutation = {
  deleteWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWordListMutationVariables = {
  input: CreateWordListInput,
  condition?: ModelWordListConditionInput | null,
};

export type CreateWordListMutation = {
  createWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWordListMutationVariables = {
  input: UpdateWordListInput,
  condition?: ModelWordListConditionInput | null,
};

export type UpdateWordListMutation = {
  updateWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWordListMutationVariables = {
  input: DeleteWordListInput,
  condition?: ModelWordListConditionInput | null,
};

export type DeleteWordListMutation = {
  deleteWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEnglishSentenceMutationVariables = {
  input: CreateEnglishSentenceInput,
  condition?: ModelEnglishSentenceConditionInput | null,
};

export type CreateEnglishSentenceMutation = {
  createEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEnglishSentenceMutationVariables = {
  input: UpdateEnglishSentenceInput,
  condition?: ModelEnglishSentenceConditionInput | null,
};

export type UpdateEnglishSentenceMutation = {
  updateEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEnglishSentenceMutationVariables = {
  input: DeleteEnglishSentenceInput,
  condition?: ModelEnglishSentenceConditionInput | null,
};

export type DeleteEnglishSentenceMutation = {
  deleteEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWordQueryVariables = {
  id: string,
};

export type GetWordQuery = {
  getWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWordsQueryVariables = {
  filter?: ModelWordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWordsQuery = {
  listWords?:  {
    __typename: "ModelWordConnection",
    items:  Array< {
      __typename: "Word",
      id: string,
      languange?: string | null,
      portuguese?: string | null,
      wordlistID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type WordsByWordlistIDQueryVariables = {
  wordlistID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WordsByWordlistIDQuery = {
  wordsByWordlistID?:  {
    __typename: "ModelWordConnection",
    items:  Array< {
      __typename: "Word",
      id: string,
      languange?: string | null,
      portuguese?: string | null,
      wordlistID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWordListQueryVariables = {
  id: string,
};

export type GetWordListQuery = {
  getWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWordListsQueryVariables = {
  filter?: ModelWordListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWordListsQuery = {
  listWordLists?:  {
    __typename: "ModelWordListConnection",
    items:  Array< {
      __typename: "WordList",
      id: string,
      level?: EnglishLevel | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnglishSentenceQueryVariables = {
  id: string,
};

export type GetEnglishSentenceQuery = {
  getEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEnglishSentencesQueryVariables = {
  filter?: ModelEnglishSentenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnglishSentencesQuery = {
  listEnglishSentences?:  {
    __typename: "ModelEnglishSentenceConnection",
    items:  Array< {
      __typename: "EnglishSentence",
      id: string,
      sentence?: string | null,
      audioUrl?: string | null,
      translation?: string | null,
      fakeWords?: Array< string | null > | null,
      level?: EnglishLevel | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWordSubscriptionVariables = {
  filter?: ModelSubscriptionWordFilterInput | null,
};

export type OnCreateWordSubscription = {
  onCreateWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWordSubscriptionVariables = {
  filter?: ModelSubscriptionWordFilterInput | null,
};

export type OnUpdateWordSubscription = {
  onUpdateWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWordSubscriptionVariables = {
  filter?: ModelSubscriptionWordFilterInput | null,
};

export type OnDeleteWordSubscription = {
  onDeleteWord?:  {
    __typename: "Word",
    id: string,
    languange?: string | null,
    portuguese?: string | null,
    wordlistID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWordListSubscriptionVariables = {
  filter?: ModelSubscriptionWordListFilterInput | null,
};

export type OnCreateWordListSubscription = {
  onCreateWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWordListSubscriptionVariables = {
  filter?: ModelSubscriptionWordListFilterInput | null,
};

export type OnUpdateWordListSubscription = {
  onUpdateWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWordListSubscriptionVariables = {
  filter?: ModelSubscriptionWordListFilterInput | null,
};

export type OnDeleteWordListSubscription = {
  onDeleteWordList?:  {
    __typename: "WordList",
    id: string,
    level?: EnglishLevel | null,
    Words?:  {
      __typename: "ModelWordConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnglishSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionEnglishSentenceFilterInput | null,
};

export type OnCreateEnglishSentenceSubscription = {
  onCreateEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnglishSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionEnglishSentenceFilterInput | null,
};

export type OnUpdateEnglishSentenceSubscription = {
  onUpdateEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnglishSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionEnglishSentenceFilterInput | null,
};

export type OnDeleteEnglishSentenceSubscription = {
  onDeleteEnglishSentence?:  {
    __typename: "EnglishSentence",
    id: string,
    sentence?: string | null,
    audioUrl?: string | null,
    translation?: string | null,
    fakeWords?: Array< string | null > | null,
    level?: EnglishLevel | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
