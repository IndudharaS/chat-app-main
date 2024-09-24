import React, { useEffect, useState } from "react";
// import { IoClose } from "react-icons/io5";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
// import uploadFile from '../helpers/uploadFile';
import axios from "axios";
import toast from "react-hot-toast";
// import { PiUserCircle } from "react-icons/pi";
// import Avatar from '../components/Avatar';
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";
// import { setToken, setUser } from '../redux/userSlice';

const CheckPasswordPage = () => {
  const [data, setData] = useState({
    password: "",
    userId: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location?.state?.name) {
      navigate("/email");
    }
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

    try {
      const response = await axios({
        method: "post",
        url: URL,
        data: {
          userId: location?.state?._id,
          password: data.password,
        },
        withCredentials: true,
      });

      toast.success(response.data.message);

      if (response.data.success) {
        dispatch(setToken(response?.data?.token));
        localStorage.setItem("token", response?.data?.token);

        setData({
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    // <div className='mt-5'>
    //     <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>

    //         <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
    //             {/* <PiUserCircle
    //               size={80}
    //             /> */}
    //             <Avatar
    //               width={70}
    //               height={70}
    //               name={location?.state?.name}
    //               imageUrl={location?.state?.profile_pic}
    //             />
    //             <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
    //         </div>

    //       <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>

    //       <div className='flex flex-col gap-1'>
    //             <label htmlFor='password'>Password :</label>
    //             <input
    //               type='password'
    //               id='password'
    //               name='password'
    //               placeholder='enter your password'
    //               className='bg-slate-100 px-2 py-1 focus:outline-primary'
    //               value={data.password}
    //               onChange={handleOnChange}
    //               required
    //             />
    //           </div>

    //           <button
    //            className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
    //           >
    //             Login
    //           </button>

    //       </form>

    //       <p className='my-3 text-center'><Link to={"/forgot-password"} className='hover:text-primary font-semibold'>Forgot password ?</Link></p>
    //     </div>
    //
    // </div>
    <>
      <div className="w-full mx-auto mt-10 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl mx-auto font-medium text-gray-900 dark:text-white">
            Continue with your Password
          </h5>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              placeholder="enter your password"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continue
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckPasswordPage;
