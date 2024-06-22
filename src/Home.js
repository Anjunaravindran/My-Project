import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    return (
        <div class=" mt-16 h-80 mr-100  ml-56 ">
            <h1 class="font-extrabold size-40 ml-96  p-8 px-14 font-serif ">MENU</h1>

            <button class="h-14 w-24 rounded-lg shadow-lg bg-blue-500 font-extrabold ml-10 " onClick={()=> navigate('Login')}> Exercise</button> 
            <button class="h-14  w-60 rounded-lg shadow-lg bg-blue-500 font-extrabold  ml-32"  onClick={()=> navigate('Form')}>Form using Tailwind CSS</button>
            <button class="h-14  w-24 rounded-lg shadow-lg bg-blue-500 font-extrabold  ml-40"  onClick={()=> navigate('Movies')}>Movies</button>
            <button class="h-14  w-24 rounded-lg shadow-lg bg-blue-500 font-extrabold  ml-48"  onClick={()=> navigate('Navbar')}>Navbar</button>


        </div>

    )
}
export default Home;