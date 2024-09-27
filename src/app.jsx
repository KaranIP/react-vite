/* import React from 'react'

const App = () => {
  return (
    <><h1>I am Karan</h1></>
  )
}

export default App */

// Version 5 Routing

/* import React from 'react'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ViewAll from './ViewAll'
import PageNotFound from './PageNotFound';
import Update from './Update'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/viewall" element={<ViewAll/>}/>
             <Route path="/edit/:id" element={<Update/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App */

// Version 6 Routing

/* import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import ViewAll from './ViewAll'
import Update from './Update'
import PageNotFound from './PageNotFound';
import { Toaster } from 'react-hot-toast'

const routing= createBrowserRouter([{
  path : "/",
  element : <Layout/>,
  children :[{
    index:true,
    element : <Home/>
  },
  {
    path : "/viewall",
    element:<ViewAll/>
  },
  {
    path : "/edit/:id",
    element:<Update/>
  },
  {
    path: "*",
    element : <PageNotFound/>
  }
]
}])

const App = () => {
  return (
    <>
    <div><Toaster/></div>
    <RouterProvider router={routing}/>
    </>
  )
}

export default App */

// TASK - FINAL -->Routing

import React from 'react'
import {HashRouter, Route, Routes } from 'react-router-dom'
import LayoutPage from './LayoutPage'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import EventsPage from './EventsPage'
import Courses from './Courses'
import Placement from './Placement'
import ErrorPage from './ErrorPage'

const App = () => {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='/' element={<LayoutPage/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/events' element={<EventsPage/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/placement' element={<Placement/>}/>
    <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
    </HashRouter>
    </>
  )
}

export default App

/* import React from 'react'
import LayoutPage from './Final Task/LayoutPage'
import HomePage from './Final Task/HomePage'
import ContactPage from './Final Task/ContactPage'
import EventsPage from './Final Task/EventsPage'
import Courses from './Final Task/Courses'
import Placement from './Final Task/Placement'
import ErrorPage from './Final Task/ErrorPage'

const routing= createBrowserRouter([{
  path : "/",
  element : <LayoutPage/>,
  children :[{
    index:true,
    element : <HomePage/>
  },
  {
    path : "/contact",
    element:<ContactPage/>
  },
  {
    path : "/events",
    element:<EventsPage/>
  },
  {
    path: "/course",
    element : <Courses/>
  },
  {
    path: "/placement",
    element : <Placement/>
  },
  {
    path: "*",
    element : <ErrorPage/>
  }
]
}])

const App = () => {
  return (
    <>
    <RouterProvider router={routing}/>
    </>
  )
}

export default App
 */

/* import React from 'react'
import ToDOList from './ToDOList'
import ContactPage from './ContactPage';
import ContactPage from './ContactPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <><ToDOList/></>
  )
}

export default App */