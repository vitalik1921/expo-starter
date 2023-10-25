import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UIStoreModel } from "./UIStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  ui: types.optional(UIStoreModel, {}),
});

export type RootStore = Instance<typeof RootStoreModel>;
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
