import { Text, View } from "react-native-ui-lib";

import { Button } from "@/components";
import { useStores } from "@/utils/store";

export const Dashboard = () => {
  const { auth } = useStores();
  return (
    <View className="flex-1 p-[24]">
      <Text>Test</Text>
      <Button label="logout" onPress={auth.logout} />
    </View>
  );
};

export default Dashboard;
