import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({
      ...inputs,
      gender,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl  font-semibold  text-center text-gray-300">
          Signup
          <span className="text-blue-500 ">Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-ghost border-1 border-gray-400  h-10"
              autoComplete="off"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-ghost border-gray-400 h-10"
              autoComplete="off"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-ghost border-gray-400 h-10"
              autoComplete="new-password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-ghost border-gray-400 h-10"
              autoComplete="off"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* GENDER CHECK BOX */}

          <GenderCheckbox
            onCheckboxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button disabled={loading} className="btn  btn-outline hover:glass hover:text-gray-300 border-gray-400 btn-block btn-sm mt-2">
             {
              loading ? <span className="loading loading-spinner"></span> :"Sign Up"
             }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
