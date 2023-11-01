import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UIStoreModel } from "./UIStore";
import { AuthStoreModel } from "./AuthStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  ui: types.optional(UIStoreModel, {}),
  auth: types.optional(AuthStoreModel, {}),
});

export type RootStore = Instance<typeof RootStoreModel>;
export type RootStoreSnapshot = {} & SnapshotOut<typeof RootStoreModel>;
