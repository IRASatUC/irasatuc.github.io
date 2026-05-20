// About.js

import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./About.css";
import { About_descriptions } from "../../contents/About_descriptions/About_descriptions";

import DFHighBay from "../img/DFHighBay.JPG";
import AirBearingTable from "../img/Air_bearing_table.jpg";
import GroupPhotoMay2026 from "../img/GroupPhotoMay2026.jpg";
import Lab_Web_Site_Ma_Ou from "../img/Lab_Website_Ma_Ou.jpg";
import Lab_Web_Site_Brian_VanFossen from "../img/Lab_Website_Brian_VanFossen.jpg";

import Project1Highlight from "../img/operation_concept.jpg";
import Project19Highlight from "../img/spdm_on_ssrms.jpg";
import Mobile_Version from "../img/mobile_version.jpg";
// --------------------
// COMPONENTS
// --------------------

function ContactRow({ role, name, email, phone, imgSrc, align = "left" }) {
  // Desktop squares; Mobile: stacked with nicer text sizing
  const PhotoCell = (
    <div className="aspect-square w-full overflow-hidden bg-gray-300">
      <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
    </div>
  );

  const InfoCell = (
    <div className="w-full bg-black/80 text-white flex items-center md:aspect-square">
      <div className="px-6 md:px-8 py-8 md:py-0 w-full">
        <p className="text-xl md:text-2xl font-semibold">{role}:</p>
        <p className="text-2xl md:text-3xl font-bold mt-2">{name}</p>

        <div className="mt-4 md:mt-6 space-y-2 text-base md:text-xl">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-0">
      {align === "left" ? (
        <>
          {PhotoCell}
          {InfoCell}
          <div className="hidden md:block md:aspect-square w-full" />
        </>
      ) : (
        <>
          <div className="hidden md:block md:aspect-square w-full" />
          {InfoCell}
          {PhotoCell}
        </>
      )}
    </div>
  );
}


function ProjectHighlightRow({
  imgSrc,
  projectTitle,
  projectPath,
  pageTitle,
  pagePath,
  align = "left",
}) {
  const ImageCell = (
    <div className="aspect-[4/3] md:aspect-square w-full overflow-hidden bg-gray-300">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="Project highlight"
          className="w-full h-full object-cover"
        />
      ) : null}
    </div>
  );

  const ProjectLinkCell = (
    <Link
      to={projectPath}
      className="aspect-[4/3] md:aspect-square w-full bg-black/80 text-white flex items-center justify-center text-center px-6
                 hover:bg-black/70 transition"
    >
      <p className="text-xl md:text-2xl font-semibold leading-snug">
        {projectTitle}
      </p>
    </Link>
  );

  const PageLinkCell = (
    <Link
      to={pagePath}
      className="aspect-[4/3] md:aspect-square w-full bg-black/80 text-white flex items-center justify-center text-center px-6
                 hover:bg-black/70 transition"
    >
      <p className="text-2xl md:text-3xl font-bold underline leading-tight text-right">
        {pageTitle}
      </p>
    </Link>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-0">
      {align === "left" ? (
        <>
          {ImageCell}
          {ProjectLinkCell}
          {PageLinkCell}
        </>
      ) : (
        <>
          {PageLinkCell}
          {ProjectLinkCell}
          {ImageCell}
        </>
      )}
    </div>
  );
}

// --------------------
// MAIN PAGE
// --------------------

export default function About() {
  useEffect(() => {
    document.getElementById("root").style.background =
      "linear-gradient(to bottom, var(--color-base-blue) 50%, white 100%)";
    return () => {
      document.getElementById("root").style.background = "initial";
    };
  }, []);

  return (
    <div className="bg-base-blue">

{/* Section 1: Hero image (desktop + mobile) */}
<div className="hidden sm:block iras-lab-about-section-1 bg-cover min-h-[700px]" />

<div
  className="sm:hidden w-full min-h-[520px] bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to bottom, transparent 70%, var(--color-base-blue)), url(${Mobile_Version})`,
  }}
/>


      {/* Section 2: Video + description */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 min-[933px]:grid-cols-2 gap-8 items-center">
          <div className="w-full overflow-hidden rounded-lg">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BjilMzyGsyU"
                title="IRAS Lab video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white text-3xl font-bold mb-4 max-[932px]:text-2xl">
              IRAS Lab
            </h1>
            <p className="text-white leading-relaxed">{About_descriptions?.[0]}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Air Bearing Table */}
      <div className="w-full px-4 md:px-8 py-4 flex justify-center">
        <img
          src={AirBearingTable}
          alt="Description"
          className="w-full h-[680px] object-cover rounded-2xl"
        />
      </div>
  
      {/* Section 4: Lab Contact Info (full-width image background) */}
      <section className="w-full mt-24">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${DFHighBay})` }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ContactRow
              align="left"
              role="Lab Director"
              name="Dr. Ou Ma"
              email="maou@ucmail.uc.edu"
              phone="(513) 556-3747"
              imgSrc={Lab_Web_Site_Ma_Ou}
            />

            <div className="h-10" />

            <ContactRow
              align="right"
              role="Lab Manager"
              name="Brian Van Fossen"
              email="vanfosbn@ucmail.uc.edu"
              phone="(513) 556-3684"
              imgSrc={Lab_Web_Site_Brian_VanFossen}
            />
          </div>
        </div>
      </section>


      {/* Section 5: Project Highlights (current left, prior right) */}
      <section className="flex flex-col items-center gap-10 mt-24">
        <div className="w-full max-w-6xl mx-auto">
          <ProjectHighlightRow
            align="left"
            imgSrc={Project1Highlight}
            projectTitle="Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object"
            projectPath="/CurrentProjects/Project1"
            pageTitle={
              <>
                LEARN ABOUT<br />OUR CURRENT<br />PROJECTS
              </>
            }
            pagePath="/CurrentProjects"
          />

          <div className="h-10" />

          <ProjectHighlightRow
            align="right"
            imgSrc={Project19Highlight}
            projectTitle="SPDM Task Verification Facility (STVF)"
            projectPath="/PriorProject/Project19"
            pageTitle={
              <>
                LEARN ABOUT<br />OUR PRIOR<br />PROJECTS
              </>
            }
            pagePath="/PriorProject"
          />
        </div>
      </section>

      {/* Section 6: Meet the Team */}

      {/* Mobile: full image */}
      <div className="relative md:hidden w-full mt-12">
        <img src={GroupPhotoMay2026} alt="Group" className="w-full object-contain" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(to bottom, var(--color-base-blue) 0%, transparent 15%, transparent 85%, var(--color-base-blue) 100%)
          `
        }} />

        <Link
          to="/People"
          className="absolute inset-4 flex items-end justify-center
          text-white text-3xl font-bold px-4 pb-6 text-center
          hover:text-gray-300 transition-colors duration-300"
        >
          MEET THE TEAM
        </Link>
      </div>

      {/* Desktop: background with fades */}
      <div
        className="relative hidden md:block w-full min-h-[900px] bg-cover bg-center bg-no-repeat mt-24"
        style={{
          backgroundImage: `
            linear-gradient(to top, transparent, transparent calc(100% - 80px), var(--color-base-blue)),
            linear-gradient(to bottom, transparent, transparent calc(100% - 80px), var(--color-base-blue)),
            url(${GroupPhotoMay2026})
          `,
        }}
      >
        <Link
          to="/People"
          className="absolute inset-10 flex items-end justify-center
          text-white text-[12rem] font-bold px-4 pb-16 text-center
          hover:text-blue-200 transition-colors duration-300"
        >
          MEET THE TEAM
        </Link>
      </div>

      {/* Footer logo section */}
      <div className="iras-lab-about-section-end bg-white h-[20vh] bg-contain bg-no-repeat bg-bottom" />
    </div>
  );
}
