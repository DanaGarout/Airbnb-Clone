import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Card from './components/Card';
import dataCard from "./data"


function App() {
  const cardDetails = dataCard.map(function(data){
    return (
      <Card 
        key = {data.id}
        data= {data}
        />
    )
   })
  return (
    <div className="App">
     <Navbar />
     <MainContent />
     <section className='cards-list'>
     {cardDetails}
     </section>
     
    
     
          
    </div>
  );
}

export default App;
