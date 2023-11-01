import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Header1 } from "@app/components";
import { navio } from "@app/Navigation";

export const Dashboard: NavioScreen = () => {
  return (
    <SafeAreaView className="flex flex-1">
      <Text>Test</Text>
    </SafeAreaView>
  );
};

Dashboard.options = {
  header: () => (
    <Header1 onRightButtonPress={() => navio.N.navigate("Settings")} />
  ),
  headerTitle: "",
};
