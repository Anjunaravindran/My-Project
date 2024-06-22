import React, { useState } from "react";


function Forgotpassword(props) {
   
        let b =localStorage.getItem('a')

    return (
        <div class="flex justify-center items-center h-screen bg-gray-200">
            <div class="w-100 p-10 bg-slate-500 shadow-lg rounded-lg">
                <h1 class=" text-2xl mb-4 text-center font-extrabold text-pink-900">Reset Password</h1>
                <div class="w-96 px-2 py-2 shadow-lg bg-slate-300 rounded-lg">

                    <div class=" flex-col mt-5  justify-center items-center">

                        <div><input type="text" class=" w-64 ml-14 bg-slate-50 size-15 h-10 rounded-lg text-center " placeholder={b} /></div>
                        <div><input type="text" class=" mt-4 w-64 ml-14 bg-slate-50 size-15 h-10 rounded-lg text-center " placeholder="New Password" /></div>
                        <div><input type="text" class=" mt-4 w-64 ml-14 bg-slate-50 size-15 h-10 rounded-lg text-center " placeholder=" Confirm Password" /></div>

                    </div>
                    <div>
                        <button class=" mt-4 bg-blue-500 hover:bg-blue-700 font-bold size-18 text-white px-4 py-2 rounded-full ml-28">Reset Password</button>
                    </div>
                    <div class="flex-row mt-4">
                        <p>Back ...
                            <a href="/" class=" m-2  text-blue-800 font-extrabold">Home</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Forgotpassword;