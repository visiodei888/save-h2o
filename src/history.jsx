import React from "react";
import './history.css';
import Cal from './Cal';
import Graph from './Graph';
import Sidebar from './Sidebar';

const History = () => {
    return(
         <div>
    <Sidebar />
        <div className="h">
            <div className="heading">
      <h1 className="left-heading">HISTORY</h1>
      <h2 className="right-heading">BACK</h2>
      </div>
      
      <div className="outer">
      <div className="water-usage">
        </div>
        
        
        
        <div className="date">
            <Cal/>
        </div>
        <div className="graph"></div>
       </div>
       <div className="g">
        <Graph/>
       </div>
    </div>
    </div>
    
    );

};

export default History;