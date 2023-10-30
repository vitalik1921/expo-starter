import ky from "ky";
import { supabase } from "./supabase";

export const http = ky.create({
  prefixUrl: process.env.EXPO_PUBLIC_AWS_APP_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const session = await supabase.auth.getSession();
        if (!request.headers.get("Authorization")) {
          request.headers.set(
            "Authorization",
            `Bearer ${session.data.session?.access_token}`
          );
        }
      },
    ],
  },
});
