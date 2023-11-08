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

export function useGetUrl(): string | null {
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
}
