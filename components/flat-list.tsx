import { FlatList, type ListRenderItemInfo, Text, View } from "react-native";

type FlatItemType = { id: string; label: string };

export function ToDo() {
  const items: FlatItemType[] = [
    { id: "1", label: "uno" },
    { id: "2", label: "due" },
    { id: "3", label: "tre" },
  ];

  const handleRenderItem = ({ item }: ListRenderItemInfo<FlatItemType>) => (
    <View>
      <Text>{item.label}</Text>
    </View>
  );

  const keyExtractor = (items: FlatItemType) => items.id;

  return (
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={handleRenderItem}
    />
  );
}
