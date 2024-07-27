// src/components/CreatePost.tsx
import React, { useCallback, useState } from "react";
import { TextInput, View, ScrollView, Image } from "react-native";
import styled from "styled-components/native";
import { CreatePostMutation, CreatePostMutationVariables } from "../../../API";
import { createPost } from "@/graphql/mutations";
import { gql, useMutation, useQuery } from "@apollo/client";
import GoBack from "@/components/GoBack/GoBack";
import Text from "@/components/Text";
import { Column, Container, Row } from "@/theme/GlobalComponents";
import Button from "@/components/Button/Button";
import { openCamera, openImageLibrary } from "@/utils/cameraOrImageLibrary";

const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  height: 150px;
  text-align-vertical: top;
`;

const CreatePost = () => {
  const [useCreatePostMutation] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(gql(createPost));
  const [content, setContent] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
  console.log("🚀 ~ CreatePost ~ images:", images);
  const [userID, setUserID] = useState(""); // Set the userID from your user authentication context

  const handleCreatePost = async () => {
    const input: CreatePostMutationVariables = {
      input: {
        content,
        audioUrl,
        videoUrl,
        images,
        userID,
      },
    };

    try {
      const { data } = await useCreatePostMutation({
        variables: input,
      });

      if (data?.createPost) {
        console.log("Post created successfully", data.createPost);
      }
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  const takePicture = async () => {
    try {
      const image = await openCamera();
      console.log("🚀 ~ takePicture ~ image:", image);
      const imageUri = image?.uri as string;
      setImages([...images, imageUri]);
    } catch (error) {
      console.error("Error choosing image", error);
    }
  };

  const pickImage = async () => {
    try {
      const image = await openImageLibrary();
      console.log("🚀 ~ pickImage ~ image:", image);
      const imageUri = image?.uri as string;
      setImages([...images, imageUri]);
    } catch (error) {
      console.error("Error choosing image", error);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleChangeText = useCallback(
    (text: string) => {
      setContent(text);
    },
    [content],
  );

  return (
    <Container backgroundColor="white" padding={20}>
      <Row>
        <GoBack />
        <Text size="heading4" weight="black" align="right">
          Create Post
        </Text>
      </Row>
      <ScrollView style={{ marginTop: 20 }}>
        <TextArea
          maxLength={200}
          placeholder="Content"
          onChangeText={handleChangeText}
        />
        <Text size="tiny" align="right" style={{ marginTop: -10 }}>
          {" "}
          max characteres:200
        </Text>
        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
          {images.length > 0 &&
            images?.map((image, index) => (
              <Column key={index}>
                <Text onPress={() => removeImage(index)}>Remove </Text>
                <Image
                  source={{ uri: image }}
                  style={{ width: 100, height: 140 }}
                />
              </Column>
            ))}
        </ScrollView>
        <Column>
          <Button
            backgroundColor="lightgreen"
            textColor="black"
            buttonText="Take Picture"
            onPressButton={takePicture}
          />
          <Button
            backgroundColor="lightgreen"
            textColor="black"
            buttonText="Pick Image"
            onPressButton={pickImage}
          />
        </Column>
      </ScrollView>
      <View style={{ height: 50 }}>
        <Button
          backgroundColor="primary"
          textColor="white"
          buttonText="Create Post"
          onPressButton={handleCreatePost}
        />
      </View>
    </Container>
  );
};

export default CreatePost;
