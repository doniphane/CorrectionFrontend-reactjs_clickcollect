import { create } from "zustand";
import Cookies from "js-cookie";


interface AuthState {
 token: string | null;
 isAuthenticated: boolean;
 login: (token: string) => void;
 logout: () => void;
 checkAuth: () => void;
}


export const useAuthStore = create<AuthState>((set) => ({
 token: null,
 isAuthenticated: false,
 login: (token) => {
   const now = new Date();
   let time = now.getTime();
   time += 3600 * 1000;
   now.setTime(time);
   Cookies.set("auth_token", token, { expires: now, secure: true });
   set({ token, isAuthenticated: true });
 },
 logout: () => {
   Cookies.remove("auth_token");
   set({ token: null, isAuthenticated: false });
 },
 checkAuth: () => {
   const token = Cookies.get("auth_token");
   if (token) {
     set({ token, isAuthenticated: true });
   }
 },
}));
