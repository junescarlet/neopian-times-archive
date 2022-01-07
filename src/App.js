import React, { useState,  useEffect } from 'react';
import './App.scss';
import { Route, Routes, Outlet, useLocation } from "react-router-dom";

import Nav from './components/nav/Nav';
import Header from './components/content/every/Header';
import Footer from './components/content/every/Footer';
import Home from './components/content/home/Home';
import Editorial from './components/content/editorial/Editorial';
import Comics from './components/content/section/comics/Comics';
import Comic from './components/content/section/comics/comic/Comic';
import Articles from './components/content/section/articles/Articles';
import Text from './components/content/section/Text/Text'
import Shorts from './components/content/section/shorts/Shorts';
import Series from './components/content/section/series/Series';
import Cont from './components/content/section/cont/Cont';
import Archives from './components/content/archives/Archives';

function App() {
  const [staticTimesData, setStaticTimesData] = useState([]);
  const [staticIssueData, setStaticIssueData] = useState(false);

  
  const [currentIssue, setCurrentIssue] = useState([0]);
  const location = useLocation();
  let locationArray = location.pathname.split("/");
  let issue = locationArray[1];
  useEffect(() => {
    setCurrentIssue(issue)
  }, [issue]);
;
  // let getCurrentIssue = (id, array) => {
  //   if (array) {
  //     //console.log(array.Edition, id);
  //     return array.find(
  //       piece => piece.Edition === id
  //     );
  //   }
  // }
 
  //needed for archive list only?
  useEffect(() => {
    fetch("archive/list_of_issues.json")
    .then(response => response.json())
      .then(data => { 
        setStaticIssueData(data);
      })
      .catch(err =>{ console.error(err => console.error(err))}); 
  }, []);

// if (staticIssueData) {
//   //console.log(staticIssueData);
//   setCurrentIssue(getCurrentIssue(issue, staticIssueData));
// }
 
  useEffect(() => {
    fetch(`archive/${currentIssue}/${currentIssue}.json`)
      .then(response => response.json())
      .then(data => { 
        setStaticTimesData(data);
      })
      .catch(err =>{ console.error(err => console.error(err))}); 
    }, [currentIssue]);

    const timesData = staticTimesData;


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout timesData={staticTimesData} />}>
      <Route path="/:issueId" element={<Layout timesData={staticTimesData} />}>   
        <Route index element={<Home timesData={timesData} />} />
        {/* <Route path=":issueId" element={<Home timesData={timesData} />} /> */}
        <Route path="editorial" element={<Editorial timesData={timesData.Issue} />} />
        {/* <Route path="section" element={<Section timesData={timesData} />} >
          <Route path=":sectionId" element={<Section />} />
        </Route> */}
        <Route path="comics" element={<Comics timesData={timesData.comics}/>} />
        <Route path="comics/:pieceId" element={<Comic timesData={timesData.comics} />} />
        <Route path="articles" element={<Articles timesData={timesData.articles}/>} />
        <Route path="articles/:pieceId" element={<Text timesData={timesData.articles} />} />
        <Route path="shorts" element={<Shorts timesData={timesData.shorts}/>} />
        <Route path="shorts/:pieceId" element={<Text timesData={timesData.shorts} />} />
        <Route path="series" element={<Series timesData={timesData.series}/>} />
        <Route path="series/:pieceId" element={<Text timesData={timesData.series} />} />
        <Route path="cont" element={<Cont timesData={timesData.cont}/>} />
        <Route path="cont/:pieceId" element={<Text timesData={timesData.cont} />} />
        <Route path="archives" element={<Archives issueArray={staticIssueData.Issues} />} />
      </Route>
      </Route>
    </Routes>
    {/* {Object.keys(timesData).map((keyName, i) => (
      <div key={keyName}>
        <h1>{keyName}</h1>
        {timesData[keyName].map((piece) => 
          <div key={piece.Filename}>
              <h2>{piece.Name}</h2>
              <p>{piece.Desc}</p>
          </div>
        )}
      </div>
    ))} */}
    </>
  );
}

function Layout(props) {
  let {timesData} = props;

  return (
    <div className="App">
      <Nav timesData={timesData.Issue} />
      <div className="desktopSidebarWrapper">
        <div className="ContentWrapper">
          <Header timesData={timesData.Issue} />
          <Outlet />
          
          <hr />
        <Footer />
        </div>
      </div>
    </div>
  );

}

export default App;
