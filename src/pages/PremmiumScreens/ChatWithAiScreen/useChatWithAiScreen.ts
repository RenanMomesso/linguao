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
  MenuType,
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
import {
  convertAudioToText,
  sendMessageToOpenAI,
} from "@/services/openAi.service";

const useChatWithAiScreen = () => {
  const abortController = new AbortController();
  const userID = useAppSelector(state => state.user.user.id);
  const myUserName = useAppSelector(state => state.user.user.name);
  const mountedRef = useRef(false);
  const flatListRef = useRef<FlatList>(null);

  const [reRenderChatMessages, setReRenderChatMessages] = useState(false);

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

  const firstChatRoomInfo =
    listUserChatRoomsQuery?.listUserChatRooms?.items.find(
      item => !!item?.chatRoom?.artificialInteligenceRoom,
    )?.chatRoom;

  //return the first chat room that has an AI user with my user
  const aiChatInfo = firstChatRoomInfo?.users?.items.find(
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
            eq: firstChatRoomInfo?.id!,
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
          chatroomID: firstChatRoomInfo?.id!,
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

    if (userSender !== artificialInteligenceUserId) {
      const response = await sendMessageToOpenAI(
        messageType === MessageType.AUDIO ? audioMessage! : text,
      );
      let dataResponse = undefined;
      if (response?.id) {
        const { data: createChatRoomMessageData } = await createChatRoomMessage(
          {
            variables: {
              input: {
                chatroomID: firstChatRoomInfo?.id!,
                text: response.choices[0].message.content,
                userID: artificialInteligenceUserId,
                showMenu: false,
                userName: aiInfo?.user?.name!,
              },
            },
          },
        );
        dataResponse = createChatRoomMessageData;
        console.log(
          "🚀 ~ useChatWithAiScreen ~ createChatRoomMessageData:",
          createChatRoomMessageData,
        );
      }
    }

    refetchListMessages();
    setReRenderChatMessages(!reRenderChatMessages);
    // if (createChatRoomMessageData?.createMessage?.showMenu) {
    //   handleCreateMessage("Menu", false, artificialInteligenceUserId, "AI");
    // }
  };

  useEffect(() => {
    if (!mountedRef.current) return;
    if (!checkIfUserHasAiChatRoom && !loadingListUserhatRoomsQuery) {
      createChatRoomFunction();
    }
  }, [mountedRef.current, loadingListUserhatRoomsQuery]);

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
