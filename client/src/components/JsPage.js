import React from 'react'
import Sidebar from './Sidebar'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import Search from './Search';
// b




const JsPage = () => {
  return (
    <>
    <Sidebar/>
   
    <h2 className='text-center mt-10 text-3xl font-nunito md:text-orange-700'>Welcome to JavaScript</h2>

    <Search />
    <div className='flex flex-col items-center md:flex-row justify-center gap-10 mt-16'>
        
        <div className="flash-card w-64 h-64 border-solid border-2 border-orange-400 text-orange-600 rounded-md cursor-pointer flex flex-col align-middle pt-6">
        <FontAwesomeIcon icon={faFeatherPointed} size="8x" />

            <h2 className='mt-6 text-center font-medium text-3xl text-sky-700 md:text-orange-600 font-nunito'>Quiz</h2>
        </div>
        <Link to="/javascript/flashcards">
        <div className="quiz-card w-64 h-64 border-solid border-2 border-orange-400 text-orange-600 rounded-md cursor-pointer flex flex-col align-middle pt-6">
        <FontAwesomeIcon icon={faClipboard} size="8x" />

<h2 className='mt-6 text-center font-medium text-3xl text-sky-700 font-nunito'>Flash Cards</h2>
        </div>
        </Link>
    </div>
    </>
  )
}

export default JsPage