import { Session } from "@app/models";
import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const AuthStoreModel = types.model("UIStore").volatile(() => ({
  session: null as Session | null,
  isLoading: false,
}));

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshot extends SnapshotOut<typeof AuthStoreModel> {}
