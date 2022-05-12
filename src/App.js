import React,{useRef} from 'react'
import Header from './components/Header/Header' 
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer'
import LineLast from './components/LineLast/LineLast';
import LineFirst from './components/LineFirst/LineFirst';
import Testimonials from './components/Testimonials/Testimonials'
import DescContainer from './components/DescContainer/DescContainer';
import Benefits from './components/Benefits/Benefits';
import Reasons from './components/Reasons/Reasons'
import Pricing from './components/Pricing/Pricing'
import Payments from './components/Payments/Payments';

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <DescContainer/>
      <Reasons/>
      <Benefits/>
      <LineFirst/>
     <Testimonials/>
      <Pricing/>
      <Payments/>
      <LineLast/>
      <Footer/>
    </>
  );
}

export default App;
