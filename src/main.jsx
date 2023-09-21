import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Home/Home'
import Products from './Products/Products'
import DashBoard from './DashBoard/DashBoard'
import ShowDetails from './ShowDetails/ShowDetails'
import Profile from './Profile/Profile'
import DashBoardLayout from './DashBoardLayout/DashBoardLayout'
import Bio from './Bio/Bio'
import Cart from './Cart/Cart'

const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader:()=>fetch(`https://dummyjson.com/products`)
      
      },
      {
        path:'/product/:id',
        element:<ShowDetails></ShowDetails>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)

      },
      {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
          {
            path:'/dashboard/profile',
            element:<Profile></Profile>,

            
          },
          {
            path:'/dashboard/bio',
            element:<Bio></Bio>
          },
          {
            path:'/dashboard/cart',
            element:<Cart></Cart>
          }
        ]
      
        
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
