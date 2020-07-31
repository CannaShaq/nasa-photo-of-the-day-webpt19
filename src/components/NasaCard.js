import React from "react";
import styled from "styled-components";


const NasaCard = props => {

    const Title = styled.p`
        font-family: "Lucida Console";
        font-size: 2rem;
        color: goldenrod;
        text-align: center;
        text-decoration: underline;
    `;

    const Date = styled.p`
        font-size: .7rem;
        text-align: right;
    `;

    const Desc = styled.p`
       
    `;

    const DescWell = styled.div`
        background-color: rgb(26, 102, 255);
        border-style: groove;
        border-color: rgb(0, 0, 102);
        border-radius: 8px;
    `;



    return (
        <div>
            <Title>Title: {props.title}</Title>
            <hr></hr>
            <img src={props.url}/>
            <DescWell>
                <h2>Description</h2>
                <p>{props.explanation}</p> 
                <p>{props.copyright}</p> <Date>Date: {props.date}</Date>
            </DescWell>
        </div>
      );

}

export default NasaCard;