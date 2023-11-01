import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native-ui-lib";

export const Tab2: FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity className="flex-1 bg-primary-lighter">
        <Text>Tab2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
