import React from "react";
import MainComponent from "../MainComponent";
import "./Login.css";

export default function Login(){

  return (
    <>
    {/* <MainComponent 
    insden={"login"}
    /> */}
          <div class="lform">
            <h2>Login here</h2>
            <input class="em" 
            type="email" 
            placeholder="Enter your emaid id" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <button class="btn2">
              <a href="#">Login</a>
            </button>
            <p class="link">
              <a href="#">forget password</a>
            </p>
          </div>
        {/* </div>  */}
    </>
  );
}

