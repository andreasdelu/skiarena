import React from "react"

export default function Card(props) {

    return (

        <> 
        <div id="card">
                <img 
                    src={props.coverImg}
                    className="card--image" 
                />
                <div className="card--stats">
                        <span className="gray">{props.location}</span>
                    <h4 className="card--title">{props.title}</h4>
                    <p className="card--title">{props.description}</p>
                    <p className="card--price">
                    <span className="bold">DKK {props.price}</span> / pr. person
                    </p>
                </div>
        </div> 
        </> 
    ); 
}