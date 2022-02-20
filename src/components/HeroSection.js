import React, { useState } from 'react'
import {Button} from './Button.js'
import './HeroSection.css'
import '../App.css'
function HeroSection() {
  const videos=['/videos/video-1.mp4','/videos/video-2.mp4','/videos/video-3.mp4','/videos/video-4.mp4']
  const [video,setVideo]=useState(videos[3])
  const handleChangeVideo=()=>{
        let current=Math.floor(Math.random()*videos.length)
        setVideo(videos[current])
  }
  return (
    <div className='hero-container'>
            <video src={video} autoPlay loop muted></video>
            <h1>TRAVEL IS WAITING FOR YOU</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button>
                <button  style={{cursor:"pointer"}} onClick={handleChangeVideo}>CHANGE<i className="fa-solid fa-plane-departure fa-2x"></i></button>
            </div>
    </div>
  )
}

export default HeroSection