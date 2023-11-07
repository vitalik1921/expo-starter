import { Appearance, Language } from "@/utils/enums";
import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const UIStoreModel = types
  .model("UIStore")
  .props({
    isAppearanceSystem: types.optional(types.boolean, true),
    appearance: types.optional(types.frozen<Appearance>(), "system"),
    language: types.optional(types.frozen<Language>(), "system"),
  })
  .actions((store) => ({
    setAppearance: (appearance: Appearance) => {
      if (appearance === "system") {
        store.isAppearanceSystem = true;
      }
      store.appearance = appearance;
    },
    setLanguage: (language: Language) => {
      store.language = language;
    },
  }));

export type UIStore = {} & Instance<typeof UIStoreModel>;
export type UIStoreSnapshot = {} & SnapshotOut<typeof UIStoreModel>;
