import * as Location from "expo-location";

export const getOnce = async () => {
  const pos = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
  });
  return { lat: pos.coords.latitude, lng: pos.coords.longitude };
};

export const startWatch = async (
  subRef: React.RefObject<Location.LocationSubscription | null>,
  onCoords: (c: { lat: number; lng: number }) => void
) => {
  subRef.current?.remove();
  subRef.current = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 3000,
      distanceInterval: 1,
    },
    (pos) => onCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
  );
};
