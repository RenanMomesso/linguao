import { TrainingStackProps } from "@/interface/navigation.interface";
import TrainingListeningsScreen from "@/pages/TrainingScreens/TrainingListeningsScreen/TrainingListeningsScreen";
import TrainingScreenPresentation from "@/pages/TrainingScreens/TrainingScreenPresentation/TrainingScreenPresentation";
import TrainingScreenVideoLevels from "@/pages/TrainingScreens/TrainingScreensVideo/TrainingScreenVideoLevels/TrainingScreenVideoLevels";
import TrainingVideosScreen from "@/pages/TrainingScreens/TrainingScreensVideo/TrainingVideosScreen/TrainingVideosScreen";
import TrainingVideoScreen from "@/pages/TrainingScreens/TrainingVideoScreen/TrainingVideoScreen";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

const trainingStackNavigationOptions: StackNavigationOptions = {
  headerShown: false,
};

const TrainingStackNavigation = () => {
  const Stack = createStackNavigator<TrainingStackProps>();

  return (
    <Stack.Navigator screenOptions={trainingStackNavigationOptions}>
      <Stack.Screen name="Training" component={TrainingScreenPresentation} />
      <Stack.Screen
        name="TrainingListening"
        component={TrainingListeningsScreen}
      />
      <Stack.Screen
        name="TrainingReading"
        component={TrainingScreenPresentation}
      />
      <Stack.Screen
        name="TrainingSpeaking"
        component={TrainingScreenPresentation}
      />
      <Stack.Screen
        name="TrainingWriting"
        component={TrainingScreenPresentation}
      />
      <Stack.Group>
        <Stack.Screen
          name="TrainingVideosScreenLevels"
          component={TrainingScreenVideoLevels}
        />
        <Stack.Screen
          name="TrainingVideosScreen"
          component={TrainingVideosScreen}
        />
        <Stack.Screen
          name="TrainingVideoScreen"
          component={TrainingVideoScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TrainingStackNavigation;
