import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const SubscriptionModel = types.model("SubscriptionModel").props({});

export type Subscription = {} & Instance<typeof SubscriptionModel>;
export type SubscriptionSnapshot = {} & SnapshotOut<typeof SubscriptionModel>;
