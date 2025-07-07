import axios from 'axios';
import { useAuthStore } from '@/store/authStore';


const api = axios.create({
 baseURL: import.meta.env.VITE_API_BASE_URL,
 headers: {
   'Content-Type': 'application/ld+json',
   'Accept': 'application/ld+json',
 },
});


export const apiAuth = axios.create({
 baseURL: import.meta.env.VITE_API_BASE_URL,
 headers: {
   'Content-Type': 'application/json',
   'Accept': 'application/json',
 },
});


// Intercepteur pour ajouter le token d'authentification à chaque requête
apiAuth.interceptors.request.use((config) => {
 const token = useAuthStore.getState().token;
 if (token) {
   config.headers.Authorization = `Bearer ${token}`;
 }
 return config;
});


export default api;




