import { ExercisesStackProps } from "@/interface/navigation.interface";
import Home from "@/pages/Home/HomeScreen";
import LoadingExercisesScreen from "@/pages/ExerciciesScreens/LoadingExercisesScreen/LoadingExercisesScreen";
import SpeakTheSentenceScreen from "@/pages/ExerciciesScreens/SpeakTheSentenceScreen/SpeakTheSentenceScreen";
import TranslateSentenceScreen from "@/pages/TranslateSentenceScreen/TranslateSentenceScreen";
import WhatDoesTheAudioSayScreen from "@/pages/ExerciciesScreens/WhatDoesTheAudioSayScreen/WhatDoesTheAudioSayScreen";
import WhatDoesTheSentenceSayScreen from "@/pages/ExerciciesScreens/WhatDoesTheSentenceSayScreen/WhatDoesTheSentenceSayScreen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MatchWordPairScreen from "@/pages/ExerciciesScreens/MatchWordPairScreen/MatchWordPairScreen";
import FillInTheBlanksScreen from "@/pages/ExerciciesScreens/FillInTheBlanksScreen/FillInTheBlanksScreen";

const Stack = createStackNavigator<ExercisesStackProps>();

const ExercisesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ExercicesLoading"
        component={LoadingExercisesScreen}
      />
      <Stack.Screen
        name="TranslateSentenceScreen"
        component={TranslateSentenceScreen}
      />
      <Stack.Screen
        name="SpeakTheSentenceScreen"
        component={SpeakTheSentenceScreen}
      />
      <Stack.Screen
        name="WhatDoesTheAudioSayScreen"
        component={WhatDoesTheAudioSayScreen}
      />
      <Stack.Screen
        name="WhatDoesTheSentenceSayScreen"
        component={WhatDoesTheSentenceSayScreen}
      />
      <Stack.Screen
        name="MatchWordPairScreen"
        component={MatchWordPairScreen}
      />
      <Stack.Screen
        name="FillInTheBlanksScreen"
        component={FillInTheBlanksScreen}
      />
    </Stack.Navigator>
  );
};

export default ExercisesNavigation;
