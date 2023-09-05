import { User } from "firebase/auth";
import { createContext } from "react";
import { useAuth } from "./useAuth";

type AuthProviderProps = {
  children: React.ReactNode;
};
type AuthContextType = {
  signedInUser: User | null;
  registerUser: (email: string, password: string) => void;
  logInUser: (email: string, password: string) => void;
  logOutUser: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { signedInUser, registerUser, logInUser, logOutUser } = useAuth();

  return (
    <AuthContext.Provider
      value={{ signedInUser, registerUser, logInUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
