import React, { useState, useEffect } from "react";
import axios from "axios";



const NasaData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then( r => {
            console.log(r);
        })
        .catch( e => {console.log("Error: ", e);})
    }, [])

    return (
        <div>nasa Pic</div>
    );
}



export default NasaData;