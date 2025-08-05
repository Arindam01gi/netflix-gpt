import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './Search'
import Header from './Header' // Import the Header component
import { Outlet } from 'react-router-dom' // Import Outlet for nested routes
import TvSeries from './TvSeries'
import NewPopular from './NewPopular'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/browse",
          element: <Browse />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path : "/tvseries",
          element : <TvSeries />
        },
        {
          path : "/new",
          element : <NewPopular />
        }
      ]
    }
  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body