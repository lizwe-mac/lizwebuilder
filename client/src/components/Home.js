import React from "react";
import js from "../assets/javascript.png";
import css from "../assets/css3.png";
import node from "../assets/node.png";
import html from "../assets/html.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

const Home = () => {
  const greetings = ["Hello", "Sawubona", "Howzit", "Thobela", "Hola"];
  let [greeting, setGreeting] = useState(greetings[0]);
  let num = 0;
  // let greeting = 'Greetings'
  // window.setInterval(
  //   function(){
  //       greetings.forEach(element => {
  //         // console.log(element)
  //         setTimeout(()=>{
  //           setGreeting(element)
  //         }, 2000)
  //       })
  //   }, 2000
  // )
  // hello()
  //   window.setInterval(()=>{ // 4
  //     num++; // 5
  //     if(num > greetings.length) num = 0; // 6
  //     // console.log(num)
  //     setGreeting(prev => greetings[num]); // 7
  //  }, 5000)

  return (
    <div className="bg-gradient-to-l from-[#ffafbd] to-[#ffc3a0] h-[100vh] flex items-center">
      <div className="flex flex-col item-left gap-5 m-10 border-[3px] border-orange-100 p-5 rounded-md">
        <h1 className="font-nunito text-orange-500 text-4xl text-left">
          {greeting}
        </h1>
        <h1 className="font-nunito text-8xl text-left">
          A Free <br /> Community <br /> Campaign Builder <br /> for Activists
        </h1>
        <p></p>
        <div className="flex gap-5">
        <Link to="/explore">
          <button className="bg-orange-500 w-32 text-white h-12 rounded-sm text-lg font-nunito">
            EXPLORE
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-white border-orange-500 w-32 text-gray-600 h-12 rounded-sm text-lg font-nunito">
            SIGN UP
          </button>
        </Link>
        </div>
      </div>
      <div>
        <img src="https://source.unsplash.com/random/400x500/?activist" alt="" />
      </div>
      {/* <div className="grid grid-cols-2 border-4 justify-center items-center mt-20 gap-10 md:grid-cols-4"> */}
      {/* <div className="flex flex-col gap-5 mt-20 items-center md:flex-row md:items-center md:justify-evenly">
        <Link
          className="border-2 items-center rounded-sm p-1 border-yellow-300 hover:border-yellow-600"
          to="/javascript"
        >
          <div className="border-2 flex flex-col items-center hover:border-orange-600">
            <img src={js} alt="" />{" "}
            <h3 className="text-center font-semibold text-xl pt-4 font-nunito">
              JavaScript
            </h3>
          </div>
        </Link>
        <Link
          className="border-2 items-center rounded-sm p-1 border-blue-400"
          to=""
        >
          <div className="border-2 flex flex-col items-center hover:border-orange-600">
            <img src={css} alt="" />{" "}
            <h3 className="text-center font-semibold text-xl pt-4 font-nunito">
              CSS
            </h3>
          </div>
        </Link>
        <Link
          className="border-2 items-center rounded-sm p-1 border-green-400"
          to=""
        >
          <div className="border-2 flex flex-col items-center hover:border-orange-600">
            <img src={node} alt="" />{" "}
            <h3 className="text-center font-semibold text-xl pt-4 font-nunito">
              NodeJS
            </h3>
          </div>
        </Link>
        <Link
          className="border-2 items-center border-orange-400 rounded-sm p-1"
          to=""
        >
          <div className="flex flex-col items-center hover:border-orange-600">
            <img src={html} alt="" />{" "}
            <h3 className="text-center font-semibold text-xl pt-4 font-nunito">
              HTML
            </h3>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
