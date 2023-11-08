import { useLayoutEffect } from "react";

import { useGetUrl } from "@/utils/linking";

export const VerificationHandler = () => {
  const url = useGetUrl();

  useLayoutEffect(() => {
    if (!url) return;
  }, [url]);

  return null;
};

export default VerificationHandler;
