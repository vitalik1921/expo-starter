import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const OrganizationModel = types.model("OrganizationModel").props({});

export interface Organization extends Instance<typeof OrganizationModel> {}
export interface OrganizationSnapshot
  extends SnapshotOut<typeof OrganizationModel> {}
