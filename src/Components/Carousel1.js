import React, { useEffect, useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { images } from '../Others/CarouselData';
import './Carousel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Carousel1() {



    const [currImg, setCurrImg] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            currImg < images.length - 1 && setCurrImg((currImg + 1));
        }, 5000
        )
    })
    return (
        <div className="Carousel">
            <div className="CarouselInner" style={{ backgroundImage: 'url($images[currImg].url)' }}>
                <img src={images[currImg].url} />

                <div className="left" onClick={() => {
                    currImg > 0 && setCurrImg((currImg - 1))
                }}>
                    <FontAwesomeIcon style={{
                        position: 'absolute',
                        top: 300, right: 16,
                        left: 70,
                        color: '#FFFFFF',
                        fontSize: 120,
                        cursor: 'pointer'

                    }} icon={faChevronLeft} />
                </div>
                <div className="center">
                    <h2 style={{
                        position: 'absolute',
                        top: 600, right: 300, paddingLeft : 13 ,
                        left: 10,
                        marginLeft: 300,
        
                        fontSize: 20 ,backgroundColor : '#F5F5DC'
                        , color : '#000000'
                    }}>{images[currImg].title}</h2>
                    <p style={{
                        position: 'absolute',
                        top: 640, right: 100,paddingLeft : 11 ,
                        left: 20,
                        marginLeft: 100,backgroundColor : '#F5F5DC' ,

                        color: '#000000',
                        fontSize: 20
                    }}>{images[currImg].subtitle}</p>
                </div>
                <div className="right" onClick={() => {
                    currImg < images.length - 1 && setCurrImg((currImg + 1))
                }}>

                    <FontAwesomeIcon style={{
                        position: 'absolute',
                        top: 300, right: 16,
                        right: 70,
                        color: '#FFFFFF',
                        fontSize: 120,
                        cursor: 'pointer'
                    }} icon={faChevronRight} />
                </div>
            </div>

        </div>
    )
}
export default Carousel1;