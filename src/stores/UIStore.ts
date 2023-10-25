import { Appearance } from "@app/utils/enums";
import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const UIStoreModel = types.model("UIStore").props({
  isAppearanceSystem: types.optional(types.boolean, true),
  appearance: types.optional(types.frozen<Appearance>(), "dark"),
});

export interface UIStore extends Instance<typeof UIStoreModel> {}
export interface UIStoreSnapshot extends SnapshotOut<typeof UIStoreModel> {}
