import { useQuery, gql, useMutation } from "@apollo/client";
import { useAppSelector } from "@/store";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Alert } from "react-native";
import {
  createChatRoom,
  createMessage,
  createUserChatRoom,
} from "@/graphql/mutations";
import {
  listMessages,
  listUserChatRooms,
  listUsers,
  messagesByChatRoom,
} from "../../../graphql/queries";
import {
  CreateChatRoomMutation,
  CreateChatRoomMutationVariables,
  CreateMessageMutation,
  CreateMessageMutationVariables,
  CreateUserChatRoomMutation,
  CreateUserChatRoomMutationVariables,
  ListMessagesQuery,
  ListMessagesQueryVariables,
  ListUserChatRoomsQuery,
  ListUserChatRoomsQueryVariables,
  ListUsersQuery,
  ListUsersQueryVariables,
  MessagesByChatRoomQuery,
  MessagesByChatRoomQueryVariables,
  MessageType,
  Message,
  ModelSortDirection,
} from "../../../API";
import useKeyboard from "@/hooks/useKeyboard";

const useChatWithAiScreen = () => {
  const abortController = new AbortController();
  const userID = useAppSelector(state => state.user.user.id);
  const myUserName = useAppSelector(state => state.user.user.name);
  const mountedRef = useRef(false);
  const flatListRef = useRef<FlatList>(null);

  const [createChatRoomMutation] = useMutation<
    CreateChatRoomMutation,
    CreateChatRoomMutationVariables
  >(gql(createChatRoom));

  const [createChatRoomMessage, { loading: loadingNewMessage }] = useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(gql(createMessage), {
    refetchQueries: [{ query: gql(listMessages) }],
    context: {
      fetchOptions: {
        signal: abortController.signal,
      },
    },
  });

  const [createUserChatRoomMutation] = useMutation<
    CreateUserChatRoomMutation,
    CreateUserChatRoomMutationVariables
  >(gql(createUserChatRoom), {
    refetchQueries: [{ query: gql(listUserChatRooms) }],
  });

  const { data: listAiUsersQuery } = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(gql(listUsers), {
    variables: {
      filter: {
        artificialInteligenceUser: {
          eq: true,
        },
      },
    },
  });

  const {
    data: listUserChatRoomsQuery,
    loading: loadingListUserhatRoomsQuery,
    refetch: refetchListUserChatRoom,
  } = useQuery<ListUserChatRoomsQuery, ListUserChatRoomsQueryVariables>(
    gql(listUserChatRooms),
    {
      variables: {
        filter: {
          userId: {
            eq: String(userID),
          },
        },
      },
    },
  );

  const firstChatRoomWithMyUserAndAi =
    listUserChatRoomsQuery?.listUserChatRooms?.items.find(
      item => !!item?.chatRoom?.artificialInteligenceRoom,
    )?.chatRoom;

  const aiChatInfo = firstChatRoomWithMyUserAndAi?.users?.items.find(
    item => !!item?.user?.artificialInteligenceUser,
  );

  const [messages, setMessages] = useState<Message[]>([]);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const {
    data,
    refetch: refetchListMessages,
    fetchMore,
  } = useQuery<MessagesByChatRoomQuery, MessagesByChatRoomQueryVariables>(
    gql(messagesByChatRoom),
    {
      variables: {
        chatroomID: firstChatRoomWithMyUserAndAi?.id!,
        sortDirection: ModelSortDirection.DESC,
        limit: 15,
      },
      onCompleted: data => {
        setMessages(data?.messagesByChatRoom?.items as Message[]);
        setNextToken(data?.messagesByChatRoom?.nextToken || null);
      },
    },
  );

  const fetchMoreMessages = async () => {
    if (!nextToken) return;

    const { data: moreData } = await fetchMore({
      variables: {
        chatroomID: firstChatRoomWithMyUserAndAi?.id!,
        sortDirection: ModelSortDirection.DESC,
        limit: 10,
        nextToken,
      },
    });

    if (moreData) {
      setMessages(prevMessages => [
        ...prevMessages,
        ...(moreData?.messagesByChatRoom?.items as Message[]),
      ]);
      setNextToken(moreData?.messagesByChatRoom?.nextToken || null);
    }
  };

  const listAiUsers = listAiUsersQuery?.listUsers?.items;
  const artificialInteligenceUserId = String(listAiUsers?.[0]?.id);

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  const checkIfUserHasAiChatRoom =
    listUserChatRoomsQuery?.listUserChatRooms?.items.some(
      item => item?.chatRoom?.artificialInteligenceRoom,
    );

  const createChatRoomFunction = async () => {
    if (checkIfUserHasAiChatRoom) {
      return;
    }

    const { data: createdChatRoomMutation } = await createChatRoomMutation({
      variables: {
        input: {
          artificialInteligenceRoom: true,
          name: "Linguao AI",
        },
      },
    });

    const chatRoomID = createdChatRoomMutation?.createChatRoom?.id;
    if (!chatRoomID || !artificialInteligenceUserId || !userID) return;

    await createUserChatRoomMutation({
      variables: {
        input: {
          chatRoomId: chatRoomID,
          userId: String(userID),
        },
      },
    });

    await createUserChatRoomMutation({
      variables: {
        input: {
          chatRoomId: chatRoomID,
          userId: String(artificialInteligenceUserId),
        },
      },
    });

    await createChatRoomMessage({
      variables: {
        input: {
          chatroomID: chatRoomID,
          text: "Hello, I am Linguao AI. How can I help you today?",
          userID: String(artificialInteligenceUserId),
          showMenu: true,
          userName: aiInfo?.user?.name!,
        },
      },
    });

    refetchListUserChatRoom();
  };

  const aiInfo = !!aiChatInfo
    ? aiChatInfo
    : {
        user: listAiUsers?.[0],
      };

  const handleCreateMessage = useCallback(async (
    text: string,
    showMenu: boolean,
    messageType: MessageType = MessageType.TEXT,
    audioDuration: number = 0,
    audioMessage?: string,
    userSender: string = String(userID),
    userName = myUserName,
  ) => {
    const { data, errors } = await createChatRoomMessage({
      variables: {
        input: {
          chatroomID: firstChatRoomWithMyUserAndAi?.id!,
          text,
          userID: String(userSender),
          showMenu,
          userName: userName,
          messageType,
          audioDuration: audioDuration,
          audioText: audioMessage,
        },
      },
    });

    setMessages(prevMessages => [].concat(data?.createMessage, prevMessages));

    if (errors) {
      Alert.alert("Error", "An error occurred while sending the message");
      return;
    }

    refetchListMessages();
  }, [createChatRoomMessage, firstChatRoomWithMyUserAndAi?.id, userID, myUserName, refetchListMessages]);

  useEffect(() => {
    if (!mountedRef.current) return;
    if (
      !checkIfUserHasAiChatRoom &&
      !loadingListUserhatRoomsQuery &&
      !firstChatRoomWithMyUserAndAi
    ) {
      createChatRoomFunction();
    }
  }, [
    mountedRef.current,
    loadingListUserhatRoomsQuery,
    firstChatRoomWithMyUserAndAi,
  ]);

  return {
    data: listUserChatRoomsQuery,
    aiChatInfo: aiInfo,
    messages,
    handleCreateMessage,
    flatListRef,
    loadingNewMessage,
    fetchMoreMessages,
  };
};

export default useChatWithAiScreen;
