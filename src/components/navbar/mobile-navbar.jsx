import React from "react";
import config from "../../../config.json";
import logo from "../images/logo/LogoOnly.png";
import textlogo from "../images/logo/TextOnly.png";

function MobileNavbar() {
  return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn mx-1 my-1 drawer-button lg:hidden"
          >
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png"
              alt="menu--v1"
            /> 
          </label>
          <div className="p-7 text-slate-200">
          <img
                width="350"
                height="350"
                src={logo}
                alt="Logo"
                className="mx-auto my-5"
              />{" "}
              <img
                width="350"
                height="350"
                src={textlogo}
                alt="Logo"
                className="mx-auto my-5"
              />{" "}
            {/* <h1 className="text-center text-3xl mt-5 font-archivo p-8 leading-10 my-5 font-semibold">
              Welcome to {config.config.firmname}
            </h1> */}
            <h3 className="text-center my-7 text-xl">
              {config.company.description}
            </h3>
          </div>
        </div>
        <div className="drawer-side font-archivo">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-zinc-800 text-white">
            {/* Sidebar content here */}
            <li className="mt-[40px]">
            <img
                width="120"
                height="120"
                src={logo}
                alt="external-knot-china-photo3ideastudio-solid-photo3ideastudio"
                className="mx-auto my-1 mb-5"
              />
              <p className="text-2xl mb-[30px] font-semibold">WordScape</p>
            </li>
            <li>
              <p className="text-xl mb-3 font-light">Dashboard</p>
            </li>
            <li>
              <p className="text-xl mb-3 font-light">Place an order</p>
            </li>
            <li>
              <p className="text-xl mb-3 font-light">Cost Calculation</p>
            </li>
            <li>
              <p className="text-xl mb-3 font-light">Statement</p>
            </li>
            <li>
              <p className="text-xl mb-3 font-light">Logout</p>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default MobileNavbar;
