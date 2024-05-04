import TrainingScreenPresentation from "@/pages/TrainingScreenPresentation/TrainingScreenPresentation";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";


const trainingStackNavigationOptions:StackNavigationOptions = {
    headerShown: false
}

const TrainingStackNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={trainingStackNavigationOptions}>
            <Stack.Screen name="Training" component={TrainingScreenPresentation} />
        </Stack.Navigator>
    )

}

export default TrainingStackNavigation;