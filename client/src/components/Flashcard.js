import React from "react";
import "../App.css"
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import loadingGif from "../assets/loading.gif"
import Comments from "./Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import { faFrown} from '@fortawesome/free-solid-svg-icons'
import {Online, Offline} from 'react-detect-offline'
import { useOnlineStatus } from "../context/UseOnlineStatus";
import ShowComments from "./ShowComments";

export default function Flashcard() {
  //Show and hide button
//   const [showText, setShowText] = React.useState(true);
  //-------------------------
  const [isFlipped, setIsFlipped] = React.useState({flipped: false, styles:{}})
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0)
  const [style, setStyle] = React.useState({flipped: false, styles:{}})
  const [showItems,  setShowItems] = useState('')
  const [isOnliney, setIsLoading] = useState(useOnlineStatus())

  function getRandomString () {
    return Math.random().toString(36).substring(2, 15)
  }
  
  async function isOnline () {
    if (!window.navigator.onLine) return false
  
    // avoid CORS errors with a request to your own origin
    const url = new URL(window.location.origin)
  
    // random value to prevent cached responses
    url.searchParams.set('rand', getRandomString())
  
    try {
      const response = await fetch(
        url.toString(),
        { method: 'HEAD' },
      )
  
      return response.ok
    } catch {
      return false
    }
  }  
 
        useEffect(() => {
          if (!window.navigator.onLine){
            setIsLoading(false)
            return
          }else{
            fetch("http://localhost:3005")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
          }
            
        }, []);
        // console.log("items:", items[0].flashcards)
        window.addEventListener('online', () => console.log('online'))
window.addEventListener('offline', () => console.log('offline'))

        // console.log("is loading:", isOnline())
        // console.log("Online:", window.navigator.onLine)
        if (!isOnline()) {
          return <div className=" text-orange-500 flex flex-col gap-3 items-center absolute left-2/4 -translate-x-1/2 top-40 w-30">
            <FontAwesomeIcon icon={faFrown} size='3x'/>
            <h2 className="text-gray-500 font-medium font-nunito text-2xl">Unable to load.</h2>
          </div>
        }
        else if (error) {
            return <h1>{error.message}</h1>;
        } else if (!isLoaded) {
            return <div className="absolute left-2/4 -translate-x-1/2 top-40 w-30"><img className="w-full" src={loadingGif} alt="" /></div>
        } 
        else if (Online) {
        // console.log("items:", setQuizItems)
    
        const setQuizItems = items[0].flashcards.map((item, index) => {

            return(
              
                  <div key={index} className="container border-2 absolute left-2/4 -translate-x-1/2 top-40 z-100 font-nunito">
        <div onClick={flipCard} style={isFlipped.styles} className="card">
          <div className="question">
          <h3>Q{index+1}. </h3>
        <p>
          <strong>
            {item.question}
            
          </strong>
          
        </p>
          </div>
          <div className="answer">
          { <p>{item.answer}</p>}
          </div>
        </div>
        <div className="w-[500px] flex flex-col items-left mt-16"> {/*Comment section*/}
    <h2 className="font-nunito text-2xl text-left">Comments</h2>
    <hr />
        <Comments id={index} item={item}/>
    
    </div>
    <ShowComments id={index} item={item}/>
      
    {/* <div className="nav-buttons">
    <div name="prev" className="prev-button text-gray-300 border-orange-500 hover:text-orange-500" onClick={setShowItem}><FontAwesomeIcon name="prev" className="w-full bg-none" icon={faArrowCircleRight} size="3x"/> </div>
    <button name="next" className="next-button text-gray-300 border-orange-500 hover:text-orange-500" onClick={setShowItem}><FontAwesomeIcon className="border-orange-500" icon={faArrowCircleLeft} size="3x" />  </button>
    </div> */}
    <div className="nav-buttons">
    <FontAwesomeIcon name="prev" onClick={setShowItem} className="hover:text-orange-500 text-gray-100 border-4 bg-orange-500 rounded-full" icon={faArrowCircleLeft} size="3x"/>    
    <FontAwesomeIcon name="next" onClick={setShowItem} className="hover:text-orange-500 text-gray-400" icon={faArrowCircleRight} size="3x" />  
    </div>
    </div>   
       
            
            )
          })

        
         function setShowItem(event){
          // console.log("clicked", event.target.getAttribute('name'))
          
            if(event.target.getAttribute('name')==="next") {
              // console.log('next')
              if(count===setQuizItems.length-1){
                setCount(0)
              }
              else setCount(prev => prev+1)}
            else if(event.target.getAttribute('name')==="prev") {
              // console.log("prev")
              if(count===0) setCount(setQuizItems.length-1)
              else setCount(prev => prev-1)}
          
         }
        
    //      if(!style.flipped){
    //       setStyle(prev => {
    //           return{flipped:!prev.flipped, styles:{visibility: "hidden"}}
    //       })
    //   }
    //   else{
    //       setStyle(prev => {
    //           return{flipped:!prev.flipped, styles:{}}
    //       })
    //   }
//   props.getStyle(isFlipped)//////////////////////////////////////////////////////////////////////////////
  function flipCard(){
    if(!isFlipped.flipped){
        setIsFlipped(prev => {
            return{flipped:!prev.flipped, styles:{transform: "rotateX(180deg)"}}
        })
    }
    else{
        setIsFlipped(prev => {
            return{flipped:!prev.flipped, styles:{}}
        })
    }
  }

  return (
    <>
    <div className="font-nunito text-3xl text-center mt-10">Flashcards Deck</div>
    <div className="invisible"><Sidebar/></div>
    <div>{setQuizItems[count]}</div>
    
    </>
  );
        }
}