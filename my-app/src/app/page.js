import React from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Posts from './serverSideComponents/Posts'

export default function Home() {
  return (<>
  <Navbar/>
  <div className="content">
    Server Side Rendering
    <Posts/>
  </div>  
  <Footer/>
  </>)
}

