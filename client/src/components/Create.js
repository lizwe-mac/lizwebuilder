import React from 'react'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Create = () => {
    const {user} = UserAuth()
    
    const [date, setDate] = useState(Date.now())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [target, setTarget] = useState('')
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [gofundme, setGofundme] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [file, setFile] = useState('')
    const [response, setResponse] = useState()
    const [error, setError] = useState()
    // console.log('user', user.email)
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
              body: JSON.stringify({ 
                id: user.email,
                date: date,
                title: title,
                description: description,
                category: category,
                target: target,
                socials: {
                    twitter:twitter,
                    facebook: facebook,
                    whatsapp: whatsapp,
                    gofundme: gofundme,
                },
                file: file
                
               })
          
          };
          fetch('http://localhost:4005/create-campaign', requestOptions)
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
    <div className='font-nunito w-[600px]'>
        <h3 className='ml-16 mt-16 text-2xl font-semibold'>Create Campaign</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-16 text-gray-500 font-medium">
            <label htmlFor="date">Date</label>
            <input className='border-[1px] border-orange-300 rounded-md p-2' onChange={(e) => setDate(e.target.value)} type="date" name="date" id="" placeholder='DD/MM/YYYY' />
            <label htmlFor="title">Title</label>
            <input className='border-[1px] border-orange-300  rounded-md p-2' onChange={(e) => setTitle(e.target.value)} type="text" name='title'placeholder='Title of your campaign'/>
            <label htmlFor="description">Description</label>
            <textarea border-orange-300 className='border-[1px] border-orange-300 rounded-md p-2 h-16' onChange={(e) => setDescription(e.target.value)} type="text" name='description'/>
            <label htmlFor="category">Category</label>
            <input border-orange-300 className='border-[1px] border-orange-300 rounded-md p-2' onChange={(e) => setCategory(e.target.value)} type="text" />
            <label htmlFor="target">Targets</label>
            <textarea border-orange-300 className='border-[1px] border-orange-300 rounded-md p-2 h-24' onChange={(e) => setTarget(e.target.value)} type="text" name='target' />
            <label htmlFor="">Socials</label>
            <div className='flex flex-col gap-2 p-5 w-full border-2'>
                
                <div className='flex gap-2 items-center w-full'>
                    <span><label htmlFor="">Twitter</label></span><span className='w-2/4'><input className='border-[1px] border-orange-300 rounded-md p-2 w-full' onChange={(e) => setTwitter(e.target.value)} type="url" /></span>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <span><label htmlFor="">Facebook</label></span><span className='w-2/4'><input className='border-[1px] border-orange-300 rounded-md p-2 w-full' onChange={(e) => setFacebook(e.target.value)} type="url" /></span>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <span><label htmlFor="">WhatsApp</label></span><span className='w-2/4'><input className='border-[1px] border-orange-300 rounded-md p-2 w-full' onChange={(e) => setWhatsapp(e.target.value)} type="url" /></span>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <span><label htmlFor="">GoFundMe</label></span><span className='w-2/4'><input className='border-[1px] border-orange-300 rounded-md p-2 w-full' onChange={(e) => setGofundme(e.target.value)} type="url" /></span>
                </div>
            </div>
            <label htmlFor="photo">Upload Notes</label>
            <input onChange={(e) => setFile(e.target.value)} className='border-[1px] border-orange-300 rounded-md p-2' type="file" />
            {error && <h3 className='text-red-500'>Unable to process request</h3>}
            <button className='border-[1px] bg-orange-600 text-white rounded-md p-2'>Save</button>
        </form>
    </div>
  )
}

export default Create