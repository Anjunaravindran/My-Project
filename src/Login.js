import React from "react";

function Login() {
    return (
        <div class="flex justify-center items-center h-screen bg-teal-300">
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-3xl block text-center font-semibold">Login</h1>
                <hr class="  w-200 h-1 mx-auto my-4 rounded-sm dark:bg-gray-700"></hr>
                <div class="mt-3">
                    <label for="username" class="block text-base mb-3">User Name</label>
                    <input type="text" id="username" placeholder="Enter User Name" class="border w-full text-base px-2 py-2 rounded-md focus outline-none focus ring-1 focus border-gray-600" />
                </div>
                <div class="mt-3">
                    <label for="Password" class="block text-base mb-3">Password</label>
                    <input type="password" id="password" placeholder="Enter Password" class="border w-full text-base px-2 py-2 rounded-md focus outline-none focus ring-1 focus border-gray-600" />
                </div>
                <div class="mt-3 flex justify-between items-center ">
                    <div>
                        <input type="checkbox"></input>
                        <label class="px-2">Remember Me</label>
                    </div>
                    <div>
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <div class="mt-3">
                    <button type="submit" class="border-2 border-bg-indigo-700 bg-indigo-700 text-white py-1 w-full focus outline-none focus border-none hover:bg-transparent hover:text-indigo-700 font-semibold ">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login;