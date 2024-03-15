import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const nav = useNavigate();

    const searchHandle=()=>{
        nav(`/search`);
    }
  return (
    <div>
        <div className="seachBar" >
            <div className="setContainer">
                <div className="homeText">
                    <h1 className='titlePage'>
                        Plan your vacation with Timeshare
                    </h1>
                    <p className="subTitle">
                        Have a vacation of a lifetime, explore new lands, and capture every moment with your loved ones
                    </p>
                </div>
                <div className="homeCard grid">
                    <div className="searchDiv">
                        <label htmlFor="search">
                            <span className='icon'>
                                <SearchIcon/>
                            </span>
                        </label>
                        <input className='searchInput' type="text" placeholder='Location, resort name' />
                        <button className='btn search'
                                onClick={searchHandle}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p className='mt-4'>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p>
    </div>
  )
}
