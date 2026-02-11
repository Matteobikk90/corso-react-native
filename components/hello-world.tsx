import { styles } from "@/constants/styles/hello-world";
import { useCallback } from "react";
import { View } from "react-native";
import { ToDo } from "./todo-list";

export function HelloWorld() {
  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <Text style={{ fontSize: 40 }}>React Native — Hello World</Text>
        <Image
          style={styles.image}
          source={require("../assets/images/favicon.png")}
          // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        /> */}
        {/* <ButtonHome text="Click me!" />
        {handleLogic2()} */}

        {/* <HelloClass name="Matteo" handleClick={handleClick} /> */}
        {/* <Counter /> */}

        {/* <ItemsList /> */}

        <ToDo />
      </View>
    </>
  );
}
