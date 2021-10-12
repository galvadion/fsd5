import logo from './logo.svg';
import './App.css';
import './assets/reset.css'
import './assets/style.css'
import './assets/nivo-slider.css'


import { Footer } from './components/global/Footer';
import { Main } from './components/main/Main';
import { Slider } from './components/global/Slider';
import { Header } from './components/global/Header';


function App() {
  let name = "pepito"

  function filterByCategory(value){
    console.log(value)
  }

  return (
    <div className="container">
        <Header filterByCategory={filterByCategory}></Header>
        <Slider></Slider>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;
