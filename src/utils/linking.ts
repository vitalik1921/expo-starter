import { Link } from "@/components";
import { useEffect, useLayoutEffect, useState } from "react";

import { Linking } from "react-native";

let currentURL: string | null = null;
let listeners: ((url: string | null) => void)[] = [];
let hasEventListener = false;

const handleDeepLink = (event: { url: string }) => {
  const { url } = event;
  currentURL = url;
  listeners.forEach((listener) => listener(url));
};

if (!hasEventListener) {
  Linking.getInitialURL().then((url) => {
    url && handleDeepLink({ url });
    Linking.addEventListener("url", handleDeepLink);
  });
  hasEventListener = true;
}

export const useGetUrl = (): string | null => {
  const [url, setURL] = useState<string | null>(currentURL);

  useLayoutEffect(() => {
    listeners.push(setURL);

    return () => {
      const index = listeners.indexOf(setURL);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return url;
};

export const getSupabaseUrlParams = (url: string): Record<string, string> => {
  const chunks = url.split("#");
  const paramsStr = chunks[1];
  return paramsStr.split("&").reduce((acc, curr) => {
    const chunks = curr.split("=");
    const key = chunks[0];
    const value = chunks[1];
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
};
