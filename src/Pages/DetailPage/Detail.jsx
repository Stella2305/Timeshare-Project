import React, { useState } from 'react'
import './Detail.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import SearchBar from '../../Components/SearchBar/SearchBar';

export default function Detail() {
  const [image, setImage] = useState('/assets/Images/timeshares1.jpg');

  const handleImageClick = (imgLink) =>{
    setImage(imgLink);
  }
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const Box1 = () => {
    return (
      <div className='FeaturelDiv'>
        <h3>Kitchen</h3>
          <ul className="split-list">
            <li>Coffee maker</li>
            <li>Dishwasher</li>
            <li>Microwave</li>
            <li>Oven</li>
            <li>Refrigerator (full-size)</li>
            <li>Stovetop</li>
            <li>Toaster</li>
          </ul>
          <h3>Entertainment</h3>
          <ul className="split-list">
            <li>DVD player</li>
            <li>Internet access</li>
            <li>Radio or music player</li>
            <li>Telephone</li>
            <li>TV</li>
          </ul>
          <h3>Features</h3>
          <ul className="split-list">
            <li>Air conditioning</li>
            <li>BBQ</li>
            <li>Patio or balcony</li>
            <li>Washer and dryer (in-unit)</li>
          </ul>
          <h3>Policies</h3>
          <ul className="split-list">
            <li>No pets</li>
            <li>No smoking</li>
          </ul>
    </div>
    )
    
  };
  
  const Box2 = () => {
    return(
      <div className='detailDiv'>
        <ul className='splitList'>
          <li>
            <span>Week</span> 12
          </li>
          <li><span>Bedroom</span> 2</li>
          <li><span>Building/Unit</span> Resort</li>
          <li><span>Next use</span> 2025</li>
          <li><span>Year Expires</span> 2057</li>
          <li><span>City</span> Lake Buena Vista</li>
          <li><span>Distict</span> Florida</li>
          <li><span>Country</span> USA</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <NavBar/>
      <div className="detailContainer">
        <div className="titleHeader">
          <div className="titleDetail">
            <h1>MARRIOTT'S NEWPORT COAST VILLAS</h1>
            <span>
              <span className='icon'><LocationOnOutlinedIcon/></span>
              <span className="text">Lake Buena Vista, Florida, USA</span>
            </span>
          </div>
          <div className="price">$20,000</div>
        </div>
        <div className="detailWrapper">
          <div className="img-info">
            <div className="imgSlide">
              <div className="mainImg">
                <img src={image} alt="" className='slideMain' />
              </div>
              <div className="option">
                <img src="/assets/Images/timeshares1.jpg" className='slideMini' alt="" onClick={() => handleImageClick('/assets/Images/timeshares1.jpg')} />
                <img src="/assets/Images/timeshares2.jpg" className='slideMini' alt="" onClick={() => handleImageClick('/assets/Images/timeshares2.jpg')} />
                <img src="/assets/Images/timeshares3.jpg" className='slideMini' alt="" onClick={() => handleImageClick('/assets/Images/timeshares3.jpg')} />
                <img src="/assets/Images/timeshares4.jpg" className='slideMini' alt="" onClick={() => handleImageClick('/assets/Images/timeshares4.jpg')} />
                <img src="/assets/Images/timeshares5.jpg" className='slideMini' alt="" onClick={() => handleImageClick('/assets/Images/timeshares5.jpg')} />
                <img src="/assets/Images/timeshares6.jpg" className='slideMini' alt="" onClick={() => handleImageClick('/assets/Images/timeshares6.jpg')} />
              </div>
            </div>
            <div className="infoBox">
              <div className="divClick">
                <div  className="detail"
                      onClick={() => handleButtonClick(1)} style={{ backgroundColor: activeButton === 1 ? 'var(--PrimaryColor)' : 'white',
                                                                    color:  activeButton === 1 ? 'white' : 'var(--PrimaryColor)'}}
                      >
                  Features
                </div>
                <div  className="detail"
                      onClick={() => handleButtonClick(2)} style={{ backgroundColor: activeButton === 2 ? 'var(--PrimaryColor)' : 'white',
                                                                    color:  activeButton === 2 ? 'white' : 'var(--PrimaryColor)'}}
                      >
                  Detail
                </div>
              </div>
              <div className="divInfo">
                {activeButton === 1 && <Box1 />}
                {activeButton === 2 && <Box2 />}
              </div>
            </div>
          </div>
          <div className="offerForm">
              <h1 className="ofTitle">Make Offer</h1>
              <div className="lsItem">          
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone'/>
                <input type="text" placeholder='Additional Detail'/>
                  <label htmlFor="acceptRole" className='role'>
                    <input type="checkbox" name="acceptRole" id="acceptRole" className='acceptRole' />
                    <span>I have seen and acknowledge Timeshare Notice</span>
                  </label>
                <button className='btn solid' style={{width:'100%'}}>
                  Submit
                </button>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
