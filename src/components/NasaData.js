import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard.js"



const NasaData = () => {
    const [nasaData, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?date=2020-07-30&api_key=Htvv09zlzSQFRNCgbCTfSKH9TW93qnk0iFrnFAqE")
        .then( r => {
            setData(r.data);
            console.log(r.data);
        })
        .catch( e => {console.log("Error: ", e);})
    }, [])

    return (
        <div>
             <NasaCard title={nasaData.title} date={nasaData.date} url={nasaData.url} explanation={nasaData.explanation} copyright={nasaData.copyright}/>
        </div>
    );
}





export default NasaData;