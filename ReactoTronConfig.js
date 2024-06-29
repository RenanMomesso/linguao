import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .use(trackGlobalErrors())
  .configure()
  .useReactNative({
    storybook: true,
  }) 
  .connect(); 

console.tron = Reactotron;

export default Reactotron;