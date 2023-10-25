import { Button, Text, TextField, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";
import { NavioScreen } from "rn-navio";

export const Login: NavioScreen = ({}) => {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>
        Welcome
      </Text>
      <TextField placeholder={"Login"} floatingPlaceholder />
      <TextField placeholder={"Password"} secureTextEntry floatingPlaceholder />
      <View marginT-100 center>
        <Bounceable>
          <Button text70 white background-orange30 label="Login" />
        </Bounceable>
        <Button link text70 orange30 label="Sign Up" marginT-20 />
      </View>
    </View>
  );
};
