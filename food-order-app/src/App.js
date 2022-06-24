import React from 'react'
import Banner from './components/Layout/Banner/Banner';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
