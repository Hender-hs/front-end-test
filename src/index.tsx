import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from './routes/index';
import "./styles/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(Routes());

root.render(
  <React.StrictMode>
	<ReactNotifications />
	<RouterProvider router={router} />
  </React.StrictMode>
);
