import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";

import { Button } from "@/components";
import { useStores } from "@/utils/store";

export const Dashboard = () => {
  const { auth } = useStores();
  return (
    <SafeAreaView className="flex flex-1">
      <Text>Test</Text>
      <Button label="logout" onPress={auth.logout} />
    </SafeAreaView>
  );
};

export default Dashboard;
