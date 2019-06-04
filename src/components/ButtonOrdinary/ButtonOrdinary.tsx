import { Color } from 'csstype';
import * as React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import FontSize from 'src/styles/FontSize';
import MarginSize from 'src/styles/MarginSize';

export interface IProps {
  title: string;
  backgroundColor?: Color;
  fontColor?: Color;
  onPress: (event: GestureResponderEvent) => void;
}

export default class ButtonOrdinary extends React.Component<IProps> {
  public render() {
    const { onPress, title, backgroundColor, fontColor } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={Object.assign(
          {
            margin: MarginSize.medium,
            backgroundColor: "lightgray",
            padding: MarginSize.large,
            alignItems: "center"
          },
          backgroundColor ? { backgroundColor } : {}
        )}
      >
        <Text
          style={Object.assign(
            { color: "black", fontSize: FontSize.medium },
            fontColor ? { color: fontColor } : {}
          )}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
