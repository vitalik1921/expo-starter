import { useLayoutEffect } from "react";

import { useGetUrl } from "@/utils/linking";

export const UpdatePassHandler = () => {
  const url = useGetUrl();

  useLayoutEffect(() => {
    if (!url) return;
    console.warn("url", url);
  }, [url]);

  return null;
};

export default UpdatePassHandler;
