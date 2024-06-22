import React from "react";

function Registernow() {
    return (
        <div class="flex justify-center items-center h-screen bg-gray-200">
            <div class="w-100 p-10 bg-slate-500 shadow-lg rounded-lg">
                <h1 class=" text-2xl mb-4 text-center font-extrabold text-pink-900">Registration Form</h1>
                <div class="w-96 px-2 py-2 shadow-lg bg-slate-300 rounded-lg">
                    <div class="flex row-span-2 justify-between  mt-3 ">
                        <input type="text" class=" bg-slate-50  size-15 h-10 rounded-lg text-center" placeholder="First Name" />
                        <input type="text" class="bg-slate-50 size-15 h-10 rounded-lg text-center" placeholder="Last Name" />
                    </div>
                    <div class=" flex-col mt-5  justify-center items-center">

                        <div><input type="text" class=" w-64 ml-14 bg-slate-50 size-15 h-10 rounded-lg text-center " placeholder="Mobile Number" /></div>
                        <div><input type="text" class=" mt-4 w-64 ml-14 bg-slate-50 size-15 h-10 rounded-lg text-center " placeholder="Email Id" /></div>
                        <div><input type="text" class=" mt-4 w-64 ml-14 bg-slate-50 size-15 h-10 rounded-lg text-center " placeholder="Password" /></div>

                    </div>
                    <div>
                        <button class=" mt-4 bg-blue-500 hover:bg-blue-700 font-bold size-18 text-white px-4 py-2 rounded-full ml-36">Sign Up</button>
                    </div>
                    <div class="flex-row mt-4">
                        <p>Already have an Account ..
                            <a href="/ " class="  text-blue-600 font-extrabold">Login</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Registernow;