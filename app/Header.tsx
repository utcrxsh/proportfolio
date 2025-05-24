"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FiMoon } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";

export default function Header({ logo }: { logo: string }) {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [moonAnim, setMoonAnim] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // const navs = ["home", "about", "projects", "experience", "contact"];
  const navs = ["home", "projects" ,"experience", "about"];

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      } dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}
    >
      <nav className="items-center justify-between hidden w-full py-4 mx-auto lg:w-11/12 2xl:w-4/5 md:px-6 2xl:px-0 sm:flex">
        <Link
          href={"/"}
          className="flex items-center transition-colors duration-300 2xl:ml-6 hover:text-violet-700 hover:dark:text-violet-500"
        >
          {logo === "Utkarsh" ? (
            <>
              <FaNodeJs size={28} />
              <span className="ml-2 text-lg font-medium">Utkarsh Nautiyal</span>{" "}
            </>
          ) : (
            <span className="text-lg font-medium">{logo.split(" ")[0]}</span>
          )}
        </Link>

        <ul className="flex items-center gap-8">
          {navs.map((e, i) => (
            <li key={i}>
              <ScrollLink
                className="capitalize transition-colors cursor-pointer hover:text-violet-700 hover:dark:text-violet-500"
                to={e}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                {e}
              </ScrollLink>
            </li>
          ))}
          <span
            className={`hover:bg-gray-100 hover:dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors relative ${moonAnim ? "moon-animate" : ""}`}
            onClick={() => {
              setMoonAnim(true);
              setTimeout(() => setMoonAnim(false), 1000);
            }}
          >
            <FiMoon />
            {moonAnim && (
              <span className="moon-sparkle">
                <span className="moon-sparkle-dot"></span>
              </span>
            )}
          </span>
        </ul>
      </nav>

      <nav className="flex items-center justify-between p-4 sm:hidden">
        {logo === "Sam Hong" ? (
          <FaNodeJs size={28} />
        ) : (
          <span className="text-lg font-medium">{logo.split(" ")[0]}</span>
        )}
        <div className="flex items-center gap-4">
          <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
        </div>
      </nav>

      {/* <div
        className={`flex min-h-screen w-screen absolute md:hidden top-0 ${
          !navCollapse ? "right-0" : "right-[-100%]"
        } bottom-0 z-50 ease-in duration-300`}
      >
        <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

        <div className="flex flex-col w-3/4 gap-5 p-4 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95">
          <CgClose
            className="self-end my-2"
            size={20}
            onClick={() => setNavCollapse(true)}
          />

          {navs.slice(0, 4).map((e) => (
            <ScrollLink
              key={e}
              className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
              to={e}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
              onClick={() => setNavCollapse(true)}
            >
              {e}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            offset={-60}
            smooth={true}
            duration={500}
            onClick={() => setNavCollapse(true)}
            className="px-6 py-1.5 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-center"
          >
            Contact
          </ScrollLink>
        </div>
      </div> */}
    </header>
  );
}
