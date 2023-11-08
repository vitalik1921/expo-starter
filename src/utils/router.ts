import { useLayoutEffect } from "react";
import { useStores } from "./store";
import { router } from "expo-router";

export const useProtected = () => {
  const { auth } = useStores();

  useLayoutEffect(() => {
    if (!auth.isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [auth.isAuthenticated]);
};
