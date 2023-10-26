import { Button, TextField, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";
import { NavioScreen } from "rn-navio";

export const SignUp: NavioScreen = ({}) => {
  return (
    <View flex paddingH-25 paddingT-120>
      <TextField placeholder={"Login"} floatingPlaceholder />
      <TextField placeholder={"Password"} secureTextEntry floatingPlaceholder />
      <View marginT-100>
        <Bounceable>
          <Button text70 white background-orange30 label="Login" />
        </Bounceable>
        <Button link text70 orange30 label="Sign Up" marginT-20 />
      </View>
    </View>
  );
};

SignUp.options = {
  title: "Sign up",
};
