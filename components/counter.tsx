import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type InfoType = {
  name: string;
  age: number;
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);

  const [info, setInfo] = useState<InfoType>({
    name: "Matteo",
    age: 30,
  });

  const handleClickCount = () => setCount(count + 1);

  const handleClickPrev = () => setCount((prev) => prev + 1);

  const handleClick2 = () => setCount((prev) => prev - 1);

  //   setItems((prev) => [...prev, newItem]);

  //   setInfo({ ...info, name: "Luca" });

  return (
    <View>
      <Text style={{ margin: "auto" }}>Counter: {count}</Text>
      <Pressable
        style={{
          padding: 20,
          backgroundColor: "red",
          borderRadius: 20,
        }}
        onPress={handleClickPrev}>
        <Text style={{ fontWeight: 800, fontSize: 20 }}>Click me!</Text>
      </Pressable>
    </View>
  );
}
