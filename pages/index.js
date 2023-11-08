import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import dan from "../public/about.png";
import Image from "next/image";
import web1 from "../public/proj1.png";
import web2 from "../public/proj2.png";
import web3 from "../public/proj3.png";
import web4 from "../public/proj4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Daniel Reyes Tong</title>
        <meta name="description" content="Portfolio of Daniel Reyes Tong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">DRT</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="DRTResume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
  >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Daniel Reyes Tong
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer and Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Crafting intuitive and robust web solutions with a blend of modern technology and creative design
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Dreyestong" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://linkedin.com/in/Dreyestong" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
          </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={dan} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
       
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Welcome to my portfolio. As I pursue a Bachelor's in Computer Science, I've channeled my passion for web development into each project you see here. 

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            These pieces highlight my journey and the practical skills I've cultivated along the way.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* Wrap the Image in a div with relative positioning */}
            <div className="basis-1/3 flex-1 relative group">
              <Image
                className="rounded-lg object-cover transition duration-300 ease-in-out"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web1}
                alt="Book Recommendations"
              />
              {/* Overlay + Buttons: Initially hidden, shown on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <span className="text-white text-xl font-bold">Book Recommendations</span>
                <div>
                  <a href="https://github.com/DReyesTong/book-recommender" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Code</a>
                  <a href="#demoLink" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Demo</a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative group">
              <Image
                className="rounded-lg object-cover transition duration-300 ease-in-out"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web2}
                alt="Personal Book Library"
              />
              {/* Overlay + Buttons: Initially hidden, shown on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <span className="text-white text-xl font-bold">Personal Book Library</span>
                <div>
                  <a href="https://github.com/DReyesTong/book-library" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Code</a>
                  <a href="#demoLink" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Demo</a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative group">
              <Image
                className="rounded-lg object-cover transition duration-300 ease-in-out"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web3}
                alt="Calculator"
              />
              {/* Overlay + Buttons: Initially hidden, shown on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <span className="text-white text-xl font-bold">Calculator</span>
                <div>
                  <a href="https://github.com/DReyesTong/Calculator" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Code</a>
                  <a href="#demoLink" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Demo</a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative group">
              <Image
                className="rounded-lg object-cover transition duration-300 ease-in-out"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web4}
                alt="Personal Website"
              />
              {/* Overlay + Buttons: Initially hidden, shown on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <span className="text-white text-xl font-bold">Personal Website</span>
                <div>
                  <a href="#sourceCodeLink" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Code</a>
                  <a href="#demoLink" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mx-2 hover:opacity-90 transition duration-300 ease-in-out">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
