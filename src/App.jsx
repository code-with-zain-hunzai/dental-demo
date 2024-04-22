import './App.css';
import Navbar from './components/Navbar';
import Updates from './components/Updates';
import Header from './components/header';
import Dentel from './components/Dentel';
import Service from './components/Service'
import FaqServices from './components/FaqServices'
import Articles from './components/Articles';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {


  return (
    <>
      < Navbar />
      <Header />
      <Updates />
      <Dentel />
      <Service />
      <FaqServices />
      <Articles />
      <ContactUs />
      <Footer/>
    </>
  )
}

export default App
