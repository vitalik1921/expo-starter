import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UserModel } from "./UserModel";

export const SessionModel = types.model("SessionModel").props({
  user: types.maybeNull(UserModel),
});

export interface Session extends Instance<typeof SessionModel> {}
export interface SessionSnapshot extends SnapshotOut<typeof SessionModel> {}
