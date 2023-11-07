import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";
import { usePathname, useSegments, useNavigation, useRootNavigation } from "expo-router";
import * as Linking from "expo-linking";
import { useRoute } from "@react-navigation/native";

export const VerificationHandler = () => {
  const pathname = usePathname();
  const segments = useSegments();
  const route = useRoute();

  // const some = useLocalSearchParams();
  console.warn("pathname", pathname);
  console.warn("segments", segments);
  console.warn("route", route);

  Linking.getInitialURL().then((url) => {
    console.warn(url);
  });
  return (
    <SafeAreaView className="flex flex-1">
      <Text>VerificationHandler</Text>
    </SafeAreaView>
  );
};

export default VerificationHandler;
