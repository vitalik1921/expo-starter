import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const SubscriptionModel = types.model("SubscriptionModel").props({});

export interface Subscription extends Instance<typeof SubscriptionModel> {}
export interface SubscriptionSnapshot
  extends SnapshotOut<typeof SubscriptionModel> {}
