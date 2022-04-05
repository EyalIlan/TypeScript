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
    <div id='errorbackround' className='primary_color flex center flex_col'>
        <h1>404 page</h1>
        <button onClick={ReturnToSaveHaven}>return to main page</button>
    </div>
  )
}