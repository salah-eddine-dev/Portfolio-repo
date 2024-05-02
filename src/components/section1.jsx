import React, { useContext } from 'react'
import { InfoContext } from '../pages/home'

function Section1() {

    

    return (
        <div className='container d-flex align-items-center justify-content-center '>
            <div className='text-white'>
                <h1>Karim chafik</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ea nisi? Assumenda dolores ratione reiciendis quos saepe commodi, officia aspernatur, labore molestiae provident accusamus mollitia, corrupti deleniti nostrum quisquam cum.</p>
            </div>
            <div>
                <img src="images/image.png" className='rounded' alt="" style={{height:'90vh',}} />
            </div>
        </div>
    )
}

export default Section1
