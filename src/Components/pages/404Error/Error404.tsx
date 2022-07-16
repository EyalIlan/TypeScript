import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Error404.css'
type Props = {}

export default function Error404() {


  const navigate = useNavigate()

  const ReturnToSaveHaven = () =>{

    navigate('/')

  }
  
  return (
    <div id='errorbackround' className='screen flex justify_center align_center'>
        <div>
          <h1 className='title'>404 page</h1>
          <button onClick={ReturnToSaveHaven} className="btn btn_primary mediumText">return to main page</button>
        </div>
    </div>
  )
}