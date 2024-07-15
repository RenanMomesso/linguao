import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ReverseIcon } from "@/assets/images";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useAppSelector } from "@/store";
import Button from "@/components/Button/Button";
import { gql, useMutation } from "@apollo/client";
import {
  Category,
  CreateFlashCardsMutation,
  CreateFlashCardsMutationVariables,
  EnglishLevel,
} from "@/API";
import { createFlashCards } from "@/graphql/mutations";

const CreateFlashCardModal = () => {
  const { user } = useAppSelector(state => state.user);
  const [CreateFlashCardsDocument] = useMutation<
    CreateFlashCardsMutation,
    CreateFlashCardsMutationVariables
  >(gql(createFlashCards));
  const navigation = useNavigation();
  const [isFlipped, setIsFlipped] = useState(false);
  const cardAnimatedValue = useSharedValue(0);
  const chatMessageState = useAppSelector(state => state.chatMessageReducer);

  const cardInterpolateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${cardAnimatedValue.value}deg` }],
    };
  });

  const flipCard = () => {
    if (isFlipped) {
      cardAnimatedValue.value = withTiming(0);
    } else {
      cardAnimatedValue.value = withTiming(180);
    }
    setIsFlipped(!isFlipped);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const handleSaveFlashCard = async () => {
    try {
      const { data, errors } = await CreateFlashCardsDocument({
        variables: {
          input: {
            title: chatMessageState.messages.audioText?.slice(0, 25) || "",
            user: String(user.id),
            audioUrl: chatMessageState.messages.text || "",
            description: chatMessageState.messages.audioText || "",
            category: Category.LISTENING,
            imageUrl: "",
            level: EnglishLevel.C2,
          },
        },
      });
      if (errors?.length) {
        console.log(errors);
        return;
      }
      Alert.alert("Flash card created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleClose}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.modal, cardInterpolateStyle]}>
            {isFlipped ? (
              <>
                <TouchableOpacity
                  onPress={handleClose}
                  style={styles.closeButton}>
                  <Text>X</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={flipCard} style={styles.flipButton}>
                  <Text style={styles.flipText}>
                    {/* <ReverseIcon width={25} height={25} /> */}
                    reverse
                  </Text>
                </TouchableOpacity>
                <View
                  style={[
                    styles.cardContainer,
                    { transform: [{ rotateY: "180deg" }] },
                  ]}>
                  <Animated.View style={[styles.card]}>
                    <TextInput
                      style={styles.input}
                      placeholder="Title"
                      defaultValue={chatMessageState.messages.audioText?.slice(
                        0,
                        25,
                      )}
                    />
                  </Animated.View>
                </View>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={handleClose}
                  style={styles.closeButton}>
                    <Text>X</Text>
                </TouchableOpacity>
                <View
                  style={[
                    styles.cardContainer,
                    {
                      // transform: [{
                      //     rotateY: cardAnimatedValue.value === 0 ? "0deg" : "180deg"
                      // }]
                    },
                  ]}>
                  <Animated.View style={[styles.card, styles.cardFront]}>
                    <TextInput
                      style={styles.input}
                      placeholder="Title"
                      defaultValue={chatMessageState.messages.audioText?.slice(
                        0,
                        25,
                      )}
                    />
                    <TextInput
                      style={[styles.input, styles.description]}
                      placeholder="Description"
                      multiline
                      defaultValue={chatMessageState.messages.audioText || ""}
                    />
                    <TouchableOpacity
                      onPress={flipCard}
                      style={styles.flipButton}>
                      <Text style={styles.flipText}>
                        {/* <ReverseIcon width={25} height={25} /> */}
                        reverse
                      </Text>
                    </TouchableOpacity>
                    <Button
                      backgroundColor="primary"
                      buttonText="Save"
                      onPressButton={handleSaveFlashCard}
                      textColor="white"
                      buttonSize="medium"
                    />
                  </Animated.View>
                  <Animated.View style={[styles.card, styles.cardBack]}>
                    <TextInput
                      style={[styles.input, styles.description]}
                      placeholder="Write behind the card"
                      multiline
                    />
                    <TouchableOpacity
                      onPress={flipCard}
                      style={styles.flipButton}>
                      <Text style={styles.flipText}>Flip to front</Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
              </>
            )}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    height: 400,
    margin: 20,
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
  },
  description: {
    height: 100,
  },
  flipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  flipText: {
    color: "white",
    textAlign: "center",
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  card: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFront: {
    zIndex: 1,
  },
  cardBack: {
    transform: [{ rotateY: "180deg" }],
    zIndex: 0,
  },
});

export default CreateFlashCardModal;
