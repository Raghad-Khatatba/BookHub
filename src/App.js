/*import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home'
import Register from './component/Register'
import Login from './component/Login'
import NotFound from './component/NotFound'
import BookDetails from './component/BookDetails/BookDetails'
import BookList from './component/BookList/BookList'
import About from './component/About/About'
import { AppProvider } from './context.';

let routers = createBrowserRouter([
{ path:'',element:<Home />,children:[
  {path:'regester',element:<Register />},
  {path:'login',element:<Login />},
  {path : "/book/:id"  , element : <BookDetails />} ,
  {path:'book',element:<BookList />},
  {path:'about',element:<About />},
  {path:'*',element:<NotFound />}
]}
])

export default function App() {
  return (
    <AppProvider>
    <RouterProvider router={routers}></RouterProvider>
    </AppProvider>
  )
}*/
import React from 'react';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import NotFound from './component/NotFound';
import BookDetails from './component/BookDetails/BookDetails';
import BookList from './component/BookList/BookList';
import About from './component/About/About';
import { AppProvider } from './context.';

let routers = createBrowserRouter([
  { path: '', element: <Login /> },
  { path: 'register', element: <Register /> },
  {path:'book',element:<BookList />},
  {path : "/book/:id"  , element : <BookDetails />} ,
  { path:'home',element:<Home logout={logout} />,children:[
    {path:'about',element:<About />},
    {path:'*',element:<NotFound />}
  ]}
]);

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={routers}></RouterProvider>
    </AppProvider>
  );
}
function logout(navigate) {
  localStorage.removeItem('userToken');
  navigate('/');
}
