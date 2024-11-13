import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

const homePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get your dream place</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at aliquet ex. Praesent ornare pellentesque sapien sed ullamcorper. Donec et nisl tellus. Nulla sed nulla metus. Cras commodo diam ut turpis mollis auctor. Donec blandit ante eu ligula efficitur, quis faucibus justo iaculis.</p>

                <SearchBar />

                <div className="boxes">
                    <div className='box'>
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className='box'>
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className='box'>
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div> 
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default homePage