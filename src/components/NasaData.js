import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard.js"

import { Button } from 'reactstrap';



const NasaData = () => {
    //variables for date button
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var date = `${year}-${month}-${day}`;


    const [nasaData, setData] = useState([]);
    const [dateChoice, setDate] = useState(date);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${dateChoice}&api_key=Htvv09zlzSQFRNCgbCTfSKH9TW93qnk0iFrnFAqE`)
        .then( r => {
            setData(r.data);
            console.log(r.data);
        })
        .catch( e => {console.log("Error: ", e);})
    }, [dateChoice])

    return (
        <div>
             <NasaCard title={nasaData.title} date={nasaData.date} url={nasaData.url} explanation={nasaData.explanation} copyright={nasaData.copyright}/>
             <Button size="lg" onClick={() => setDate(date)} color="danger" block>TODAY</Button>
             <Button size="lg" onClick={() => setDate(`${year}-${month}-${day-1}`)} color="info" block>Previous Day</Button>{' '}
        </div>
    );
}





export default NasaData;