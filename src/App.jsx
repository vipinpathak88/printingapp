import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

// console.log(Sdata[0]);
// function ncard(val){
    
// }

const App = () => (
    <>
        <div className="container">
            <h1>Featured Products</h1>                
            {Sdata.map((val) => { 
                return(
                <Cards 
                    key={val.id}
                    imgsrc={val.imgscr} 
                    category={val.categorys} 
                    title={val.titles} 
                    link={val.links} />
                );
            })}
        </div>
    </>
);

export default App;