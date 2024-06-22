import React from "react";
import data from './data.json';

function Display() {
    return (
        <div>
            {
                data && data.map((data, i) => {
                    return (
                        <div key={i}>
                            <h1>{data.Title}</h1>


                            {data.Images.map((image, index) =>

                                <img src={image} alt=" " />
                            )
                           }
                           

                        </div>



                    )
                })
            }
            <>

            </>


        </div>
    )
}
export default Display;