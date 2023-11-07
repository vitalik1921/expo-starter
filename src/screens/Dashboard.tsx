import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";

import { Button, Header1 } from "@app/components";
import { useStores } from "@app/utils/store";
// import { navio } from "@app/Navigation";

export const Dashboard = () => {
  const { auth } = useStores();
  return (
    <SafeAreaView className="flex flex-1">
      <Text>Test</Text>
      <Button label="logout" onPress={auth.logout} />
    </SafeAreaView>
  );
};

Dashboard.options = {
  header: () => <Header1 onRightButtonPress={() => null} />,
  headerTitle: "",
};