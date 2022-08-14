import React, { useState } from 'react'
import { useEffect } from 'react'
import Comments from './Comments'

const ShowComments = (props) => {
    const [comments, setComments] = useState()
    const [showComments, setShowComments] = useState()
    const date = new Date()
    console.log('date', date)
    function calcDate(commentDate){
     const dateDiff = Math.floor((date - new Date(commentDate))/3600000) 
     if (dateDiff>23) return `${Math.floor(dateDiff/24)} days ago`
     else if (dateDiff<1) return `${Math.floor((date - new Date(commentDate))/60000)} minutes ago` 
     else return `${dateDiff} hours ago`
    }
    useEffect(()=>{
      //  const fetchData = async(req, res)=>{
      //   const response = await fetch('http://localhost:3005/get-comments')
      //   setComments(response.json())
      //  }
      //  fetchData().catch(console.log('error'))
       fetch('http://localhost:3005/get-comments')
  .then((response) => response.json())
  .then((data) => {
    const comments = data.filter(elem => parseInt(elem.id)===parseInt(props.id)).map(comment => {
      console.log('comment id', comment.id)
        return (
          <div className='pb-2 font-nunito' key={comment._id}>
            <div className='flex'><span className='text-left mr-auto text-orange-500'>{comment.user}</span><span className='text-right font-light text-[10px]'>{calcDate(comment.createdAt)}</span></div>
            <div className='text-lg'>{comment.body}</div>
            <hr/>
          </div>
          )
    })
    setComments(comments)
  }).catch(err => console.log(err));

    }, [])

    console.log('comments:', comments)
    console.log("id", props.id)
   
      // const renderComments = comments.map(comment => {
      //   return (
      //   <>
      //     <div><span>{comment.user}</span><span>{comment.createdAt}</span></div>
      //     <div>{comment.body}</div>
      //     <hr/>
      //   </>
      //   )
      // })
    
    
  return (
    <div>
      <h3>Responses</h3>
      <hr />
      {comments}
    </div>
  )
}

export default ShowComments