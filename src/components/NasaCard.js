import React from "react";


const NasaCard = props => {



    return (
        <div>
            <h1>Title: {props.title}</h1>
            <h4>Date: {props.date}</h4>
            <hr></hr>
            <img src={props.url}/>
            <p>Description: {props.explanation}</p>
            <p>{props.copyright}</p>
        </div>
      );

}

export default NasaCard;