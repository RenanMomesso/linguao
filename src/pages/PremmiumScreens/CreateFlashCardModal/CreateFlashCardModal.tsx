import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
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
} from "../../../API";
import { createFlashCards } from "@/graphql/mutations";
import Text from "@/components/Text";
import { Column } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";

interface FlashCardModalProps {
  route: {
    params: {
      title: string;
      description: string;
      audioUrl: string;
      imageUrl: string;
    };
  };
}

const CreateFlashCardModal = ({ route }: FlashCardModalProps) => {
  const cardInfo = route?.params;
  console.log("🚀 ~ CreateFlashCardModal ~ cardInfo:", JSON.stringify(cardInfo, undefined,3))
  const title = cardInfo?.title;
  const description = cardInfo?.description;
  const audioUrl = cardInfo?.audioUrl;
  const imageUrl = cardInfo?.imageUrl;
  const [cardInput, setCardInput] = useState({
    title,
    description,
    audioUrl,
    imageUrl,
  });

  const { user } = useAppSelector(state => state.user);
  const [CreateFlashCardsDocument] = useMutation<
    CreateFlashCardsMutation,
    CreateFlashCardsMutationVariables
  >(gql(createFlashCards));
  const navigation = useNavigation();
  const [isFlipped, setIsFlipped] = useState(false);
  const cardAnimatedValue = useSharedValue(0);

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
            title: cardInput.title || "",
            user: String(user.id),
            audioUrl: cardInput.description || "",
            description: cardInput.description || "",
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
      console.log("🚀 ~ handleSaveFlashCard ~ data:", data);
      Alert.alert("Flash card created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleClose}>
      <View style={styles.overlay}>
        <Pressable
          onPress={handleClose}
          style={{
            borderWidth: 1,
            borderRadius: 50,
            padding: 1,
            paddingHorizontal: 5,
            backgroundColor: "white",
            position: "absolute",
            top: 20,
            right: 20,
          }}>
          <Text size="heading4" weight="black">
            X
          </Text>
        </Pressable>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.modal, cardInterpolateStyle]}>
            {isFlipped ? (
              <>
                <View
                  style={[
                    styles.cardContainer,
                    { transform: [{ rotateY: "180deg" }] },
                  ]}>
                  <Animated.View style={[styles.card]}>
                    <TextInput
                      style={styles.input}
                      placeholder="Title"
                      defaultValue={cardInput.title}
                    />
                  </Animated.View>
                </View>
              </>
            ) : (
              <>
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
                      maxLength={25}
                      placeholder="Title of your flashcard"
                      defaultValue={cardInput.title?.slice(0, 25)}
                    />
                    <TextInput
                      style={[styles.input, styles.description]}
                      placeholder="Brief description"
                      maxLength={150}
                      multiline
                      defaultValue={cardInput.description || ""}
                    />
                  </Animated.View>
                </View>
              </>
            )}
          </Animated.View>
        </TouchableWithoutFeedback>
        <Column style={{ flex: 1, width: "90%" }}>
          <Pressable
            onPress={flipCard}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              borderRadius: 18,
              backgroundColor: "white",
              width: "100%",
              flex: 1,
              maxHeight: 50,
              elevation: 6,
            }}>
            <Text size="heading4" weight="black">
              Flip to answer
            </Text>
          </Pressable>
          <Pressable
            onPress={handleSaveFlashCard}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              borderRadius: 18,
              backgroundColor: theme.colors.primary,
              width: "100%",
              flex: 1,
              maxHeight: 50,
              elevation: 6,
            }}>
            <Text size="heading4" weight="black" color="white">
              Save
            </Text>
          </Pressable>
        </Column>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    marginTop: 100,
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
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
    fontFamily: theme.fontWeight.semibold,
    fontSize: 16,
  },
  description: {
    fontFamily: theme.fontWeight.black,
    fontSize: 18,
    minHeight: "50%",
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
