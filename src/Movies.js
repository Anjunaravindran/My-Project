import React from "react";
import data from './data.json';
import Display from "./Display";
import Carousel1 from "./Components/Carousel1";
import Carousel2 from "./Components/Carousel2";
import Carousel3 from "./Components/Carousel3";
import Carousel4 from "./Components/Carousel4";
import Carousel5 from "./Components/Carousel5";
import Carousel6 from "./Components/Carousel6";
import Carousel7 from "./Components/Carousel7";
import Carousel8 from "./Components/Carousel8";
import Carousel9 from "./Components/Carousel9";
import Carousel10 from "./Components/Carousel10";
import Carousel11 from "./Components/Carousel11";
import Carousel12 from "./Components/Carousel12";
import Carousel13 from "./Components/Carousel13";
import Carousel14 from "./Components/Carousel14";
import Carousel15 from "./Components/Carousel15";
import Carousel16 from "./Components/Carousel16";
import Result from "./Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Movies() {


const navigate= useNavigate();

    const Navigation = (i) => {

        if (i === 0) {
           navigate('/Carousel1');
        }
        if (i === 1) {
            navigate('/Carousel2');
        }
        if (i === 2) {
            navigate('/Carousel3');
        }
        if (i === 3) {
            navigate('/Carousel4');
        }
        if (i === 4) {
            navigate('/Carousel5');
        }
        if (i === 5) {
            navigate('/Carousel6');
        }
        if (i === 6) {
            navigate('/Carousel7');
        }
        if (i === 7) {
            navigate('/Carousel8');
        }
       
        if (i === 8) {
            navigate('/Carousel9');
        }
        if (i === 9) {
            navigate('/Carousel10');
        }
        if (i === 10) {
            navigate('/Carousel11');
        }
        if (i === 11) {
            navigate('/Carousel12');
        }
        if (i === 12) {
            navigate('/Carousel13');
        }
        if (i === 13) {
            navigate('/Carousel14');
        }
        
        if (i === 14) {
            navigate('/Carousel15');
        }
        if (i === 15) {
            navigate('/Carousel16');
        }
        

    }

    return (
        <div>

            {

                data.map((data, i) => (
                    <div class=" flex flex-shrink-0">
                        <div class=" ml-6  w-100 p-2  bg-white border-4 border-blue-300 border-dashed ">
                            <div class="w-96 p-4  bg-white border-none  " >
                                <div class="flex flex-col cursor-pointer" key={i} onClick={() => Navigation(i)} >

                                    <div ><img class=" m-auto w-80 p-1 border-2 border-gray-600 rounded-md" src={data.Poster} alt=""  ></img>

                                    </div>
                                    <div class=" flex items-center justify-center mt-3">   {data.Title}</div>
                                    <div class="flex items-center justify-center">  {data.Released}  </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </div>


    )



}
export default Movies;