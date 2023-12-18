import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,
   createRoutesFromElements,
    Route,
  RouterProvider,
  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen';

const route=createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<App/>}>
         <Route index={true} path='/' element={<HomeScreen/>}></Route>
        
        </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
