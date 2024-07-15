/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const aiReplyMutation = /* GraphQL */ `mutation AiReplyMutation($userAudio: String) {
  aiReplyMutation(userAudio: $userAudio) {
    audio
    text
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AiReplyMutationMutationVariables,
  APITypes.AiReplyMutationMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
    artificialInteligenceUser
    ChatRooms {
      items {
        id
        userId
        chatRoomId
        user {
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
          artificialInteligenceUser
          ChatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          flashCards {
            items {
              id
              title
              description
              imageUrl
              audioUrl
              level
              category
              user
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
        chatRoom {
          id
          name
          messages {
            items {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          users {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            text
            chatroomID
            userID
            userName
            images
            Attachments {
              nextToken
              __typename
            }
            showMenu
            menuType
            progress
            messageType
            audioDuration
            audioText
            createdAt
            updatedAt
            __typename
          }
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          artificialInteligenceRoom
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    flashCards {
      items {
        id
        title
        description
        imageUrl
        audioUrl
        level
        category
        user
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
    artificialInteligenceUser
    ChatRooms {
      items {
        id
        userId
        chatRoomId
        user {
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
          artificialInteligenceUser
          ChatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          flashCards {
            items {
              id
              title
              description
              imageUrl
              audioUrl
              level
              category
              user
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
        chatRoom {
          id
          name
          messages {
            items {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          users {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            text
            chatroomID
            userID
            userName
            images
            Attachments {
              nextToken
              __typename
            }
            showMenu
            menuType
            progress
            messageType
            audioDuration
            audioText
            createdAt
            updatedAt
            __typename
          }
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          artificialInteligenceRoom
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    flashCards {
      items {
        id
        title
        description
        imageUrl
        audioUrl
        level
        category
        user
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
    artificialInteligenceUser
    ChatRooms {
      items {
        id
        userId
        chatRoomId
        user {
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
          artificialInteligenceUser
          ChatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          flashCards {
            items {
              id
              title
              description
              imageUrl
              audioUrl
              level
              category
              user
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
        chatRoom {
          id
          name
          messages {
            items {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          users {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            text
            chatroomID
            userID
            userName
            images
            Attachments {
              nextToken
              __typename
            }
            showMenu
            menuType
            progress
            messageType
            audioDuration
            audioText
            createdAt
            updatedAt
            __typename
          }
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          artificialInteligenceRoom
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    flashCards {
      items {
        id
        title
        description
        imageUrl
        audioUrl
        level
        category
        user
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSentence = /* GraphQL */ `mutation CreateSentence(
  $input: CreateSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  createSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSentenceMutationVariables,
  APITypes.CreateSentenceMutation
>;
export const updateSentence = /* GraphQL */ `mutation UpdateSentence(
  $input: UpdateSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  updateSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSentenceMutationVariables,
  APITypes.UpdateSentenceMutation
>;
export const deleteSentence = /* GraphQL */ `mutation DeleteSentence(
  $input: DeleteSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  deleteSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSentenceMutationVariables,
  APITypes.DeleteSentenceMutation
>;
export const createWord = /* GraphQL */ `mutation CreateWord(
  $input: CreateWordInput!
  $condition: ModelWordConditionInput
) {
  createWord(input: $input, condition: $condition) {
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
    word
    translatedWord
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
    word
    translatedWord
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
` as GeneratedMutation<
  APITypes.DeleteEnglishSentenceMutationVariables,
  APITypes.DeleteEnglishSentenceMutation
>;
export const createImageMapModal = /* GraphQL */ `mutation CreateImageMapModal(
  $input: CreateImageMapModalInput!
  $condition: ModelImageMapModalConditionInput
) {
  createImageMapModal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateImageMapModalMutationVariables,
  APITypes.CreateImageMapModalMutation
>;
export const updateImageMapModal = /* GraphQL */ `mutation UpdateImageMapModal(
  $input: UpdateImageMapModalInput!
  $condition: ModelImageMapModalConditionInput
) {
  updateImageMapModal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateImageMapModalMutationVariables,
  APITypes.UpdateImageMapModalMutation
>;
export const deleteImageMapModal = /* GraphQL */ `mutation DeleteImageMapModal(
  $input: DeleteImageMapModalInput!
  $condition: ModelImageMapModalConditionInput
) {
  deleteImageMapModal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteImageMapModalMutationVariables,
  APITypes.DeleteImageMapModalMutation
>;
export const createImageMapItem = /* GraphQL */ `mutation CreateImageMapItem(
  $input: CreateImageMapItemInput!
  $condition: ModelImageMapItemConditionInput
) {
  createImageMapItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateImageMapItemMutationVariables,
  APITypes.CreateImageMapItemMutation
>;
export const updateImageMapItem = /* GraphQL */ `mutation UpdateImageMapItem(
  $input: UpdateImageMapItemInput!
  $condition: ModelImageMapItemConditionInput
) {
  updateImageMapItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateImageMapItemMutationVariables,
  APITypes.UpdateImageMapItemMutation
>;
export const deleteImageMapItem = /* GraphQL */ `mutation DeleteImageMapItem(
  $input: DeleteImageMapItemInput!
  $condition: ModelImageMapItemConditionInput
) {
  deleteImageMapItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteImageMapItemMutationVariables,
  APITypes.DeleteImageMapItemMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
    id
    name
    messages {
      items {
        id
        text
        chatroomID
        userID
        userName
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        showMenu
        menuType
        progress
        messageType
        audioDuration
        audioText
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    users {
      items {
        id
        userId
        chatRoomId
        user {
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
          artificialInteligenceUser
          ChatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          flashCards {
            items {
              id
              title
              description
              imageUrl
              audioUrl
              level
              category
              user
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
        chatRoom {
          id
          name
          messages {
            items {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          users {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            text
            chatroomID
            userID
            userName
            images
            Attachments {
              nextToken
              __typename
            }
            showMenu
            menuType
            progress
            messageType
            audioDuration
            audioText
            createdAt
            updatedAt
            __typename
          }
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          artificialInteligenceRoom
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    lastMessage {
      id
      text
      chatroomID
      userID
      userName
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      showMenu
      menuType
      progress
      messageType
      audioDuration
      audioText
      createdAt
      updatedAt
      __typename
    }
    Attachments {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    artificialInteligenceRoom
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
    id
    name
    messages {
      items {
        id
        text
        chatroomID
        userID
        userName
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        showMenu
        menuType
        progress
        messageType
        audioDuration
        audioText
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    users {
      items {
        id
        userId
        chatRoomId
        user {
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
          artificialInteligenceUser
          ChatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          flashCards {
            items {
              id
              title
              description
              imageUrl
              audioUrl
              level
              category
              user
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
        chatRoom {
          id
          name
          messages {
            items {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          users {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            text
            chatroomID
            userID
            userName
            images
            Attachments {
              nextToken
              __typename
            }
            showMenu
            menuType
            progress
            messageType
            audioDuration
            audioText
            createdAt
            updatedAt
            __typename
          }
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          artificialInteligenceRoom
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    lastMessage {
      id
      text
      chatroomID
      userID
      userName
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      showMenu
      menuType
      progress
      messageType
      audioDuration
      audioText
      createdAt
      updatedAt
      __typename
    }
    Attachments {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    artificialInteligenceRoom
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
    id
    name
    messages {
      items {
        id
        text
        chatroomID
        userID
        userName
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        showMenu
        menuType
        progress
        messageType
        audioDuration
        audioText
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    users {
      items {
        id
        userId
        chatRoomId
        user {
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
          artificialInteligenceUser
          ChatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          flashCards {
            items {
              id
              title
              description
              imageUrl
              audioUrl
              level
              category
              user
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
        chatRoom {
          id
          name
          messages {
            items {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          users {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            text
            chatroomID
            userID
            userName
            images
            Attachments {
              nextToken
              __typename
            }
            showMenu
            menuType
            progress
            messageType
            audioDuration
            audioText
            createdAt
            updatedAt
            __typename
          }
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          artificialInteligenceRoom
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    lastMessage {
      id
      text
      chatroomID
      userID
      userName
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      showMenu
      menuType
      progress
      messageType
      audioDuration
      audioText
      createdAt
      updatedAt
      __typename
    }
    Attachments {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    artificialInteligenceRoom
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    text
    chatroomID
    userID
    userName
    images
    Attachments {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    showMenu
    menuType
    progress
    messageType
    audioDuration
    audioText
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    text
    chatroomID
    userID
    userName
    images
    Attachments {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    showMenu
    menuType
    progress
    messageType
    audioDuration
    audioText
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    text
    chatroomID
    userID
    userName
    images
    Attachments {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    showMenu
    menuType
    progress
    messageType
    audioDuration
    audioText
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createAttachment = /* GraphQL */ `mutation CreateAttachment(
  $input: CreateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  createAttachment(input: $input, condition: $condition) {
    id
    storageKey
    type
    width
    height
    duration
    messageID
    chatroomID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttachmentMutationVariables,
  APITypes.CreateAttachmentMutation
>;
export const updateAttachment = /* GraphQL */ `mutation UpdateAttachment(
  $input: UpdateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  updateAttachment(input: $input, condition: $condition) {
    id
    storageKey
    type
    width
    height
    duration
    messageID
    chatroomID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttachmentMutationVariables,
  APITypes.UpdateAttachmentMutation
>;
export const deleteAttachment = /* GraphQL */ `mutation DeleteAttachment(
  $input: DeleteAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  deleteAttachment(input: $input, condition: $condition) {
    id
    storageKey
    type
    width
    height
    duration
    messageID
    chatroomID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttachmentMutationVariables,
  APITypes.DeleteAttachmentMutation
>;
export const createFlashCards = /* GraphQL */ `mutation CreateFlashCards(
  $input: CreateFlashCardsInput!
  $condition: ModelFlashCardsConditionInput
) {
  createFlashCards(input: $input, condition: $condition) {
    id
    title
    description
    imageUrl
    audioUrl
    level
    category
    user
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFlashCardsMutationVariables,
  APITypes.CreateFlashCardsMutation
>;
export const updateFlashCards = /* GraphQL */ `mutation UpdateFlashCards(
  $input: UpdateFlashCardsInput!
  $condition: ModelFlashCardsConditionInput
) {
  updateFlashCards(input: $input, condition: $condition) {
    id
    title
    description
    imageUrl
    audioUrl
    level
    category
    user
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFlashCardsMutationVariables,
  APITypes.UpdateFlashCardsMutation
>;
export const deleteFlashCards = /* GraphQL */ `mutation DeleteFlashCards(
  $input: DeleteFlashCardsInput!
  $condition: ModelFlashCardsConditionInput
) {
  deleteFlashCards(input: $input, condition: $condition) {
    id
    title
    description
    imageUrl
    audioUrl
    level
    category
    user
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFlashCardsMutationVariables,
  APITypes.DeleteFlashCardsMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    title
    content
    images
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    title
    content
    images
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    title
    content
    images
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createUserChatRoom = /* GraphQL */ `mutation CreateUserChatRoom(
  $input: CreateUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  createUserChatRoom(input: $input, condition: $condition) {
    id
    userId
    chatRoomId
    user {
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
      artificialInteligenceUser
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          user {
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
            artificialInteligenceUser
            ChatRooms {
              nextToken
              __typename
            }
            flashCards {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            name
            messages {
              nextToken
              __typename
            }
            users {
              nextToken
              __typename
            }
            lastMessage {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            Attachments {
              nextToken
              __typename
            }
            artificialInteligenceRoom
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      flashCards {
        items {
          id
          title
          description
          imageUrl
          audioUrl
          level
          category
          user
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
    chatRoom {
      id
      name
      messages {
        items {
          id
          text
          chatroomID
          userID
          userName
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          showMenu
          menuType
          progress
          messageType
          audioDuration
          audioText
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          chatRoomId
          user {
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
            artificialInteligenceUser
            ChatRooms {
              nextToken
              __typename
            }
            flashCards {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            name
            messages {
              nextToken
              __typename
            }
            users {
              nextToken
              __typename
            }
            lastMessage {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            Attachments {
              nextToken
              __typename
            }
            artificialInteligenceRoom
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessage {
        id
        text
        chatroomID
        userID
        userName
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        showMenu
        menuType
        progress
        messageType
        audioDuration
        audioText
        createdAt
        updatedAt
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      artificialInteligenceRoom
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserChatRoomMutationVariables,
  APITypes.CreateUserChatRoomMutation
>;
export const updateUserChatRoom = /* GraphQL */ `mutation UpdateUserChatRoom(
  $input: UpdateUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  updateUserChatRoom(input: $input, condition: $condition) {
    id
    userId
    chatRoomId
    user {
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
      artificialInteligenceUser
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          user {
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
            artificialInteligenceUser
            ChatRooms {
              nextToken
              __typename
            }
            flashCards {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            name
            messages {
              nextToken
              __typename
            }
            users {
              nextToken
              __typename
            }
            lastMessage {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            Attachments {
              nextToken
              __typename
            }
            artificialInteligenceRoom
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      flashCards {
        items {
          id
          title
          description
          imageUrl
          audioUrl
          level
          category
          user
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
    chatRoom {
      id
      name
      messages {
        items {
          id
          text
          chatroomID
          userID
          userName
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          showMenu
          menuType
          progress
          messageType
          audioDuration
          audioText
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          chatRoomId
          user {
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
            artificialInteligenceUser
            ChatRooms {
              nextToken
              __typename
            }
            flashCards {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            name
            messages {
              nextToken
              __typename
            }
            users {
              nextToken
              __typename
            }
            lastMessage {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            Attachments {
              nextToken
              __typename
            }
            artificialInteligenceRoom
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessage {
        id
        text
        chatroomID
        userID
        userName
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        showMenu
        menuType
        progress
        messageType
        audioDuration
        audioText
        createdAt
        updatedAt
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      artificialInteligenceRoom
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserChatRoomMutationVariables,
  APITypes.UpdateUserChatRoomMutation
>;
export const deleteUserChatRoom = /* GraphQL */ `mutation DeleteUserChatRoom(
  $input: DeleteUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  deleteUserChatRoom(input: $input, condition: $condition) {
    id
    userId
    chatRoomId
    user {
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
      artificialInteligenceUser
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          user {
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
            artificialInteligenceUser
            ChatRooms {
              nextToken
              __typename
            }
            flashCards {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            name
            messages {
              nextToken
              __typename
            }
            users {
              nextToken
              __typename
            }
            lastMessage {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            Attachments {
              nextToken
              __typename
            }
            artificialInteligenceRoom
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      flashCards {
        items {
          id
          title
          description
          imageUrl
          audioUrl
          level
          category
          user
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
    chatRoom {
      id
      name
      messages {
        items {
          id
          text
          chatroomID
          userID
          userName
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          showMenu
          menuType
          progress
          messageType
          audioDuration
          audioText
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          chatRoomId
          user {
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
            artificialInteligenceUser
            ChatRooms {
              nextToken
              __typename
            }
            flashCards {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            name
            messages {
              nextToken
              __typename
            }
            users {
              nextToken
              __typename
            }
            lastMessage {
              id
              text
              chatroomID
              userID
              userName
              images
              showMenu
              menuType
              progress
              messageType
              audioDuration
              audioText
              createdAt
              updatedAt
              __typename
            }
            Attachments {
              nextToken
              __typename
            }
            artificialInteligenceRoom
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessage {
        id
        text
        chatroomID
        userID
        userName
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        showMenu
        menuType
        progress
        messageType
        audioDuration
        audioText
        createdAt
        updatedAt
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      artificialInteligenceRoom
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserChatRoomMutationVariables,
  APITypes.DeleteUserChatRoomMutation
>;
