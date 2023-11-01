import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const OrganizationModel = types.model("OrganizationModel").props({});

export type Organization = {} & Instance<typeof OrganizationModel>;
export type OrganizationSnapshot = {} & SnapshotOut<typeof OrganizationModel>;
