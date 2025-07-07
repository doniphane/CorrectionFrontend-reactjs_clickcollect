import App from '@/App.tsx'
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';
import ProductsPage from '@/pages/ProductsPage.tsx';
import CartPage from '@/pages/CartPage.tsx';


export const router = createBrowserRouter([
 {
  path: '/',
   element: <App />,
   children: [
     { path: '/', element: <HomePage /> },
     { path: 'products', element: <ProductsPage /> },
     { path: 'cart', element: <CartPage /> },
     { path: 'login', element: <LoginPage /> },
   ]
 }
]);
