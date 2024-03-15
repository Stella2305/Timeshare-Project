import React from 'react'
import './TimeShareBar.css'
import SearchBar from '../SearchBar/SearchBar'
import SingleBedIcon from '@mui/icons-material/SingleBed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

export default function TimeshareBar() {
  const nav= useNavigate();

  const linkDetail = ()=>{
    nav(`/search/detail`);
  }
  return (
    <div>
        <div className="timeshareBar">
            <img 
                src="/assets/Images/background3.jpg" 
                alt="" 
                className="tbImg"
            />
            <div className="tbDesc">
              <h1 className="tbId">6069535</h1>
              <h1 className="tbTitle">Disney’s Beach Club Villas</h1>
              <span className="tblocation">Palm Desert, California</span>
              <span className="tbFeatures">
                <span className="icon"><SingleBedIcon/></span> 
                <span className="text">Bed: 2</span>
                <span className="icon"><CalendarMonthIcon/></span> 
                <span className="text">Week: 12</span>
              </span>
              <span className="tbRating">
                <span className="text" style={{marginRight:5}}>Rating:</span>
                <span className="icon"><Rating name="read-only" value={5} readOnly /></span>
              </span>
            </div>
            <div className="tbDetails">
              <div className="tbPrice">
                <span>$2000</span>
              </div>
              <div className="tbBtn">
                <button className="btn solid"
                        onClick={linkDetail}>
                  Detail
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}
