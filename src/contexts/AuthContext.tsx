import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { getUsers } from "../utils";
import { User } from "../utils";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (updatedUserData: Partial<User>) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginAction {
  type: "login";
  payload: User;
}

interface LogoutAction {
  type: "logout";
}

interface UpdateUserAction {
  type: "update";
  payload: User;
}

type AuthAction = LoginAction | LogoutAction | UpdateUserAction;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "update":
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      throw new Error("Unknown action");
  }
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function login(email: string, password: string) {
    const users = await getUsers();

    const user: User | undefined = users?.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      dispatch({ type: "login", payload: user });
    } else {
      alert("User not found");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  async function updateUser(updatedUserData: Partial<User>) {
    dispatch({ type: "update", payload: updatedUserData });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
