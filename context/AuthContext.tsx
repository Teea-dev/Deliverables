import React, { createContext, useContext, useState, useEffect } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { User, AuthState } from "@/types/auth";

interface AuthContextType extends AuthState {
  signIn: (phone: string) => Promise<void>;
  verifyCode: (code: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    isAuthenticated: false,
  });

  const [verificationId, setVerificationId] = useState<string>("");

  useEffect(() => {
    const unsuscribe = auth().onAuthStateChanged((user) => {
      setState({
        user: user
          ? {
              id: user.uid,
              phoneNumber: user.phoneNumber || "",
              email: user.email || "",
              name: user.displayName || "",
            }
          : null,
        loading: false,
        isAuthenticated: !!user,
      });
    });
    return unsuscribe;
  }, []);
  const signIn = async (phone: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      if (confirmation.verificationId) {
        setVerificationId(confirmation.verificationId);
      }
    } catch (error) {
      console.error(error, "Sign in error");
      throw error;
    }
  };

  const verifyCode = async (code: string) => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      console.error(error, "Verify code error");
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error, "Sign out error");
      throw error;
    }
  };

  const updateUserProfile = async (data: Partial<User>) => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        await currentUser.updateProfile({
          displayName: data.name,
        });
      }
      setState((prev) => ({
        ...prev,
        user: prev.user ? { ...prev.user, ...data } : null,
      }));
    } catch (error) {
      console.error(error, "Update user profile error");
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...state, signIn, verifyCode, signOut, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (undefined === context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
