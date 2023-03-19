import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authJWT } from "../../api/authJWT";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import img from '../../images/images/login/login.svg'

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        createUser(email, password)
        .then((result) => {
          const user = result.user;
          authJWT(user);
          navigate('/');
        })
        .catch(err => console.error(err));
    }
  return (
    <div className="hero w-full">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-5xl text-center font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
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
                name='password'
                placeholder="password (Must be 8 characters)"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Sign Up" />
            </div>
          </div>
          <p className="text-center pb-10">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
