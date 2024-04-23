import Home from "@/pages/Home/HomeScreen";
import LoadingExercisesScreen from "@/pages/LoadingExercisesScreen/LoadingExercisesScreen";
import TranslateSentenceScreen from "@/pages/TranslateSentenceScreen/TranslateSentenceScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ExercisesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
    </Stack.Navigator>
  );
};

export default ExercisesNavigation;
