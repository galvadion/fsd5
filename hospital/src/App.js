import logo from './logo.svg';
import './App.css';
import {Grid} from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import {Route} from 'react-router-dom'


function App() {
  return (
    <Grid container>
      <Header />
      <Route exact path="/" render={(props) => <Main/>} />
      <Route exact path="/hospital/:id" render={(props) => <></>}/>
      <Footer/>
    </Grid>
  );
}

export default App;
