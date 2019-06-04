import * as React from 'react';
import { Text } from 'react-native';

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class SettingsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Text>Just settings</Text>;
  }
}
