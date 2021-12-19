import { React, useEffect }from 'react';
import { useParams } from "react-router-dom";

import './Section.scss';
import Thumbnails from '../thumbnails/Thumbnails';

  


const Section = props => {
    let {timesData} = props;
    let params = useParams();
    // let sectionsArray = Object.keys(timesData).map((keyName, i) => (
    //     { keyName }
    // ));

    // useEffect(() => {
    //     fetch("https://api.jsonbin.io/b/617849249548541c29c8ed3e")
    //       .then(response => response.json())
    //       .then(data => { 
    //         setStaticComicData(data);
    //       })
    //       .catch(err =>{ console.error(err => console.error(err))}); 
    //     }, []);
    
    
    let getSection = (id) => {
        //returns four times? twice undefined, and twice with the params
        //return Object.keys(timesData).map((keyName, i) => ()) === params;
        //return only the object where the keyName matches the params
        //return Object.keys(timesData);
        // timesData.filter()
        for (let item in timesData) {
            if (item === id) {
                return timesData[item];
            }
        }
    }
    // console.log(sectionsArray);

    // let getSection = (id) => {
    //     return sectionsArray.find(
    //         section => timesData.id === id
    //     );
    // }
    let section = getSection(params.sectionId);
    //console.log(section)
    return (
        <div key={section} className="section">
            <h1>{params.sectionId}</h1>
            {section ? section.map((piece, i) => 
                <div key={[piece].Filename} >
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                </div>
            ): <p>Loading</p>}
            {/* {Object.keys(timesData).map((keyName, i) => (
                <div key={keyName}>
                    <h1>{keyName}</h1>
                    {timesData[keyName].map((piece) => 
                    <>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
               </>
                    )}
                                   
                    {timesData[keyName].map((piece) => 
                    <div key={piece.Filename}>
                        <h2>{piece.Name}</h2>
                        <p>{piece.Desc}</p>
                        <hr />
                    </div>
                    )} 
                </div>
            ))} */}
            
            <p>
            </p>
            
        </div>
    );
};

export default Section;