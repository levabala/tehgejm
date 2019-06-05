import { createAppContainer, createStackNavigator } from 'react-navigation';
import GameComponent from 'src/gameengine/GameEngine';
import HomeScreen from 'src/screens/HomeScreen';
import Screen from 'src/screens/Screens';
import SettingsScreen from 'src/screens/SettingsScreen';

const MainNavigator = createStackNavigator(
  {
    [Screen.Home]: { screen: HomeScreen },
    [Screen.Settings]: { screen: SettingsScreen },
    [Screen.Game]: {
      screen: GameComponent,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: Screen.Game }
);

const App = createAppContainer(MainNavigator);

export default App;
