import logo from './logo.svg';
import './App.css';
import './assets/reset.css'
import './assets/style.css'
import './assets/nivo-slider.css'


import { Footer } from './components/global/Footer';
import { Main } from './components/main/Main';
import { Slider } from './components/global/Slider';
import { Header } from './components/global/Header';
import { getProducts } from './services/productsAPI';
import { useEffect, useState } from 'react';


function App() {
  let name = "pepito"

  const [products,setProducts] = useState([])

  useEffect(() => {
    getProducts( data => {
      setProducts(data)
    }, () => console.log('error'))
  },[])

  function filterByCategory(value){
    console.log(value)
  }



  return (
    <div className="container">
        <Header filterByCategory={filterByCategory}></Header>
        <Slider></Slider>
        <Main products={products}></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;
