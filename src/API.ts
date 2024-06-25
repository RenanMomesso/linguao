/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  languageLevel?: string | null,
  language?: string | null,
  nativeLanguage?: string | null,
  age?: string | null,
  email?: string | null,
  languagePurpose?: string | null,
  timePerDay?: string | null,
  avatar?: string | null,
  challenges?: string | null,
  diamonds?: string | null,
  followers?: string | null,
  following?: string | null,
  lifetimeexp?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  languageLevel?: ModelStringInput | null,
  language?: ModelStringInput | null,
  nativeLanguage?: ModelStringInput | null,
  age?: ModelStringInput | null,
  email?: ModelStringInput | null,
  languagePurpose?: ModelStringInput | null,
  timePerDay?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  challenges?: ModelStringInput | null,
  diamonds?: ModelStringInput | null,
  followers?: ModelStringInput | null,
  following?: ModelStringInput | null,
  lifetimeexp?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  name: string,
  languageLevel?: string | null,
  language?: string | null,
  nativeLanguage?: string | null,
  age?: string | null,
  email?: string | null,
  languagePurpose?: string | null,
  timePerDay?: string | null,
  avatar?: string | null,
  challenges?: string | null,
  diamonds?: string | null,
  followers?: string | null,
  following?: string | null,
  lifetimeexp?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  languageLevel?: string | null,
  language?: string | null,
  nativeLanguage?: string | null,
  age?: string | null,
  email?: string | null,
  languagePurpose?: string | null,
  timePerDay?: string | null,
  avatar?: string | null,
  challenges?: string | null,
  diamonds?: string | null,
  followers?: string | null,
  following?: string | null,
  lifetimeexp?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSentenceInput = {
  id?: string | null,
  phrase: string,
  language: Language,
  level?: EnglishLevel | null,
  fakeSentence?: string | null,
};

export enum Language {
  ENGLISH = "ENGLISH",
  PORTUGUESE = "PORTUGUESE",
  CHINESE = "CHINESE",
  GERMANY = "GERMANY",
  FRENCH = "FRENCH",
  ARABIAN = "ARABIAN",
  RUSSIAN = "RUSSIAN",
  SWEDESH = "SWEDESH",
  SPANISH = "SPANISH",
}


export enum EnglishLevel {
  C1 = "C1",
  C2 = "C2",
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
}


export type ModelSentenceConditionInput = {
  phrase?: ModelStringInput | null,
  language?: ModelLanguageInput | null,
  level?: ModelEnglishLevelInput | null,
  fakeSentence?: ModelStringInput | null,
  and?: Array< ModelSentenceConditionInput | null > | null,
  or?: Array< ModelSentenceConditionInput | null > | null,
  not?: ModelSentenceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLanguageInput = {
  eq?: Language | null,
  ne?: Language | null,
};

export type ModelEnglishLevelInput = {
  eq?: EnglishLevel | null,
  ne?: EnglishLevel | null,
};

export type Sentence = {
  __typename: "Sentence",
  id: string,
  phrase: string,
  language: Language,
  level?: EnglishLevel | null,
  fakeSentence?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSentenceInput = {
  id: string,
  phrase?: string | null,
  language?: Language | null,
  level?: EnglishLevel | null,
  fakeSentence?: string | null,
};

export type DeleteSentenceInput = {
  id: string,
};

export type CreateWordInput = {
  id?: string | null,
  languange?: Language | null,
  word?: string | null,
  translatedWord?: string | null,
  wordlistID: string,
};

export type ModelWordConditionInput = {
  languange?: ModelLanguageInput | null,
  word?: ModelStringInput | null,
  translatedWord?: ModelStringInput | null,
  wordlistID?: ModelIDInput | null,
  and?: Array< ModelWordConditionInput | null > | null,
  or?: Array< ModelWordConditionInput | null > | null,
  not?: ModelWordConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  languange?: Language | null,
  word?: string | null,
  translatedWord?: string | null,
  wordlistID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWordInput = {
  id: string,
  languange?: Language | null,
  word?: string | null,
  translatedWord?: string | null,
  wordlistID?: string | null,
};

export type DeleteWordInput = {
  id: string,
};

export type CreateWordListInput = {
  id?: string | null,
  level?: EnglishLevel | null,
  name?: string | null,
};

export type ModelWordListConditionInput = {
  level?: ModelEnglishLevelInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelWordListConditionInput | null > | null,
  or?: Array< ModelWordListConditionInput | null > | null,
  not?: ModelWordListConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type WordList = {
  __typename: "WordList",
  id: string,
  level?: EnglishLevel | null,
  name?: string | null,
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
  name?: string | null,
};

export type DeleteWordListInput = {
  id: string,
};

export type CreateEnglishSentenceInput = {
  id?: string | null,
  sentence: string,
  type: string,
  imageUrl?: string | null,
  translation: string,
  fakeWords: Array< string >,
  level: EnglishLevel,
  fakeSentences?: Array< string > | null,
  language: Language,
  category: Category,
  createdAt?: string | null,
};

export enum Category {
  VOCABULARY = "VOCABULARY",
  GRAMMAR = "GRAMMAR",
  SPEAKING = "SPEAKING",
  LISTENING = "LISTENING",
  UNTITLEDVALUE = "UNTITLEDVALUE",
}


export type ModelEnglishSentenceConditionInput = {
  sentence?: ModelStringInput | null,
  type?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  translation?: ModelStringInput | null,
  fakeWords?: ModelStringInput | null,
  level?: ModelEnglishLevelInput | null,
  fakeSentences?: ModelStringInput | null,
  language?: ModelLanguageInput | null,
  category?: ModelCategoryInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelEnglishSentenceConditionInput | null > | null,
  or?: Array< ModelEnglishSentenceConditionInput | null > | null,
  not?: ModelEnglishSentenceConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCategoryInput = {
  eq?: Category | null,
  ne?: Category | null,
};

export type EnglishSentence = {
  __typename: "EnglishSentence",
  id: string,
  sentence: string,
  type: string,
  imageUrl?: string | null,
  translation: string,
  fakeWords: Array< string >,
  level: EnglishLevel,
  fakeSentences?: Array< string > | null,
  language: Language,
  category: Category,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEnglishSentenceInput = {
  id: string,
  sentence?: string | null,
  type?: string | null,
  imageUrl?: string | null,
  translation?: string | null,
  fakeWords?: Array< string > | null,
  level?: EnglishLevel | null,
  fakeSentences?: Array< string > | null,
  language?: Language | null,
  category?: Category | null,
  createdAt?: string | null,
};

export type DeleteEnglishSentenceInput = {
  id: string,
};

export type CreateImageMapModalInput = {
  id?: string | null,
  imageUrl: string,
};

export type ModelImageMapModalConditionInput = {
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelImageMapModalConditionInput | null > | null,
  or?: Array< ModelImageMapModalConditionInput | null > | null,
  not?: ModelImageMapModalConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ImageMapModal = {
  __typename: "ImageMapModal",
  id: string,
  imageUrl: string,
  items?: ModelImageMapItemConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelImageMapItemConnection = {
  __typename: "ModelImageMapItemConnection",
  items:  Array<ImageMapItem | null >,
  nextToken?: string | null,
};

export type ImageMapItem = {
  __typename: "ImageMapItem",
  id: string,
  shape: Shape,
  x1: number,
  y1: number,
  x2?: number | null,
  y2?: number | null,
  width?: number | null,
  height?: number | null,
  radius?: number | null,
  fill?: string | null,
  prefill?: string | null,
  name?: string | null,
  imageMapModalID: string,
  createdAt: string,
  updatedAt: string,
};

export enum Shape {
  RECTANGLE = "RECTANGLE",
  CIRCLE = "CIRCLE",
}


export type UpdateImageMapModalInput = {
  id: string,
  imageUrl?: string | null,
};

export type DeleteImageMapModalInput = {
  id: string,
};

export type CreateImageMapItemInput = {
  id?: string | null,
  shape: Shape,
  x1: number,
  y1: number,
  x2?: number | null,
  y2?: number | null,
  width?: number | null,
  height?: number | null,
  radius?: number | null,
  fill?: string | null,
  prefill?: string | null,
  name?: string | null,
  imageMapModalID: string,
};

export type ModelImageMapItemConditionInput = {
  shape?: ModelShapeInput | null,
  x1?: ModelFloatInput | null,
  y1?: ModelFloatInput | null,
  x2?: ModelFloatInput | null,
  y2?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  radius?: ModelFloatInput | null,
  fill?: ModelStringInput | null,
  prefill?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageMapModalID?: ModelIDInput | null,
  and?: Array< ModelImageMapItemConditionInput | null > | null,
  or?: Array< ModelImageMapItemConditionInput | null > | null,
  not?: ModelImageMapItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelShapeInput = {
  eq?: Shape | null,
  ne?: Shape | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateImageMapItemInput = {
  id: string,
  shape?: Shape | null,
  x1?: number | null,
  y1?: number | null,
  x2?: number | null,
  y2?: number | null,
  width?: number | null,
  height?: number | null,
  radius?: number | null,
  fill?: string | null,
  prefill?: string | null,
  name?: string | null,
  imageMapModalID?: string | null,
};

export type DeleteImageMapItemInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  languageLevel?: ModelStringInput | null,
  language?: ModelStringInput | null,
  nativeLanguage?: ModelStringInput | null,
  age?: ModelStringInput | null,
  email?: ModelStringInput | null,
  languagePurpose?: ModelStringInput | null,
  timePerDay?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  challenges?: ModelStringInput | null,
  diamonds?: ModelStringInput | null,
  followers?: ModelStringInput | null,
  following?: ModelStringInput | null,
  lifetimeexp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSentenceFilterInput = {
  id?: ModelIDInput | null,
  phrase?: ModelStringInput | null,
  language?: ModelLanguageInput | null,
  level?: ModelEnglishLevelInput | null,
  fakeSentence?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSentenceFilterInput | null > | null,
  or?: Array< ModelSentenceFilterInput | null > | null,
  not?: ModelSentenceFilterInput | null,
};

export type ModelSentenceConnection = {
  __typename: "ModelSentenceConnection",
  items:  Array<Sentence | null >,
  nextToken?: string | null,
};

export type ModelWordFilterInput = {
  id?: ModelIDInput | null,
  languange?: ModelLanguageInput | null,
  word?: ModelStringInput | null,
  translatedWord?: ModelStringInput | null,
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
  name?: ModelStringInput | null,
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
  type?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  translation?: ModelStringInput | null,
  fakeWords?: ModelStringInput | null,
  level?: ModelEnglishLevelInput | null,
  fakeSentences?: ModelStringInput | null,
  language?: ModelLanguageInput | null,
  category?: ModelCategoryInput | null,
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

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelImageMapModalFilterInput = {
  id?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelImageMapModalFilterInput | null > | null,
  or?: Array< ModelImageMapModalFilterInput | null > | null,
  not?: ModelImageMapModalFilterInput | null,
};

export type ModelImageMapModalConnection = {
  __typename: "ModelImageMapModalConnection",
  items:  Array<ImageMapModal | null >,
  nextToken?: string | null,
};

export type ModelImageMapItemFilterInput = {
  id?: ModelIDInput | null,
  shape?: ModelShapeInput | null,
  x1?: ModelFloatInput | null,
  y1?: ModelFloatInput | null,
  x2?: ModelFloatInput | null,
  y2?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  radius?: ModelFloatInput | null,
  fill?: ModelStringInput | null,
  prefill?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageMapModalID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelImageMapItemFilterInput | null > | null,
  or?: Array< ModelImageMapItemFilterInput | null > | null,
  not?: ModelImageMapItemFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  languageLevel?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  nativeLanguage?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  languagePurpose?: ModelSubscriptionStringInput | null,
  timePerDay?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  challenges?: ModelSubscriptionStringInput | null,
  diamonds?: ModelSubscriptionStringInput | null,
  followers?: ModelSubscriptionStringInput | null,
  following?: ModelSubscriptionStringInput | null,
  lifetimeexp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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

export type ModelSubscriptionSentenceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phrase?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  fakeSentence?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSentenceFilterInput | null > | null,
  or?: Array< ModelSubscriptionSentenceFilterInput | null > | null,
};

export type ModelSubscriptionWordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  languange?: ModelSubscriptionStringInput | null,
  word?: ModelSubscriptionStringInput | null,
  translatedWord?: ModelSubscriptionStringInput | null,
  wordlistID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWordFilterInput | null > | null,
  or?: Array< ModelSubscriptionWordFilterInput | null > | null,
};

export type ModelSubscriptionWordListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  level?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWordListFilterInput | null > | null,
  or?: Array< ModelSubscriptionWordListFilterInput | null > | null,
};

export type ModelSubscriptionEnglishSentenceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sentence?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  translation?: ModelSubscriptionStringInput | null,
  fakeWords?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  fakeSentences?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnglishSentenceFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnglishSentenceFilterInput | null > | null,
};

export type ModelSubscriptionImageMapModalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionImageMapModalFilterInput | null > | null,
  or?: Array< ModelSubscriptionImageMapModalFilterInput | null > | null,
};

export type ModelSubscriptionImageMapItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  shape?: ModelSubscriptionStringInput | null,
  x1?: ModelSubscriptionFloatInput | null,
  y1?: ModelSubscriptionFloatInput | null,
  x2?: ModelSubscriptionFloatInput | null,
  y2?: ModelSubscriptionFloatInput | null,
  width?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  radius?: ModelSubscriptionFloatInput | null,
  fill?: ModelSubscriptionStringInput | null,
  prefill?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageMapModalID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionImageMapItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionImageMapItemFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSentenceMutationVariables = {
  input: CreateSentenceInput,
  condition?: ModelSentenceConditionInput | null,
};

export type CreateSentenceMutation = {
  createSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSentenceMutationVariables = {
  input: UpdateSentenceInput,
  condition?: ModelSentenceConditionInput | null,
};

export type UpdateSentenceMutation = {
  updateSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSentenceMutationVariables = {
  input: DeleteSentenceInput,
  condition?: ModelSentenceConditionInput | null,
};

export type DeleteSentenceMutation = {
  deleteSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWordMutationVariables = {
  input: CreateWordInput,
  condition?: ModelWordConditionInput | null,
};

export type CreateWordMutation = {
  createWord?:  {
    __typename: "Word",
    id: string,
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImageMapModalMutationVariables = {
  input: CreateImageMapModalInput,
  condition?: ModelImageMapModalConditionInput | null,
};

export type CreateImageMapModalMutation = {
  createImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageMapModalMutationVariables = {
  input: UpdateImageMapModalInput,
  condition?: ModelImageMapModalConditionInput | null,
};

export type UpdateImageMapModalMutation = {
  updateImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageMapModalMutationVariables = {
  input: DeleteImageMapModalInput,
  condition?: ModelImageMapModalConditionInput | null,
};

export type DeleteImageMapModalMutation = {
  deleteImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImageMapItemMutationVariables = {
  input: CreateImageMapItemInput,
  condition?: ModelImageMapItemConditionInput | null,
};

export type CreateImageMapItemMutation = {
  createImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageMapItemMutationVariables = {
  input: UpdateImageMapItemInput,
  condition?: ModelImageMapItemConditionInput | null,
};

export type UpdateImageMapItemMutation = {
  updateImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageMapItemMutationVariables = {
  input: DeleteImageMapItemInput,
  condition?: ModelImageMapItemConditionInput | null,
};

export type DeleteImageMapItemMutation = {
  deleteImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      languageLevel?: string | null,
      language?: string | null,
      nativeLanguage?: string | null,
      age?: string | null,
      email?: string | null,
      languagePurpose?: string | null,
      timePerDay?: string | null,
      avatar?: string | null,
      challenges?: string | null,
      diamonds?: string | null,
      followers?: string | null,
      following?: string | null,
      lifetimeexp?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSentenceQueryVariables = {
  id: string,
};

export type GetSentenceQuery = {
  getSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSentencesQueryVariables = {
  filter?: ModelSentenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSentencesQuery = {
  listSentences?:  {
    __typename: "ModelSentenceConnection",
    items:  Array< {
      __typename: "Sentence",
      id: string,
      phrase: string,
      language: Language,
      level?: EnglishLevel | null,
      fakeSentence?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWordQueryVariables = {
  id: string,
};

export type GetWordQuery = {
  getWord?:  {
    __typename: "Word",
    id: string,
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
      languange?: Language | null,
      word?: string | null,
      translatedWord?: string | null,
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
      languange?: Language | null,
      word?: string | null,
      translatedWord?: string | null,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
      name?: string | null,
      Words?:  {
        __typename: "ModelWordConnection",
        items:  Array< {
          __typename: "Word",
          id: string,
          languange?: Language | null,
          word?: string | null,
          translatedWord?: string | null,
          wordlistID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
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
      sentence: string,
      type: string,
      imageUrl?: string | null,
      translation: string,
      fakeWords: Array< string >,
      level: EnglishLevel,
      fakeSentences?: Array< string > | null,
      language: Language,
      category: Category,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SentencesByCreatedAtQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnglishSentenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SentencesByCreatedAtQuery = {
  sentencesByCreatedAt?:  {
    __typename: "ModelEnglishSentenceConnection",
    items:  Array< {
      __typename: "EnglishSentence",
      id: string,
      sentence: string,
      type: string,
      imageUrl?: string | null,
      translation: string,
      fakeWords: Array< string >,
      level: EnglishLevel,
      fakeSentences?: Array< string > | null,
      language: Language,
      category: Category,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImageMapModalQueryVariables = {
  id: string,
};

export type GetImageMapModalQuery = {
  getImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImageMapModalsQueryVariables = {
  filter?: ModelImageMapModalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImageMapModalsQuery = {
  listImageMapModals?:  {
    __typename: "ModelImageMapModalConnection",
    items:  Array< {
      __typename: "ImageMapModal",
      id: string,
      imageUrl: string,
      items?:  {
        __typename: "ModelImageMapItemConnection",
        items:  Array< {
          __typename: "ImageMapItem",
          id: string,
          shape: Shape,
          x1: number,
          y1: number,
          x2?: number | null,
          y2?: number | null,
          width?: number | null,
          height?: number | null,
          radius?: number | null,
          fill?: string | null,
          prefill?: string | null,
          name?: string | null,
          imageMapModalID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImageMapItemQueryVariables = {
  id: string,
};

export type GetImageMapItemQuery = {
  getImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImageMapItemsQueryVariables = {
  filter?: ModelImageMapItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImageMapItemsQuery = {
  listImageMapItems?:  {
    __typename: "ModelImageMapItemConnection",
    items:  Array< {
      __typename: "ImageMapItem",
      id: string,
      shape: Shape,
      x1: number,
      y1: number,
      x2?: number | null,
      y2?: number | null,
      width?: number | null,
      height?: number | null,
      radius?: number | null,
      fill?: string | null,
      prefill?: string | null,
      name?: string | null,
      imageMapModalID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ImageMapItemsByImageMapModalIDQueryVariables = {
  imageMapModalID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImageMapItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ImageMapItemsByImageMapModalIDQuery = {
  imageMapItemsByImageMapModalID?:  {
    __typename: "ModelImageMapItemConnection",
    items:  Array< {
      __typename: "ImageMapItem",
      id: string,
      shape: Shape,
      x1: number,
      y1: number,
      x2?: number | null,
      y2?: number | null,
      width?: number | null,
      height?: number | null,
      radius?: number | null,
      fill?: string | null,
      prefill?: string | null,
      name?: string | null,
      imageMapModalID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    languageLevel?: string | null,
    language?: string | null,
    nativeLanguage?: string | null,
    age?: string | null,
    email?: string | null,
    languagePurpose?: string | null,
    timePerDay?: string | null,
    avatar?: string | null,
    challenges?: string | null,
    diamonds?: string | null,
    followers?: string | null,
    following?: string | null,
    lifetimeexp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionSentenceFilterInput | null,
};

export type OnCreateSentenceSubscription = {
  onCreateSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionSentenceFilterInput | null,
};

export type OnUpdateSentenceSubscription = {
  onUpdateSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionSentenceFilterInput | null,
};

export type OnDeleteSentenceSubscription = {
  onDeleteSentence?:  {
    __typename: "Sentence",
    id: string,
    phrase: string,
    language: Language,
    level?: EnglishLevel | null,
    fakeSentence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWordSubscriptionVariables = {
  filter?: ModelSubscriptionWordFilterInput | null,
};

export type OnCreateWordSubscription = {
  onCreateWord?:  {
    __typename: "Word",
    id: string,
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
    languange?: Language | null,
    word?: string | null,
    translatedWord?: string | null,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
    name?: string | null,
    Words?:  {
      __typename: "ModelWordConnection",
      items:  Array< {
        __typename: "Word",
        id: string,
        languange?: Language | null,
        word?: string | null,
        translatedWord?: string | null,
        wordlistID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
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
    sentence: string,
    type: string,
    imageUrl?: string | null,
    translation: string,
    fakeWords: Array< string >,
    level: EnglishLevel,
    fakeSentences?: Array< string > | null,
    language: Language,
    category: Category,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImageMapModalSubscriptionVariables = {
  filter?: ModelSubscriptionImageMapModalFilterInput | null,
};

export type OnCreateImageMapModalSubscription = {
  onCreateImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageMapModalSubscriptionVariables = {
  filter?: ModelSubscriptionImageMapModalFilterInput | null,
};

export type OnUpdateImageMapModalSubscription = {
  onUpdateImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageMapModalSubscriptionVariables = {
  filter?: ModelSubscriptionImageMapModalFilterInput | null,
};

export type OnDeleteImageMapModalSubscription = {
  onDeleteImageMapModal?:  {
    __typename: "ImageMapModal",
    id: string,
    imageUrl: string,
    items?:  {
      __typename: "ModelImageMapItemConnection",
      items:  Array< {
        __typename: "ImageMapItem",
        id: string,
        shape: Shape,
        x1: number,
        y1: number,
        x2?: number | null,
        y2?: number | null,
        width?: number | null,
        height?: number | null,
        radius?: number | null,
        fill?: string | null,
        prefill?: string | null,
        name?: string | null,
        imageMapModalID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImageMapItemSubscriptionVariables = {
  filter?: ModelSubscriptionImageMapItemFilterInput | null,
};

export type OnCreateImageMapItemSubscription = {
  onCreateImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageMapItemSubscriptionVariables = {
  filter?: ModelSubscriptionImageMapItemFilterInput | null,
};

export type OnUpdateImageMapItemSubscription = {
  onUpdateImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageMapItemSubscriptionVariables = {
  filter?: ModelSubscriptionImageMapItemFilterInput | null,
};

export type OnDeleteImageMapItemSubscription = {
  onDeleteImageMapItem?:  {
    __typename: "ImageMapItem",
    id: string,
    shape: Shape,
    x1: number,
    y1: number,
    x2?: number | null,
    y2?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    fill?: string | null,
    prefill?: string | null,
    name?: string | null,
    imageMapModalID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
