/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEnglishSentenceInput = {
  id?: string | null,
  sentence?: string | null,
  audioUrl?: string | null,
  translation?: string | null,
  fakeWords?: Array< string | null > | null,
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

export type ModelEnglishLevelInput = {
  eq?: EnglishLevel | null,
  ne?: EnglishLevel | null,
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

export type ModelEnglishSentenceConnection = {
  __typename: "ModelEnglishSentenceConnection",
  items:  Array<EnglishSentence | null >,
  nextToken?: string | null,
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
