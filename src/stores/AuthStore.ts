import { flow, Instance, SnapshotOut, types } from "mobx-state-tree";

import { Session, SessionModel } from "@app/models";
import { supabase } from "@app/utils/supabase";
import {
  AuthResponse,
  Session as SupabaseSession,
} from "@supabase/supabase-js";
import { Alert } from "react-native";

export const AuthStoreModel = types
  .model("AuthStore")
  .volatile(() => ({
    session: null as Session | null,
    isLoading: false,
  }))
  .views((store) => ({
    get isAuthenticated() {
      return !!store.session?.state;
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
        Alert.alert((error as Error).message);
        throw error;
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
        Alert.alert((error as Error).message);
        throw error;
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
        Alert.alert((error as Error).message);
        throw error;
      } finally {
        store.isLoading = false;
      }
    }),
    resetPass: flow(function* (email: string) {
      try {
        store.isLoading = true;
        const { error } = yield supabase.auth.resetPasswordForEmail(email, {
          redirectTo: "blitz://update-pass",
        });
        store.session = null;
        if (error) throw error;
      } catch (error) {
        Alert.alert((error as Error).message);
        throw error;
      } finally {
        store.isLoading = false;
      }
    }),
    updatePass: flow(function* (pass: string) {
      try {
        store.isLoading = true;
        const { error } = yield supabase.auth.updateUser({ password: pass });
        store.session = null;
        if (error) throw error;
      } catch (error) {
        Alert.alert((error as Error).message);
        throw error;
      } finally {
        store.isLoading = false;
      }
    }),
    logout: flow(function* () {
      try {
        store.isLoading = true;
        const { error } = yield supabase.auth.signOut();
        store.session = null;
        if (error) throw error;
      } catch (error) {
        Alert.alert((error as Error).message);
        throw error;
      } finally {
        store.isLoading = false;
      }
    }),
  }));

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshot extends SnapshotOut<typeof AuthStoreModel> {}
