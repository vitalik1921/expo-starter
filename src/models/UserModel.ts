import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const UserModel = types.model("UserModel").props({});

export type User = {} & Instance<typeof UserModel>;
export type UserSnapshot = {} & SnapshotOut<typeof UserModel>;
