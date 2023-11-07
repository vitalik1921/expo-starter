import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";
import { usePathname, useSegments } from "expo-router";
import * as Linking from "expo-linking";

export const UpdatePassHandler = () => {
  const pathname = usePathname();
  const segments = useSegments();
  // const some = useLocalSearchParams();
  console.warn("pathname", pathname);
  console.warn("segments", segments);

  Linking.getInitialURL().then((url) => {
    console.warn(url);
  });
  return (
    <SafeAreaView className="flex flex-1">
      <Text>UpdatePassHandler</Text>
    </SafeAreaView>
  );
};

export default UpdatePassHandler;
