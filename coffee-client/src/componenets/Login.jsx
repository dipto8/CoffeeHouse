import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function Login() {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const user ={
          email,
          lastLoggedin: result.user?.metadata?.lastSignInTime

        }
        //Update last LoggedIn data into Database
        fetch('http://localhost:5000/user',{
          method: 'PATCH',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })




      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
