import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,
   createRoutesFromElements,
    Route,
  RouterProvider,
  } from 'react-router-dom'
  import { Provider } from 'react-redux';
  import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen.js';
import ProductScreen from './screen/ProductScreen.js';
import CartScreen from './screen/cartScreen.js';
import LoginScreen from './screen/loginScreen.js';



const route=createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<App/>}>
         <Route index={true} path='/' element={<HomeScreen/>}></Route>
         <Route path='/products/:id' element={<ProductScreen/>}></Route>
          <Route path='/cart' element={<CartScreen/>}></Route>
          <Route path='/login' element={<LoginScreen/>}></Route>

        


        
        </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={route}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
