import { Component } from "react";
import { Pressable, Text } from "react-native";

export class HelloClass extends Component<{
  name: string;
  handleClick: () => void;
}> {
  render() {
    const { name, handleClick } = this.props;

    return (
      <>
        <Text>Ciao {name}</Text>
        <Pressable onPress={handleClick}>
          <Text>Click me! </Text>
        </Pressable>
      </>
    );
  }
}
