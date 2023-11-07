import { Header1 } from "@app/components";
import { Slot } from "expo-router";

export const RootLayout = () => {
  return (
    <>
      <Header1 onRightButtonPress={() => null} />
      <Slot />
    </>
  );
};

export default RootLayout;
