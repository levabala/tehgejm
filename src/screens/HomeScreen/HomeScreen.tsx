import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import ButtonOrdinary from 'src/components/ButtonOrdinary';
import FontSize from 'src/styles/FontSize';
import MarginSize from 'src/styles/MarginSize';

import Screen from '../Screens';

export interface IProps {
  children?: React.ReactNode;
  navigation: NavigationComponent;
}

export interface IState {}

const styles = StyleSheet.create({
  buttonOrdinary: {
    margin: 5,
    backgroundColor: "lightgray",
    padding: 5,
    alignItems: "center"
  }
});

export default class HomeScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: "Welcome",
    header: null
  };

  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  private navigateGame = () => {
    this.props.navigation.navigate(Screen.Game);
  };
  private navigateSettings = () => {
    this.props.navigation.navigate(Screen.Settings);
  };

  public render() {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: "space-between",
          flexDirection: "column",
          flex: 1
        }}
      >
        <View>
          <Text
            style={{
              fontSize: FontSize.extralarge,
              color: "black",
              alignSelf: "center",
              margin: MarginSize.large
            }}
          >
            Teh Gejm
          </Text>
        </View>

        <View>
          <ButtonOrdinary onPress={this.navigateGame} title="Game" />
          <ButtonOrdinary onPress={this.navigateSettings} title="Settings" />
        </View>
      </View>
    );
  }
}
