import React from "react";
import Images from "./Images";
import Heading from "./Heading";

function Cards(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card__info">
                        <span className="card_category">{props.category}</span>
                        <Heading title={props.title} />
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;