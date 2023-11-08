import { useLayoutEffect } from "react";

import { router } from "expo-router";
import { Alert } from "react-native";

import { getSupabaseUrlParams, useGetUrl } from "@/utils/linking";
import { supabase } from "@/utils/supabase";

export const VerificationHandler = () => {
  const url = useGetUrl();

  useLayoutEffect(() => {
    if (!url) return;

    if (url.indexOf("#") !== -1) {
      const params = getSupabaseUrlParams(url);

      if ("error" in params && "error_description" in params) {
        Alert.alert(params["error_description"].split("+").join(" "));
      }

      if ("access_token" in params && "refresh_token" in params) {
        supabase.auth
          .setSession({
            access_token: params["access_token"],
            refresh_token: params["refresh_token"],
          })
          .then(() => {
            router.push("/dashboard");
          });
      }
    }
  }, [url]);

  return null;
};

export default VerificationHandler;
