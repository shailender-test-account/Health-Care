import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Card from './components/Card';
import Detail from './components/Detail';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';


// import Test from './components/Test';



function App() {


  return (
    <>


      <Home />
      <div className='w-full gap-5 min-h-[300px] md:gap-0 flex justify-center items-center flex-wrap '>
        <Card
          title="Professional staff"
        />
        <Card
          title="Affordable prices"

        />
        <Card
          title="Great services"
        />
        <Card
          title="Consultations"
        />

      </div>

      <Services />

      <Detail/>

      <Experts/>

      <Testimonials/>



     




     




    </>
  )
}

export default App;
