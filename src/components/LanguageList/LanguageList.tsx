import { View, Text, FlatList } from "react-native";
import React from "react";
import LanguageItem from "../LanguageItem/LanguageItem";

const LanguageList = ({
  data,
  setSelectedLanguage,
  selectedLanguage,
}: {
  data: any;
  setSelectedLanguage: any;
  selectedLanguage: {
    languages: string;
    flags: string;
  };
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: 20,
              width: "100%",
              backgroundColor:"white"
            }}
          />
        );
      }}
      renderItem={({ item }) => (
        <LanguageItem
        selectedLanguage={selectedLanguage}
          onPressItem={() => {
            setSelectedLanguage(item);
          }}
          itemText={item.languages}
          itemImage={item.flags}
        />
      )}
    />
  );
};

export default LanguageList;
