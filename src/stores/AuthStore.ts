import { Session, SessionModel } from "@app/models";
import { supabase } from "@app/utils/supabase";
import { Instance, SnapshotOut, flow, types } from "mobx-state-tree";

export const AuthStoreModel = types
  .model("AuthStore")
  .volatile(() => ({
    session: null as Session | null,
    isLoading: true,
  }))
  .actions((store) => ({
    initAuthStateListener: flow(function* () {
      supabase.auth.onAuthStateChange((_, session) => {
        // TODO: implement user fetching
        console.warn("session", session);
        store.session = SessionModel.create({ state: session, user: null });
        store.isLoading = false;
      });
    }),
    signInWithGoogle: flow(function* () {
      try {
        store.isLoading = true;
      } catch (error) {
      } finally {
        store.isLoading = false;
      }
    }),
    signInWithPassword: flow(function* () {
      try {
        store.isLoading = true;
      } catch (error) {
      } finally {
        store.isLoading = false;
      }
    }),
    signUpWithPassword: flow(function* () {
      try {
        store.isLoading = true;
      } catch (error) {
      } finally {
        store.isLoading = false;
      }
    }),
    logout: flow(function* () {
      try {
        store.isLoading = true;
        yield supabase.auth.signOut();
        store.session = null;
      } catch (error) {
      } finally {
        store.isLoading = false;
      }
    }),
  }));

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshot extends SnapshotOut<typeof AuthStoreModel> {}
