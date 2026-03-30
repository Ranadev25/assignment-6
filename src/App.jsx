import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';

import Navber from './components/Navber/Navber'
import Banner from './components/banner/Banner'
import BannerBottom from './components/banner/BannerBottom'
import ProductsTools from './components/productTools/ProductsTools'
import Steps3 from './components/getStarted/Steps3';
import Pricing from './components/transparentPricing/Pricing';
import Workflow from './components/workflow/Workflow';
import Footer from './components/footer/Footer';

const App = () => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
   const [newProducts, setNewProducts] = useState([])
  
  
  useEffect(() => {
    fetch("/data.json").then((res)=>res.json()).then((data)=> setProducts(data))
  }, [])




  return (
    <main>
      <ToastContainer/>
      <Navber count={count} />
      <Banner />
      <BannerBottom />
      <ProductsTools products={products} setCount={setCount} count={count} setNewProducts={setNewProducts} newProducts={newProducts} />
      <Steps3 />
      <Pricing />
      <Workflow />
      <Footer/>
    </main>
  )
}

export default App