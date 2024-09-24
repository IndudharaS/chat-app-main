import React from "react";
// import logo from '../assets/logo.png'

const AuthLayouts = ({ children }) => {
  return (
    <>
      {/* <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'> */}
      {/* <img 
              src={logo}
              alt='logo'
              width={180}
              height={60}
            /> */}
      {/* <h1 className='font-semibold text-4xl' >ChatzIt - Make your Chat</h1> */}
      {/* <h1 className='font-semibold text-4xl' >ChatzIt</h1>
        </header> */}

      <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/email"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              ChatzIt
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="/email"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </a>
            <a
              href="/register"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              SignUp
            </a>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default AuthLayouts;
