import React, { useEffect } from 'react'
import Navber from './components/Navber/Navber'
import Banner from './components/banner/Banner'
import BannerBottom from './components/banner/BannerBottom'
import ProductsTools from './components/productTools/ProductsTools'

const App = () => {
  useEffect(() => {
    fetch("/data.json").then((res)=>res.json()).then((data)=> console.log(data))
  },[])
  return (
    <main>
      <Navber />
      <Banner />
      <BannerBottom />
      <ProductsTools/>
    </main>
  )
}

export default App