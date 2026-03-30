import React, { useEffect, useState } from 'react'
import Navber from './components/Navber/Navber'
import Banner from './components/banner/Banner'
import BannerBottom from './components/banner/BannerBottom'
import ProductsTools from './components/productTools/ProductsTools'

const App = () => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
   const [newProducts, setNewProducts] = useState([])
  
  useEffect(() => {
    fetch("/data.json").then((res)=>res.json()).then((data)=> setProducts(data))
  }, [])




  return (
    <main>
      <Navber count={count} />
      <Banner />
      <BannerBottom />
      <ProductsTools products={products} setCount={setCount} count={count} setNewProducts={setNewProducts} newProducts={newProducts} />
    </main>
  )
}

export default App