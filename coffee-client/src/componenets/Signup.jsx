import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function Signup() {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.name.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password).then((result) => {
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error);
    })
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign up</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
