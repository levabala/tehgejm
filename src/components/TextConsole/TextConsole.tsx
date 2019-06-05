import * as React from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import IConsoleMessage from 'src/interfaces/IConsoleMessage';

export interface Props {
  style: StyleProp<ViewStyle>;
}

export interface State {
  lines: IConsoleMessage[];
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "rgba(200,200,200,0.1)"
  }
});

export default class TextConsole extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      lines: [{ value: "Console initialized", time: new Date() }]
    };
  }

  public render() {
    const { lines } = this.state;
    const { style } = this.props;

    return (
      <Text style={Object.assign(style, styles.main)}>
        {lines.map(line => (
          <Text key={line.time.valueOf()}>
            <Text style={{ fontWeight: "bold" }}>
              {`${line.time.getHours()}:${line.time.getMinutes()}`}
            </Text>{" "}
            {line.value}
          </Text>
        ))}
      </Text>
    );
  }
}
