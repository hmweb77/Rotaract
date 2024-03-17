import React from "react";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Intro</a>
            </li>
            <li>
              <a>package</a>
              <ul className="p-2">
                <li>
                  <a>package 1</a>
                </li>
                <li>
                  <a>package 2</a>
                </li>
                <li>
                  <a>package 3</a>
                </li>
                <li>
                  <a>package 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Program</a>
            </li>
            <li>
              <a>Extra activities</a>
            </li>
            <li>
              <a>F.A.Q</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Rotaract Lisbon</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Intro</a>
          </li>
          <li>
            <details>
              <summary>package</summary>
              <ul className="p-2">
                <li>
                  <a>package 1</a>
                </li>
                <li>
                  <a>package 2</a>
                </li>
                <li>
                  <a>package 3</a>
                </li>
                <li>
                  <a>package 4</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Program</a>
          </li>
          <li>
            <a>Extra activities</a>
          </li>
          <li>
            <a>F.A.Q</a>
          </li>
          <li>
            <a>Team</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact us</a>
      </div>
    </div>
  );
}
