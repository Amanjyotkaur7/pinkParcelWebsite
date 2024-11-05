import React from 'react';
import './Nav.css';
import './Global.css';
function Nav(){
    return(
        <>
        <div className='searchicon'> 
        <i class="bi bi-search-heart fs-1"></i>
          <h1>Pink Parcel</h1>
          <i class="bi bi-bag-heart fs-1"></i>
          </div>
        
        <nav className = 'navbar'>
            
            <ul className='nav-list'>
            <span><a href='#Home'>Home</a></span>
            <span><a href='#Subscriptions'>Subscriptions</a></span>
            <span><a href='#createyourownbucket'>Create Your Own Bucket</a></span>
            <span><a href="#contact">Contact</a></span>
            </ul>

            </nav>
            </>
            
    )
};

export default Nav;

