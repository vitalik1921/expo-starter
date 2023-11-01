import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { Session as SupabaseSession } from "@supabase/supabase-js";
import { UserModel } from "./UserModel";

export const SessionModel = types.model("SessionModel").props({
  state: types.maybeNull(types.frozen<SupabaseSession>()),
  user: types.maybeNull(UserModel),
});

export type Session = {} & Instance<typeof SessionModel>;
export type SessionSnapshot = {} & SnapshotOut<typeof SessionModel>;
