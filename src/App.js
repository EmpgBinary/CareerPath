import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { Online } from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Layout from './components/common/Layout';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { Learn } from './components/pages/Home';
import { Space } from './components/pages/Home';
import Register from './components/pages/Register';





const App = () => {

  const  router = createBrowserRouter([
    {
      path: '/',
      element : (
        <Layout>
        <Home />
        <Space/>
         <Learn />
         <Online />
        
        </Layout>
      ),
      
    },
   
    {
      path: '/about',
      element : (
        <Layout>
        <About />
        </Layout>
      ),
      
    },
    {
      path: '/register',
      element: (
        <Layout>
          <Register/>
        </Layout>
      )
    },
    {
      path: '/contact',
      element : (
        <Layout>
        <Contact />
        </Layout>
      ),
      
    },
    {
      path: '/footer',
      element : (
        <Layout>
        <Footer />
        </Layout>
      ),
      
    },
    {
      path: '/header',
      element : (
        <Layout>
        <Header />
        </Layout>
      ),
      
    },
    
  ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;