import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/features';
import AllProducts from './components/AllProducts';
import Description from './components/Description';
import StoreConnections from './components/StoreConnections';
import Feedback from './components/Feedback';
import Financials_Des from './components/Financials_Des';
import Footer from './components/Footer';
import Site_Info from './components/Site_Info';

function App() {

  return (
    <div>
      <Header/>
      <Main/>
      <Features/>
      <AllProducts/>
      <Description/>
      <StoreConnections/>
      <Feedback/>
      <Financials_Des/>
      <Footer/>
      <Site_Info/>
    </div>
  )
}

export default App
