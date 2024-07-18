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
  MessageType,
} from "../../../API";
import {
  listChatRooms,
  listMessages,
  listUserChatRooms,
  listUsers,
} from "../../../graphql/queries";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useAppSelector } from "@/store";
import { useEffect, useRef, useState } from "react";
import {
  createChatRoom,
  createMessage,
  createUserChatRoom,
} from "@/graphql/mutations";
import { FlatList } from "react-native-gesture-handler";
import useKeyboard from "@/hooks/useKeyboard";

const useChatWithAiScreen = () => {
  const abortController = new AbortController();
  const userID = useAppSelector(state => state.user.user.id);
  console.log("🚀 ~ useChatWithAiScreen ~ userID:", userID);
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

  //return the first chat room that has an AI user with my user
  const aiChatInfo = firstChatRoomWithMyUserAndAi?.users?.items.find(
    item => !!item?.user?.artificialInteligenceUser,
  );
  console.log("🚀 ~ useChatWithAiScreen ~ aiChatInfo:", !!aiChatInfo);

  const {
    data: listMessagesQuery,
    refetch: refetchListMessages,
    loading: loadingListMessagesQuery,
  } = useQuery<ListMessagesQuery, ListMessagesQueryVariables>(
    gql(listMessages),
    {
      variables: {
        filter: {
          chatroomID: {
            eq: firstChatRoomWithMyUserAndAi?.id!,
          },
        },
      },
    },
  );

  const listAiUsers = listAiUsersQuery?.listUsers?.items;
  const artificialInteligenceUserId = String(listAiUsers?.[0]?.id);

  const isKeyboardVisible = useKeyboard();
  useEffect(() => {
    mountedRef.current = true;
    if (listMessagesQuery?.listMessages?.items?.length) {
      // flatListRef.current?.scrollToEnd({ animated: true });
    }
    return () => {
      mountedRef.current = false;
    };
  }, [
    loadingListMessagesQuery,
    mountedRef.current,
    listMessagesQuery?.listMessages?.items?.length,
    isKeyboardVisible,
  ]);

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

    console.log(
      "CREATING CHAT ROOM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    );

    const { data: createdChatRoomMutation } = await createChatRoomMutation({
      variables: {
        input: {
          artificialInteligenceRoom: true,
          name: "Linguao AI",
        },
      },
    });

    const chatRoomID = createdChatRoomMutation?.createChatRoom?.id;
    console.log("🚀 ~ createChatRoomFunction ~ chatRoomID:", chatRoomID);
    console.log(
      "🚀 ~ createChatRoomFunction ~ createdChatRoomMutation:",
      createdChatRoomMutation,
    );
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

  const handleCreateMessage = async (
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

    refetchListMessages();
  };

  useEffect(() => {
    if (!mountedRef.current) return;
    if (
      !checkIfUserHasAiChatRoom &&
      !loadingListUserhatRoomsQuery &&
      !firstChatRoomWithMyUserAndAi
    ) {
      console.log("entrou em criar funcao");
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
    messages: listMessagesQuery,
    handleCreateMessage,
    flatListRef,
    loadingNewMessage,
  };
};

export default useChatWithAiScreen;
