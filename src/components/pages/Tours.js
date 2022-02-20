import React from 'react'
 import Footer from '../Footer.js'
 import {useLocation} from 'react-router-dom'
import '../Tours.css'
function Tours() {
  const location = useLocation()
  const introduce = location.state.introduce;
  const src=location.state.src;
  console.log(src)
  return (
          <>
              <div className='tour-container'>
                <img className='tour-img' src={src}/>
                <h1 className='heading-introduce'>INTRODUCE</h1>
                <p className='tour-introduce'>{introduce}</p>
              </div>
             <Footer/>
          </>
  )
}

export default Tours