import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  import axios from "axios";
  import TokenManager from "../api/TokenManager";
 

  const API_URL = "https://agapi.altogiro.net";

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  interface AuthState {
    token: string | null;
    authenticated: boolean | null;
  }
  
  interface AuthContextValue {
    authState: AuthState;
    onLogin: (username: string, password: string) => Promise<any>;
    onLogout: () => Promise<void>;
  }
  
  const AuthContext = createContext<AuthContextValue>({
    authState: {
      token: null,
      authenticated: null,
    },
    onLogin: async () => {},
    onLogout: async () => {},
  });
  
  export const useAuth = () => useContext(AuthContext);
  
  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({
      token: null,
      authenticated: null,
    });
  
    useEffect(() => {
      const loadToken = async () => {
        try {
          const token = await TokenManager.getToken();
          if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setAuthState({
              token: token,
              authenticated: true,
            });
          } else {
            setAuthState({
              token: null,
              authenticated: false,
            });
          }
        } catch (error) {
          console.error(error);
        }
      };
      loadToken();
    }, []);
  
    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
          (response) => response,
          (error) => {
            console.error("Request error:", error);
            return Promise.reject(error);
          }
        );
      
        return () => {
          axios.interceptors.response.eject(interceptor);
        };
      }, []);

  
      const login = async (username: string, password: string) => {
        try {
          let data = new URLSearchParams();
          data.append("grant_type", "password");
          data.append("client_id", "client_id");
          data.append("client_secret", "client_secret");
          data.append("username", username);
          data.append("password", password);
          data.append("branch", "1");
          data.append("terminal", "1");
      
          //console.log("login data:", data);
      
          const result = await api.post(
            '/api/access/v1/genere',
            data,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
            }
          );
      
          console.log(result.data);
      
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${result.data.token}`;
      
          TokenManager.setToken(result.data.token);
      
          setAuthState({
            token: result.data.token,
            authenticated: true,
          });
      
          console.log("token:", result.data.token);
          return result;
        } catch (error) {
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            return { error: true, msg: "Erro na solicitação: " + error.response.data };
          } else if (error.request) {
            console.error(error.request);
            return { error: true, msg: "Erro de rede" };
          } else {
            console.error("Erro ao configurar a solicitação", error.message);
            return { error: true, msg: "Erro desconhecido" };
          }
        }
      };


    const logout = async () => {
      try {
        TokenManager.removeToken();
        axios.defaults.headers.common["Authorization"] = "";
        setAuthState({
          token: null,
          authenticated: false,
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    const value = {
        onLogin: login,
        onLogout: logout,
        authState,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
  