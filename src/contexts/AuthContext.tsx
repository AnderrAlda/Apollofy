import {
    FunctionComponent,
    ReactNode,
    createContext,
    useContext,
    useReducer,
  } from "react";

  export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    profilePicture: string;
    isLoggedIn: boolean;
}
  

const users: User[] = [
    {
        id: 1,
        first_name: "Eira",
        last_name: "Melé",
        email: "eira@eira.com",
        password: "eiraeira",
        profilePicture: "",        
        isLoggedIn: false       
        
    },
    {
        id: 2,
        first_name: "Lucia",
        last_name: "Mercorelli",
        email: "lucia@lucia.com",
        password: "lucialucia",
        profilePicture: "",
        isLoggedIn: false       
        
    },
    {
        id: 3,
        first_name: "Alvaro",
        last_name: "Del Cacho",
        email: "alvaro@alvaro.com",
        password: "alvaroalvaro",
        profilePicture: "",
        isLoggedIn: false       
        
    },
    {
        id: 4,
        first_name: "Ander",
        last_name: "Aldabaldetreku",
        email: "ander@ander.com",
        password: "anderander",
        profilePicture: "",
        isLoggedIn: false       
        
    },
    {
        id: 5,
        first_name: "Javi",
        last_name: "Martin",
        email: "javi@javi.com",
        password: "javijavi",
        profilePicture: "",
        isLoggedIn: false       
        
    }
]
  
  
  interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
  }
  
  interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
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
  
  type AuthAction = LoginAction | LogoutAction;
  
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
      default:
        throw new Error("Unknown action");
    }
  }
  
  const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
    const [{ user, isAuthenticated }, dispatch] = useReducer(
      reducer,
      initialState
    );
  
     function login(email: string, password: string) {
      
     
        
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
  
    return (
      <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
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
  