import React from "react";
import Logo from "./img/logo.svg";
import { Link } from "react-router-dom";
import Heroimage from "./img/illustration-intro.svg";
import Anisha from "./img/avatar-anisha.png";
import Footerlogo from "./img/logo-white.svg";
import Social1 from "./img/icon-facebook.svg";
import Social2 from "./img/icon-twitter.svg";
import Social3 from "./img/icon-youtube.svg";
import Social4 from "./img/icon-pinterest.svg";
import Social5 from "./img/icon-instagram.svg";
// import Pricing from "./Pricing";
// import BackImage from './img/bg-simplify-section-desktop.svg'
function Cards() {
  return (
    <>
      {/* <div style={{backgroundImage: URL('BackImage')}}> */}
      {/* nav bar */}
      <nav className=" container mx-auto relative ">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="pt-8">
            <img alt="error" src={Logo} />
          </div>

          <div className="hidden md:flex space-x-12">
            <Link to="Pricing" className="hover:text-yellow-600">
              pricing
            </Link>
            <a href="#" className="hover:text-yellow-600">
              Product
            </a>
            <a href="#" className="hover:text-yellow-600">
              About us
            </a>
            <a href="#" className="hover:text-yellow-600">
              Carrers
            </a>
            <a href="#" className="hover:text-yellow-600">
              Community
            </a>
          </div>
          {/* Button*/}
          <button className="hidden md:block bg-yellow-600 rounded-full p-3 px-3 py-2 text-white hover:text-red-900">
            Get Started
          </button>
          {/* hamburger menu */}
          <button
            className="hamburger open block md:hidden focus:outline-none"
            id="menu-btn"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col hidden items-center absolute">
            <Link to="Pricing" className="hover:text-yellow-600">
              pricing
            </Link>
            <a href="#" className="hover:text-yellow-600">
              Product
            </a>
            <a href="#" className="hover:text-yellow-600">
              About us
            </a>
            <a href="#" className="hover:text-yellow-600">
              Carrers
            </a>
            <a href="#" className="hover:text-yellow-600">
              Community
            </a>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <section>
        <div className=" flex flex-col-reverse md:flex-row items-center container mx-auto">
          {/* left section */}
          <div className="container flex mb-32 flex-col space-y-12  p-2 md:w-1/2 mt-10">
            <h1 className=" font-bold text-4xl text-center md:text-left max-w-md md:text-5xl">
              Build everyone together to build better products
            </h1>
            <div className="max-w-sm  p-2">
              <p>
                Manage makes it simple for software teams to plan day-to-day
                Tasks while keeping the large team goals in view
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className=" bg-yellow-600 rounded-full p-3 px-3 py-2 text-white hover:text-red-900">
                Get Started
              </button>
            </div>
          </div>
          {/* Right section */}
          <div className=" md:w-1/2 md:mt-0 mt-10">
            <div>
              <img src={Heroimage} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* feature section */}
      <div className="flex flex-col md:flex-row  container mx-auto mt-10">
        {/* left div */}
        <div className="flex flex-col md:w-1/2 p-2">
          <h1 className="font-bold text-4xl text-center md:text-left md:text-5xl max-w-md">
            What's different about Manage?
          </h1>
          <div className="mt-10 max-w-sm ">
            <p>
              Manage provides all functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
        </div>
        {/* right div */}
        <div className="flex flex-col md:w-1/2 mt-10 md:mt-0 p-2">
          {/* list item 1 */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 mb-5">
            <div className="rounded-full bg-yellow-900 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="text-white rounded-full bg-yellow-600 py-2 px-4 md:py-1">
                  01
                </div>
                <h1 className="font-bold md:mb-4 md:hidden">
                  Track company-wide Progress
                </h1>
              </div>
            </div>
            <div>
              <h3 className="hidden md:block text-lg font-bold ">
                Track company-wide Progress
              </h3>
              <p className="text-slate-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
          {/* list items 2 */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 mb-5">
            <div className="rounded-full bg-yellow-900 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="text-white rounded-full bg-yellow-600 py-2 px-4 md:py-1">
                  02
                </div>
                <h1 className="font-bold md:mb-4 md:hidden">
                  Advance build-in reports
                </h1>
              </div>
            </div>
            <div>
              <h3 className="hidden md:block text-lg font-bold ">
                Advance build-in reports
              </h3>
              <p className="text-slate-400">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will,
              </p>
            </div>
          </div>
          {/* list items 3 */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 mb-5">
            <div className="rounded-full bg-yellow-900 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="text-white rounded-full bg-yellow-600 py-2 px-4 md:py-1">
                  02
                </div>
                <h1 className="font-bold md:mb-4 md:hidden">
                  Advance build-in reports
                </h1>
              </div>
            </div>
            <div>
              <h3 className="hidden md:block text-lg font-bold ">
                Advance build-in reports
              </h3>
              <p className="text-slate-400">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will,
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <section>
        {/* heading */}
        <div className="container  m-auto text-center mt-32">
          <h1 className="font-bold text-4xl">What's Different about Manage</h1>
          {/* profile cards */}
          <div className="flex flex-col space-y-24  md:flex-row md:space-x-6 md:space-y-0 mt-32">
            {/* first card */}
            <div className="flex flex-col md:w-1/3 border rounded-lg items-center">
              <img className="w-16 -mt-9 " alt="error" src={Anisha} />
              <h4 className="text-lg font-bold mt-8">Alisha Li</h4>
              <p className="text-sm text-slate-400 p-6">
                High-performance teams aren’t clobbered and pieced together;
                they are forged. And if you’re doing your job effectively, any
                human soul can be properly forged in your furnace—if you follow
                three proven strategies.
              </p>
            </div>
            {/* second card */}
            <div className="flex flex-col md:w-1/3 border rounded-lg items-center">
              <img className="w-16 -mt-9 " alt="error" src={Anisha} />
              <h4 className="text-lg font-bold mt-8">Alisha Li</h4>
              <p className="text-sm text-slate-400 p-6">
                High-performance teams aren’t clobbered and pieced together;
                they are forged. And if you’re doing your job effectively, any
                human soul can be properly forged in your furnace—if you follow
                three proven strategies.
              </p>
            </div>
            {/* third card */}
            <div className="flex flex-col md:w-1/3 border rounded-lg items-center ">
              <img className="w-16 -mt-9 " alt="error" src={Anisha} />
              <h4 className="text-lg font-bold mt-8">Alisha Li</h4>
              <p className="text-sm text-slate-400 p-6">
                High-performance teams aren’t clobbered and pieced together;
                they are forged. And if you’re doing your job effectively, any
                human soul can be properly forged in your furnace—if you follow
                three proven strategies.
              </p>
            </div>
          </div>
          <button className=" bg-yellow-600 rounded-full p-3 px-3 py-2 text-white hover:text-red-900 mt-10">
            Get Started
          </button>
        </div>
      </section>
      {/* second last section */}
      <div className=" bg-yellow-600 mt-10">
        <div className="  container m-auto flex flex-col justify-between items-center md:flex-row py-24 px-6 md:py-12 space-y-12 md:space-y-0  ">
          <h1 className="font-bold text-5xl md:text-4xl text-center">
            Simplify how your team works today.
          </h1>
          <button className=" bg-white rounded-full p-3 px-3 py-2   text-yellow-600 hover:text-red-900 mt-10">
            Get Started
          </button>
        </div>
      </div>
      {/* footer */}
      <div className="bg-gray-800">
        {/* container */}
        <div className="flex flex-col md:flex-row justify-around items-center container m-auto py-10 px-6 space-y-6 md:space-y-0">
          {/* div 1 */}
          <div className="flex flex-col items-center justify-between  px-4 py-6">
            <div>
              <img src={Footerlogo} className="h-8" alt="error logo" />
            </div>
            <div className="flex flex-row space-x-3 mt-6 ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/Pakistan/"
              >
                <img src={Social1} alt="error" />
              </a>
              <a href="#">
                <img src={Social2} alt="error" />
              </a>
              <a href="#">
                <img src={Social3} alt="error" />
              </a>
              <a href="#">
                <img src={Social4} alt="error" />
              </a>
              <a href="#">
                <img src={Social5} alt="error" />
              </a>
            </div>
          </div>
          {/* div 2 */}
          <div className="flex justify-around text-white space-x-24  px-4 py-6">
            <div className="flex flex-col">
              <a href="#">Home</a>
              <Link to="Pricing">Pricing</Link>
              <a href="#">Product</a>
              <a href="#">About</a>
            </div>
            <div className="flex flex-col">
              <a href="#">Careers</a>
              <a href="#">Community</a>
              <a href="#">Privicy Policies</a>
            </div>
          </div>
        </div>
        {/* div 3 */}

        <div className="flex justify-center text-white py-4">
          CopyRight &copy; 2022, All Rights Reserved
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Cards;
