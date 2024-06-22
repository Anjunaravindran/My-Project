import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import Forgotpassword from "./pages/Forgotpassword";

function Form() {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        setTimeout(() => {
            setIsLoading(false)
            const errors = Validate();
            setErrors(errors);
        }, 2000);

    }

    const Validate = () => {
        const error = {};
        if (!email) {
            error.email = "Email is Required";
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Email is not valid";
        }
        else {
            error.email = " ";
        }

        if (!password) {
            error.password = "Password is Required";
        }
        else if (password.length < 8) {
            error.password = "Password is not Valid";
        }
        else {
            alert("Successfully Logined");
            error.password = " ";
        }
        return error;
    }

    const [isChecked, setIsChecked] = useState(false)

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleTransfer = () =>{
        let a = localStorage.setItem('email1');
        
    }

    return (
        <div class="flex justify-center items-center h-screen bg-gray-200 ">
            <div class="w-100 p-10 shadow-lg bg-slate-500 rounded-lg">

                <form onSubmit={handleSubmit} class="w-96 p-6 shadow-lg bg-slate-300 rounded-lg">

                    <div class=" flex justify-around h-13 w-80 p-2 pl-1 m-3 bg-white rounded-lg ">
                        <input type="text" id="email1" placeholder="Enter Email id" onChange={(e) => setEmail(e.target.value)} />
                          
                    </div>
                    
                    <div class="flex relative insert left-7 bottom-10 ">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div class=" flex relative insert left-7 bottom-5 "> {errors.email}</div>
                    <div class=" flex justify-around mt-0.5 h-13 w-80 p-2 pl-1 m-3 bg-white rounded-lg ">

                        <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div class="flex relative insert left-7 bottom-10">
                        <FontAwesomeIcon icon={faKey} />
                    </div>
                    <div class=" flex relative insert left-7 bottom-5 ">{errors.password}</div>

                    <div class="flex flex-row justify-around">
                        <div class="ml-1">
                            <span class=" flex absolute">
                                <input type="checkbox" id="checkbox" checked={isChecked} onChange={checkHandler} class="w-5 h-6" />
                            </span>
                            <span class="ml-6 ">Remember Me</span>
                        </div>

                        <button type="submit" onClick={handleSubmit} disabled={isLoading} class=" py-2 px-5 ml-15 font-bold  bg-blue-500 rounded-md shadow-lg">
                            {isLoading ? "Login..." : "Login"}
                        </button>
                    </div>

                    <div class="flow-root mt-5">
                        <a class="float-left ml-9" href="registernow">Register Now</a>
                        <a class="float-right mr-4" href="forgotpassword" onChange={handleTransfer} >Forgot Password</a>
                    </div>
                    <div class=" mt-5 h-13 w-80 p-2 pl-9 m-3 bg-pink-400 rounded-lg  shadow-lg ">
                        <button type="submit" class="px-12  bg-pink-400 text-white" >Login With Facebook</button>
                    </div>
                    <div class=" mt-5 h-13 w-80 p-2 pl-9 m-3 bg-blue-400 rounded-lg  shadow-lg ">
                        <button type="submit" class=" px-12 bg-blue-400 text-white">Login With Twitter</button>
                    </div>
                    <div class=" mt-5 h-13 w-80 p-2 pl-9 m-3 bg-red-400 rounded-lg  shadow-lg ">
                        <button type="submit" class=" px-12 bg-red-400  text-white  ">Login With Google</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Form;
