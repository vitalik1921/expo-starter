import { Redirect } from "expo-router";

export const Root = () => {
  return <Redirect href={"/auth/start"} />;
};

export default Root;
