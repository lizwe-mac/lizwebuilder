// import { set } from "mongoose";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

const Comments = (props) => {

  const {user} = UserAuth()

  const [comment, setComment] = useState('')
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  console.log('comment', user.email)

  function handleSubmit(event){
    event.preventDefault()
    setError('')
    try{
        console.log("request has been submitted")
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.id, deck: "js", user: user.email, body: comment
             })
        
        };
        fetch('http://localhost:3005/comment', requestOptions)
            .then(response => response.json())
            .then(data => setResponse(data.msg));
        // document.querySelector('#commentBox').value('')
        // window.location.reload()
    }
    catch (err){
      setError(err)
      console.log("Error", err)
    }
  }

  

  return (
    <div className="mt-5">
      
      <form onSubmit={handleSubmit}  className="flex flex-col items-left gap-3 tr" action="">
        {/* <input
          className="border-2 pl-3 border-orange-600 h-10 rounded-md w-44"
          type="text"
          name="username"
          id=""
          placeholder="username"
        /> */}
        <label htmlFor=""><h3>{props.item.question}:</h3></label>
        {/* {error && <h3>Error</h3>} */}
        <h3 className={error? "text-orange-500":"text-green-500"}>{error? error:response}</h3>
        <input
          id='commentBox'
          onChange={(e) => setComment(e.target.value)}
          className="commentBox border-[1px] align-text-top pl-3 border-orange-500 h-16 rounded-sm w-96"
          type="text"
          name="comment"
          placeholder="Please leave a comment, analysis or question"
        />
        <button className="bg-orange-600 h-8 text-white border-2 w-96 border-orange-500 rounded-sm">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
