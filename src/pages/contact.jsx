import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const input = useRef()


    const navigate = useNavigate();

    const handeGoBack = ()=>{
        navigate('/')
    }
    return (
        <div>
            <button className='btn btn-danger ' onClick={()=>{handeGoBack()}}>Go Bavk</button>
        </div>
    )
}

export default Contact
