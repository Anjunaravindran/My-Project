import React from "react";
import { Navbar } from "../Navbar";
import selling from '../img/pic.jpeg';

export const About = () =>{
    return(
        
        <div>
          <Navbar />
           <h1> About Amazon
           </h1>
           <br></br>
           Amazon.com is a Seattle, Washington–based e-commerce and cloud computing giant whose humble beginnings can be traced to founder Jeff Bezos’s garage, where he began selling books on the still-emerging World Wide Web.
        <div>
            <img src={selling} class=" ml-72" alt=""/>
        </div>
        </div>
    );
}