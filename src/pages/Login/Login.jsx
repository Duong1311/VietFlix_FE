import { CiLock } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

import Register from "../Register/Register";
import { useState } from "react";

const Login = ({ visible, onClose }) => {
  const [showRegister, setShowRegister] = useState(false);
  const handleOnClode = () => {
    setShowRegister(false);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="bg-black w-[500px] rounded-3xl border border-white  flex justify-center items-center">
        <div className="flex w-5/6 flex-col text-white">
          <div className="mt-10 cursor-pointer" onClick={onClose}>
            <FaArrowRightLong />
          </div>

          <div className="text-xl font-semibold text-[#E50914]">Login</div>
          <div className="text-xs mb-10">
            Login now to track all your expenses and income at a place!
          </div>
          <div>Email</div>
          <label className="relative block w-full">
            <span className="absolute inset-y-0 flex justify-center items-center pl-2 text-[#E50914] h-[37px]">
              @
            </span>
            <input
              className=" peer text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#E50914] focus:ring-[#E50914] focus:ring-1 sm:text-sm"
              placeholder="email"
              type="email"
              name="email"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
              Please provide a valid email address.
            </p>
          </label>
          <div>Your Password</div>
          <label className="relative block w-full ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CiLock color="red" />
            </span>
            <input
              className=" text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#E50914] focus:ring-[#E50914] focus:ring-1 sm:text-sm"
              placeholder="password"
              type="password"
              name="email"
            />
          </label>
          <div className="flex items-center bg-[#E50914] h-[37px] mt-8  text-white cursor-pointer hover:bg-red-700 font-semibold rounded-md px-4 py-1">
            <div className="flex text-sm justify-center items-center w-full">
              Login
            </div>
          </div>

          <div className="flex felx-row mb-16 mt-2 text-sm">
            <div>Don’t have an account?</div>
            <div
              onClick={() => {
                setShowRegister(true);
              }}
              className="text-[#E50914] underline"
            >
              Register
            </div>
          </div>
        </div>
      </div>
      <Register onClose1={handleOnClode} visible1={showRegister} />
    </div>
  );
};

export default Login;
