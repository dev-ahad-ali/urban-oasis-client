import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ParallaxProvider } from 'react-scroll-parallax';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
);
