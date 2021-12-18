import React, { useState,  useEffect } from 'react';
import './App.scss';
import { Route, Routes, Outlet } from "react-router-dom";

import Nav from './components/nav/Nav';
import Header from './components/content/every/Header';
import Footer from './components/content/every/Footer';
import Home from './components/content/home/Home';
import Editorial from './components/content/editorial/Editorial';
import Thumbnails from './components/content/thumbnails/Thumbnails';
import Section from './components/content/section/Section';
import Comics from 

function App() {
  const [staticTimesData, setStaticTimesData] = useState([]);

  useEffect(() => {
    fetch("archive/NT_archive_946/946/946.json")
      .then(response => response.json())
      .then(data => { 
        setStaticTimesData(data);
      })
      .catch(err =>{ console.error(err => console.error(err))}); 
    }, []);
    // console.log(staticTimesData);

    const timesData = staticTimesData;

    // for (const item in timesData) {
    //   console.log(item);
    // }


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout timesData={staticTimesData} />}>
        <Route index element={<Home timesData={timesData} />} />
        <Route path="editorial" element={<Editorial />} />
        <Route path="section" element={<Section timesData={timesData} />} >
          <Route path=":sectionId" element={<Section />} />
          {/* <Route to comic /> */}

        </Route>
        <Route path="comics" element={<Comics />} >

        </Route>
        
      </Route>
    </Routes>
    {Object.keys(timesData).map((keyName, i) => (
      <div key={keyName}>
        <h1>{keyName}</h1>
        {timesData[keyName].map((piece) => 
          <div key={piece.Filename}>
              <h2>{piece.Name}</h2>
              <p>{piece.Desc}</p>
          </div>
        )}
      </div>
    ))}
    </>
  );
}

function Layout(props) {
  const {timesData} = props;
  
  return (
    <div className="App">
      <Nav />
      <div className="desktopSidebarWrapper">
        <div className="ContentWrapper">
          <Header />
          <Outlet />
          
          <hr />
          <Section timesData={timesData} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <Footer />
        </div>
      </div>
    </div>
  );

}

export default App;
