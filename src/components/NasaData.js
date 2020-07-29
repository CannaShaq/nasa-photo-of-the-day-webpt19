import React, { useState, useEffect } from "react";
import axios from "axios";



const NasaData = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then( r => {
            setData(r.data.url);
            console.log(r);
        })
        .catch( e => {console.log("Error: ", e);})
    }, [])

    return (
        <div>
            <img src={data}/>
            
        </div>
    );
}



export default NasaData;

/*

            <h1>{data.data.title}</h1>
            <p>{data.data.date}</p>
            <p>{data.data.explanation}</p>

*/ 