/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const textToSpeech = /* GraphQL */ `query TextToSpeech($input: TextToSpeechInput!) {
  textToSpeech(input: $input)
}
` as GeneratedQuery<
  APITypes.TextToSpeechQueryVariables,
  APITypes.TextToSpeechQuery
>;
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
    word
    translatedWord
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
}
` as GeneratedQuery<
  APITypes.WordsByWordlistIDQueryVariables,
  APITypes.WordsByWordlistIDQuery
>;
export const getWordList = /* GraphQL */ `query GetWordList($id: ID!) {
  getWordList(id: $id) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEnglishSentencesQueryVariables,
  APITypes.ListEnglishSentencesQuery
>;
export const sentencesByCreatedAt = /* GraphQL */ `query SentencesByCreatedAt(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnglishSentenceFilterInput
  $limit: Int
  $nextToken: String
) {
  sentencesByCreatedAt(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SentencesByCreatedAtQueryVariables,
  APITypes.SentencesByCreatedAtQuery
>;
export const getImageMapModal = /* GraphQL */ `query GetImageMapModal($id: ID!) {
  getImageMapModal(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetImageMapModalQueryVariables,
  APITypes.GetImageMapModalQuery
>;
export const listImageMapModals = /* GraphQL */ `query ListImageMapModals(
  $filter: ModelImageMapModalFilterInput
  $limit: Int
  $nextToken: String
) {
  listImageMapModals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListImageMapModalsQueryVariables,
  APITypes.ListImageMapModalsQuery
>;
export const getImageMapItem = /* GraphQL */ `query GetImageMapItem($id: ID!) {
  getImageMapItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetImageMapItemQueryVariables,
  APITypes.GetImageMapItemQuery
>;
export const listImageMapItems = /* GraphQL */ `query ListImageMapItems(
  $filter: ModelImageMapItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listImageMapItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListImageMapItemsQueryVariables,
  APITypes.ListImageMapItemsQuery
>;
export const imageMapItemsByImageMapModalID = /* GraphQL */ `query ImageMapItemsByImageMapModalID(
  $imageMapModalID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelImageMapItemFilterInput
  $limit: Int
  $nextToken: String
) {
  imageMapItemsByImageMapModalID(
    imageMapModalID: $imageMapModalID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ImageMapItemsByImageMapModalIDQueryVariables,
  APITypes.ImageMapItemsByImageMapModalIDQuery
>;
export const getChatRoom = /* GraphQL */ `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChatRoomQueryVariables,
  APITypes.GetChatRoomQuery
>;
export const listChatRooms = /* GraphQL */ `query ListChatRooms(
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatRoomsQueryVariables,
  APITypes.ListChatRoomsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const messagesByChatRoom = /* GraphQL */ `query MessagesByChatRoom(
  $chatroomID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChatRoom(
    chatroomID: $chatroomID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.MessagesByChatRoomQueryVariables,
  APITypes.MessagesByChatRoomQuery
>;
export const messagesByUserID = /* GraphQL */ `query MessagesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.MessagesByUserIDQueryVariables,
  APITypes.MessagesByUserIDQuery
>;
export const getAttachment = /* GraphQL */ `query GetAttachment($id: ID!) {
  getAttachment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAttachmentQueryVariables,
  APITypes.GetAttachmentQuery
>;
export const listAttachments = /* GraphQL */ `query ListAttachments(
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListAttachmentsQueryVariables,
  APITypes.ListAttachmentsQuery
>;
export const attachmentsByMessageID = /* GraphQL */ `query AttachmentsByMessageID(
  $messageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  attachmentsByMessageID(
    messageID: $messageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.AttachmentsByMessageIDQueryVariables,
  APITypes.AttachmentsByMessageIDQuery
>;
export const attachmentsByChatroomID = /* GraphQL */ `query AttachmentsByChatroomID(
  $chatroomID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  attachmentsByChatroomID(
    chatroomID: $chatroomID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.AttachmentsByChatroomIDQueryVariables,
  APITypes.AttachmentsByChatroomIDQuery
>;
export const getFlashCards = /* GraphQL */ `query GetFlashCards($id: ID!) {
  getFlashCards(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFlashCardsQueryVariables,
  APITypes.GetFlashCardsQuery
>;
export const listFlashCards = /* GraphQL */ `query ListFlashCards(
  $filter: ModelFlashCardsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlashCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListFlashCardsQueryVariables,
  APITypes.ListFlashCardsQuery
>;
export const flashCardsByUser = /* GraphQL */ `query FlashCardsByUser(
  $user: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFlashCardsFilterInput
  $limit: Int
  $nextToken: String
) {
  flashCardsByUser(
    user: $user
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.FlashCardsByUserQueryVariables,
  APITypes.FlashCardsByUserQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    content
    images
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      images
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getUserChatRoom = /* GraphQL */ `query GetUserChatRoom($id: ID!) {
  getUserChatRoom(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserChatRoomQueryVariables,
  APITypes.GetUserChatRoomQuery
>;
export const listUserChatRooms = /* GraphQL */ `query ListUserChatRooms(
  $filter: ModelUserChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              name
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
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserChatRoomsQueryVariables,
  APITypes.ListUserChatRoomsQuery
>;
export const userChatRoomsByUserId = /* GraphQL */ `query UserChatRoomsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  userChatRoomsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              name
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
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserChatRoomsByUserIdQueryVariables,
  APITypes.UserChatRoomsByUserIdQuery
>;
export const userChatRoomsByChatRoomId = /* GraphQL */ `query UserChatRoomsByChatRoomId(
  $chatRoomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  userChatRoomsByChatRoomId(
    chatRoomId: $chatRoomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              name
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
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              name
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserChatRoomsByChatRoomIdQueryVariables,
  APITypes.UserChatRoomsByChatRoomIdQuery
>;
