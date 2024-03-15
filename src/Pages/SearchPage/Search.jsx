import React from 'react'
import './Search.css'
import TimeshareBar from '../../Components/TimeshareBar/TimeshareBar'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function Search() {
  return (
    <div>
        <NavBar/>
          <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">          
                            <input type="text" placeholder='Resort, destination'/>
                            <input type="number" placeholder='Min price' min={0}/>
                            <input type="number" placeholder='Max price' min={0}/>
                            <input type="number" placeholder='Week' min={1} max={52}/>
                            <button className='btn solid' style={{width:'100%'}}>
                              Search
                            </button>
                    </div>
                </div>
                <div className="listResult">
                    <TimeshareBar/>
                    <TimeshareBar/>
                    <TimeshareBar/>
                    <TimeshareBar/>
                    <TimeshareBar/>
                    <TimeshareBar/>
                    <TimeshareBar/>
                    <TimeshareBar/>
                </div>
          </div>
          
      </div>
      <Footer/>
    </div>
  )
}
