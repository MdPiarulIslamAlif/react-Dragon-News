import { Link } from "react-router-dom";
import Navbar from "../../Sheard/Navbar/Navbar";

const Login = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl font-semibold my-10 text-center">
          Please Login
        </h2>
        <form onSubmit={handleOnSubmit} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-6 text-xl font-semibold">
          You have not Account Please <Link className="underline text-green-600 ml-3" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
