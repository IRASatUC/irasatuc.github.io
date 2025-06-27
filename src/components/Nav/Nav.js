
import React from 'react';
import './Nav.css';
import IRAS_LOGO from '../img/IRAS_LOGO_2.png';
import { Outlet, Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
          <nav className="flex items-center justify-between flex-wrap bg-[#37425B] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Link to='/'><img className="nav-Logo" src={IRAS_LOGO} alt=""></img></Link>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto ">
              <div className="text-lg  lg:flex-grow lg:text-xl xl:text-2xl ">
                <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  About
                </Link>
                <Link to="/Oppoturnities" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Oppoturnities
                </Link>
                <Link to="/News" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  News
                </Link>
                <Link to="/People" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  People
                </Link>
                <Link to="/CurrentProjects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Current Projects
                </Link>
                <Link to="/PriorProject" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Prior Projects
                </Link>
                <Link to="/Publication" className="inline-block lg:text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#37425B] hover:bg-white mt-4 lg:mt-0">Publication</Link>
              </div>
              
            </div>
          </nav>
          <Outlet />
        </div>
    )
}