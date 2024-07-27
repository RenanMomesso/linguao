// src/components/CreatePost.tsx
import React, { useState } from "react";
import { Button, TextInput, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { CreatePostMutation, CreatePostMutationVariables } from "../../../API";
import { createPost } from "@/graphql/mutations";
import { gql, useMutation, useQuery } from "@apollo/client";
import useHideBottomNavigation from "@/hooks/useHideBottomNavigation";

const Container = styled.View`
  padding: 20px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CreatePost = () => {
  useHideBottomNavigation();
  const [useCreatePostMutation] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(gql(createPost));
  const [content, setContent] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
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

  return (
    <ScrollView>
      <Container>
        <Input
          placeholder="Content"
          value={content}
          onChangeText={setContent}
        />
        <Input
          placeholder="Audio URL"
          value={audioUrl}
          onChangeText={setAudioUrl}
        />
        <Input
          placeholder="Video URL"
          value={videoUrl}
          onChangeText={setVideoUrl}
        />
        <Input
          placeholder="Images (comma separated)"
          value={images.join(", ")}
          onChangeText={text =>
            setImages(text.split(",").map(item => item.trim()))
          }
        />
        <Button title="Create Post" onPress={handleCreatePost} />
      </Container>
    </ScrollView>
  );
};

export default CreatePost;
