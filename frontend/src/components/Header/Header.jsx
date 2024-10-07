import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h1>Good <span>Food.</span></h1>
                <h1>Good <span>Mood.</span></h1>
<h3>Delicious <span>Food</span> at Your Doorstep.</h3>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients, 
                delicious flavour and  great taste.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
