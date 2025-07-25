import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './Search'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path : "/search",
      element : <Search />
    }
  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body