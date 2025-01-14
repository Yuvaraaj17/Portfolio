"use client";
import React, { useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";
import { IoIosCloseCircle } from "react-icons/io";

interface skill {
  name: string;
  description: string;
  icon(size: number | null): React.ReactNode;
}

export const Skills = () => {
  const mySkills: skill[] = [
    {
      name: "Next js",
      description: "Proficient in building fast, SEO-optimized web applications using Next.js with SSR, SSG, and ISR. Experienced in API routes, and deploying scalable apps on Vercel.",
      icon: (size) => <RiNextjsFill size={size} color="white" />,
    },
    {
      name: "Tailwind css",
      description: "Skilled in creating responsive, modern interfaces using Tailwind CSS with utility-first design. Experienced in theme customization and seamless integration with frameworks like Next.js.",
      icon: (size) => <RiTailwindCssFill size={size} color="#3490dc" />,
    },
    {
      name: "C++",
      description: "Versatile in developing high-performance applications with C++, specializing in object-oriented programming, STL, and multi-threading. Adept at building scalable systems and optimizing code for efficiency.",
      icon: (size) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <path
            fill="#00549d"
            fillRule="evenodd"
            d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#0086d4"
            fillRule="evenodd"
            d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#0075c0"
            fillRule="evenodd"
            d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M31 21H33V27H31zM38 21H40V27H38z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M29 23H35V25H29zM36 23H42V25H36z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "C",
      description: "Adept in C programming, with a focus on developing efficient algorithms and managing memory and also debugging C code for various applications.",
      icon: (size) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0,0,256,256"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M22.903,3.286c0.679,-0.381 1.515,-0.381 2.193,0c3.355,1.883 13.451,7.551 16.807,9.434c0.679,0.38 1.097,1.084 1.097,1.846c0,3.766 0,15.101 0,18.867c0,0.762 -0.418,1.466 -1.097,1.847c-3.355,1.883 -13.451,7.551 -16.807,9.434c-0.679,0.381 -1.515,0.381 -2.193,0c-3.355,-1.883 -13.451,-7.551 -16.807,-9.434c-0.678,-0.381 -1.096,-1.084 -1.096,-1.846c0,-3.766 0,-15.101 0,-18.867c0,-0.762 0.418,-1.466 1.097,-1.847c3.354,-1.883 13.452,-7.551 16.806,-9.434z"
                fill="#000000"
              ></path>
              <path
                d="M5.304,34.404c-0.266,-0.356 -0.304,-0.694 -0.304,-1.149c0,-3.744 0,-15.014 0,-18.759c0,-0.758 0.417,-1.458 1.094,-1.836c3.343,-1.872 13.405,-7.507 16.748,-9.38c0.677,-0.379 1.594,-0.371 2.271,0.008c3.343,1.872 13.371,7.459 16.714,9.331c0.27,0.152 0.476,0.335 0.66,0.576z"
                fill="#000000"
              ></path>
              <path
                d="M24,10c7.727,0 14,6.273 14,14c0,7.727 -6.273,14 -14,14c-7.727,0 -14,-6.273 -14,-14c0,-7.727 6.273,-14 14,-14zM24,17c3.863,0 7,3.136 7,7c0,3.863 -3.137,7 -7,7c-3.863,0 -7,-3.137 -7,-7c0,-3.864 3.136,-7 7,-7z"
                fill="#ffffff"
              ></path>
              <path
                d="M42.485,13.205c0.516,0.483 0.506,1.211 0.506,1.784c0,3.795 -0.032,14.589 0.009,18.384c0.004,0.396 -0.127,0.813 -0.323,1.127l-19.084,-10.5z"
                fill="#000000"
              ></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: "Python",
      description: "Well-versed in Python for building efficient applications, focusing on data processing, automation, and web development. Skilled in integrating libraries and frameworks for scalable solutions.",
      icon: (size) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <path
            fill="#0277BD"
            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
          ></path>
          <path
            fill="#FFC107"
            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Linux",
      description: "Expert in Linux, with a focus on managing environments like Rocky Linux in WSL.",
      icon: (size) => <FcLinux size={size} />,
    },
    {
      name: "AWS",
      description: "Knowledgeable in leveraging AWS services like EC2, S3, and Lambda for building scalable cloud applications. Experienced in managing infrastructure with AWS tools and ensuring cost-effective solutions.",
      icon: (size) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <path
            fill="white"
            d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
          ></path>
          <path
            fill="#f90"
            d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Figma",
      description: "Strong understanding of design tools, including Figma, for creating user interfaces and collaborating on design projects. Expertise in prototyping, wireframing, and designing with a user-centered approach.",
      icon: (size) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <path
            fill="#e64a19"
            d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
          ></path>
          <path
            fill="#7c4dff"
            d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
          ></path>
          <path
            fill="#66bb6a"
            d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
          ></path>
          <path
            fill="#ff7043"
            d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
          ></path>
          <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
        </svg>
      ),
    },
    {
      name: "Javascript",
      description: "Capable in JavaScript, with expertise in writing efficient code and building interactive applications. Skilled in utilizing frameworks and libraries to develop dynamic web applications.",
      icon: (size) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0,0,256,256"
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(5.33333,5.33333)">
              <path d="M6,42v-36h36v36z" fill="#ffd600"></path>
              <path
                d="M29.538,32.947c0.692,1.124 1.444,2.201 3.037,2.201c1.338,0 2.04,-0.665 2.04,-1.585c0,-1.101 -0.726,-1.492 -2.198,-2.133l-0.807,-0.344c-2.329,-0.988 -3.878,-2.226 -3.878,-4.841c0,-2.41 1.845,-4.244 4.728,-4.244c2.053,0 3.528,0.711 4.592,2.573l-2.514,1.607c-0.553,-0.988 -1.151,-1.377 -2.078,-1.377c-0.946,0 -1.545,0.597 -1.545,1.377c0,0.964 0.6,1.354 1.985,1.951l0.807,0.344c2.745,1.169 4.293,2.363 4.293,5.047c0,2.892 -2.284,4.477 -5.35,4.477c-2.999,0 -4.702,-1.505 -5.65,-3.368zM17.952,33.029c0.506,0.906 1.275,1.603 2.381,1.603c1.058,0 1.667,-0.418 1.667,-2.043v-10.589h3.333v11.101c0,3.367 -1.953,4.899 -4.805,4.899c-2.577,0 -4.437,-1.746 -5.195,-3.368z"
                fill="#ffffff"
              ></path>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const [style, setStyle] = useState(false);
  const [activeElement, setActiveElement] = useState<skill>(mySkills[0]);
  const handleClick = (element) => {
    setActiveElement(element);
    setStyle(true);
  };

  return (
    <div className="w-full min-h-[400px] flex items-center px-4 py-6 bg-zinc-950">
      <div className="h-max w-full flex flex-col gap-3">
        <div
          className={`flex justify-between px-10 ${
            style ? "gap-x-9 gap-y-4" : "gap-x-20 gap-y-10"
          }  flex-wrap relative`}
        >
          {style
            ? mySkills.map((element, key) => (
                <div
                  key={key}
                  onClick={() => handleClick(element)}
                  className="border hover:cursor-pointer hover:scale-95 border-black shadow-md gap-3 flex flex-row min-w-24 w-fit h-fit py-1 text-slate-400 font-poppins bg-zinc-800 rounded-[3px] items-center justify-between px-3"
                >
                  <div>{element.name}</div>
                  <div>{element.icon(20)}</div>
                </div>
              ))
            : mySkills.map((element, key) => (
                <div
                  key={key}
                  className="rounded-md hover:bg-zinc-900 transition-all hover:scale-105 duration-300 ease-in-out hover:shadow-md p-2 hover:cursor-pointer"
                  onClick={() => handleClick(element)}
                >
                  {element.icon(75)}
                </div>
              ))}
          {style && (
            <IoIosCloseCircle
              color="white"
              className="hover:cursor-pointer absolute right-0"
              size={30}
              onClick={() => setStyle(false)}
            />
          )}
        </div>
        {style && (
          <div className="flex flex-row w-full h-[330px]">
            <div className="w-1/2 border-r-2 border-b border-t border-white flex items-center justify-center">
              {activeElement.icon(75)}
            </div>
            <div className="font-poppins px-8 font-normal tracking-widest text-[15px] w-1/2 border-t border-l-2 border-b border-white text-white flex items-center justify-center">
              {activeElement.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
