import { ReactNode, createContext, useContext, useEffect, useState } from "react";
type User={
    name:string;
    email:string;
    
}
type UserAuth={
    user:User|null;
    isLoggedIn:boolean;
    login:(emil:string,password:string)=>Promise<void>;
    signup:(name: string,email:string,password:string)=>Promise<void>;
    logout:()=>Promise<void>;
};
const AuthContext=createContext<UserAuth | null>(null);

export const AuthProvider= ({children}:{children:ReactNode})=>{
    const [user,setUser]=useState<User | null>(null);
    const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    //fetch if the cookie is valid not not and set the user login to true
    setIsLoggedIn(false);
    setUser(null);
  }, []);

const login = async (email: string, password: string) => {};
const signup = async (name: string, email: string, password: string) => {};
const logout = async () => {};
const value = {
  user: user, // Update the type of user to 'User | null'
  login,
  signup, // Add the signup function
  logout,
  isLoggedIn,
};

return (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
};
export const useAuth=( )=>useContext(AuthContext);