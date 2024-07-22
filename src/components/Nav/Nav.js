
import React from 'react';
import './Nav.css';
import IRAS_LOGO from '../img/IRAS_LOGO_2.png';
export default function Nav(){
    return(
        <nav class="flex items-center justify-between flex-wrap bg-[#37425B] p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <a href='About'><img className="nav-Logo" src={IRAS_LOGO} alt=""></img></a>
          </div>
          <div class="w-full block lg:flex lg:items-center lg:w-auto ">
            <div class="text-lg  lg:flex-grow ">
              <a href="About" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                About
              </a>
              <a href="News" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                News
              </a>
              <a href="People" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                People
              </a>
              <a href="CurrentProjects" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Current Projects
              </a>
              <a href="PriorProject" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Prior Projects
              </a>
              <a href="Publication" class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#37425B] hover:bg-white mt-4 lg:mt-0">Publication</a>
            </div>
            
          </div>
        </nav>
    )
}