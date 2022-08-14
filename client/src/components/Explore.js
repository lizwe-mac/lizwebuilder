import React, { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
import AddBtn from './AddBtn'
import { Link } from 'react-router-dom'
import facebook from "../assets/fb.svg"
import twitter from "../assets/twitter.svg"
import whatsapp from "../assets/whatsapp.svg"
import dollar from "../assets/dollar.svg"

import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Explore = (props) => {
    const [campaigns, setComments] = useState()
    const [show, setShow] = useState(false)
    const [image, setImage] = useState('')

    const date = new Date()
    console.log('date', date)

    function calcDate(commentDate){
     const dateDiff = Math.floor((date - new Date(commentDate))/3600000) 
     if (dateDiff>23) return `${Math.floor(dateDiff/24)} days ago`
     else if (dateDiff<1) return `${Math.floor((date - new Date(commentDate))/60000)} minutes ago` 
     else return `${dateDiff} hours ago`
    }

    function changeImage(){
      return 'https://source.unsplash.com/random/400x500/?activist'
    }

    function toggleShow(){
      setShow(prev => !prev)
      
    }
    console.log('show', show)

    useEffect(()=>{
      
       fetch('http://localhost:4005/get-campaign')
        .then((response) => response.json())
        .then((data) => {
    const campaigns = data.map(campaign => {
      
        return (
          <div className='pb-2 font-nunito mt-10 flex gap-0 border-2 shadow-md rounded-lg w-[800px] ml-64 ' key={campaign._id}>
            <div className=''>
                <img src={changeImage()} alt="" />
            </div>
            <div className=' w-full p-5'>
            <div className='flex mb-3'>Campaign by <span className='text-left mr-auto ml-1 text-orange-500'>{campaign.id}</span><span className='text-right font-light text-[10px]'>{calcDate(campaign.createdAt)}</span></div>
            <div className='text-md text-gray-500'>Banner</div>
            <hr />
            <div className='text-lg'>{campaign.title}</div>
            <div className='text-md text-gray-500'>Category</div>
            <hr />
            <div className='text-lg'>{campaign.category}</div>
            <div className='text-md text-gray-500'>Summary</div>
            <hr />
            <div className='text-lg'>{campaign.description}</div>
            {/* <div> dropdown panel */}
            {show && <div>
                <div className='text-md text-gray-500'>Goals</div>
                <hr />
                <div className='text-lg'>{campaign.target}</div>
                <div className='text-md text-gray-500'>Notes</div>
                <hr />
                <div className='text-lg text-semibold'>None</div>
                <div className='text-md text-gray-500'>Socials</div>
                <div className='flex gap-3'>
                    <a href={campaign.socials.twitter}><button className="border-[1px] rounded-3xl p-2 border-sky-600">Twitter</button></a>

                    <a href={campaign.socials.facebook}><button className="border-[1px] rounded-3xl p-2 border-sky-600">Facebook</button></a>
                    <a href={campaign.socials.whatsapp}><button className="border-[1px] rounded-3xl p-2 border-sky-600">WhatsApp</button></a>
                    <a href={campaign.socials.gofundme}><button className="border-[1px] rounded-3xl p-2 border-sky-600">Donate</button></a>
                </div>

            </div>}
            <hr className="text-orange-600"/>
            <div className='flex items-center mt-5'>
                <div className='mr-auto flex gap-1'><span><FontAwesomeIcon className='text-orange-500 cursor-pointer' icon={faStar} size="lg"/></span><span><h4>13</h4></span></div>
                <div className='mr-auto flex gap-1'><span className='cursor-pointer'><FontAwesomeIcon className='text-orange-500 cursor-pointer' icon={faShareSquare} size="lg"/></span><span><h4>Share</h4></span></div>
                <div onClick={toggleShow}><button className='border-[1px] border-orange-400 text-orange-500 p-1 mr-3'>Read more</button></div>
                <Link to="/login">
                <div><button className='bg-orange-500 text-white p-1 w-16'>Join</button></div>
                </Link>
            </div>

            </div>
            
          </div>

          )
    })
    setComments(campaigns)
  }).catch(err => console.log(err));

    }, [])

    
    
  return (
    <div className="">
      <h3 className="text-3xl font-nunito ml-10 mt-16">Recent Campaigns</h3>
      <hr />
      <div className="flex flex-col gap-3 fixed left-5 top-56">
        <h3 className="font-nunito text-2xl border-[1px] border-orange-500 cursor-pointer bg-orange-500 rounded p-1 w-36 text-center">Social</h3>
        <h3 className="font-nunito rounded text-2xl border-[1px] border-orange-500 hover:bg-orange-500 cursor-pointer p-1 w-36 text-center">Economic</h3>
        <h3 className="font-nunito rounded cursor-pointer text-2xl border-[1px] border-orange-500 p-1 w-36 hover:bg-orange-500 text-center">Political</h3>
        
      </div>
      {campaigns}

      <div className="fixed right-20 bottom-20 border-[2px] border-orange-500 text-orange-500 h-24 w-24 rounded-full p-2 shadow-md flex justify-center items-center">
      <Link to="/create-campaign">
        <FontAwesomeIcon icon={faAdd} size="3x" />
      </Link>
      </div>
    </div>
  )
}

export default Explore