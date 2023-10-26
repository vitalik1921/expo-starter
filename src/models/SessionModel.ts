import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { Session as SupabaseSession } from "@supabase/supabase-js";
import { UserModel } from "./UserModel";

export const SessionModel = types.model("SessionModel").props({
  state: types.maybeNull(types.frozen<SupabaseSession>()),
  user: types.maybeNull(UserModel),
});

export interface Session extends Instance<typeof SessionModel> {}
export interface SessionSnapshot extends SnapshotOut<typeof SessionModel> {}
