import { Component, type ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
type Props = { children: ReactNode; onReset: () => void };
type State = { hasError: boolean };

export class ScreenErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("[Boundary] errore schermata", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Qualcosa è andato storto</Text>
          <Pressable onPress={this.props.onReset}>
            <Text>Torna alla home</Text>
          </Pressable>
        </View>
      );
    }

    return this.props.children;
  }
}
