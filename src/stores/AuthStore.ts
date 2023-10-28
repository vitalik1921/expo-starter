import { flow, Instance, SnapshotOut, types } from "mobx-state-tree";

import { Session, SessionModel } from "@app/models";
import { supabase } from "@app/utils/supabase";
import {
  AuthResponse,
  Session as SupabaseSession,
} from "@supabase/supabase-js";

export const AuthStoreModel = types
  .model("AuthStore")
  .volatile(() => ({
    session: null as Session | null,
    isLoading: false,
  }))
  .views((store) => ({
    get isAuthenticated() {
      return !!store.session;
    },
  }))
  .actions((store) => ({
    setLoading: (state: boolean) => {
      store.isLoading = state;
    },
    setSession: (session: SupabaseSession | null) => {
      store.session = SessionModel.create({ state: session, user: null });
    },
    signInWithGoogle: flow(function* () {
      try {
        store.isLoading = true;
      } catch (error) {
      } finally {
        store.isLoading = false;
      }
    }),
    signInWithPassword: flow(function* (email: string, password: string) {
      try {
        store.isLoading = true;
        const { data, error }: AuthResponse =
          yield supabase.auth.signInWithPassword({
            email,
            password,
          });
        if (error) throw error;
        store.session = SessionModel.create({
          state: data.session,
          user: null,
        });
      } catch (error) {
      } finally {
        store.isLoading = false;
      }
    }),
    signUpWithPassword: flow(function* (email: string, password: string) {
      try {
        store.isLoading = true;
        const { data, error }: AuthResponse = yield supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        store.session = SessionModel.create({
          state: data.session,
          user: null,
        });
      } catch (error) {
        // TODO: process error
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
