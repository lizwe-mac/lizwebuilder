import React from 'react';
import js from "../assets/javascript.png";
import css from "../assets/css3.png";
import node from "../assets/node.png";
import html from "../assets/html.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed overflow-auto left-0 rounded-md top-48 border-orange-400 border-2 p-3 flex flex-col gap-2">
        <div className="w-14 hover:w-28 cursor-pointer transition"><img src={html} alt="" /></div>
        <div className="w-14 hover:w-28 cursor-pointer transition"><img src={css} alt="" /></div>
        <div className="w-14 hover:w-28 cursor-pointer transition"><img src={js} alt="" /></div>
        <div className="w-14 hover:w-28 cursor-pointer transition"><img src={node} alt="" /></div>
    </div>
  )
}

export default Sidebar