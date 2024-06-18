import React, { useState } from 'react';
import Header from '../../pages/header';
import './fstlecture.css';
import NoResultsFound from '../noResultsFound/index.js'

// Import images
import ec from '../../assets/ec.jpg';
import mtwo from '../../assets/mtwo.jpg';
import me from '../../assets/me.jpg';
import ee from '../../assets/eicseng.jpg';
import et from '../../assets/et.jpg';
import elceng from '../../assets/ecleng.jpg';
import ep from '../../assets/ep.jpg';
import mone from '../../assets/mone.jpg';
import pps from '../../assets/pps.jpg';
import ai from '../../assets/ai.jpg';
import ssi from '../../assets/ssi.jpg';
import ssii from '../../assets/ssii.jpg';
import {FaMagnifyingGlass } from 'react-icons/fa6'

function Lecture() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Array of lecture items
  const lectureItems = [
    { title: 'Engineering Physics', image: ep, link: 'https://www.youtube.com/watch?v=2Eqe7jPv-Bw&list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca' },
    { title: 'Engineering Mathematics-I', image: mone, link: 'https://www.youtube.com/watch?v=VH6N7inCy9M&list=PL5Dqs90qDljVTfWmYSWjD99kcqdkI5zMM' },
    { title: 'Electrical Engineering', image: elceng, link: 'https://www.youtube.com/watch?v=XdpqKF2g9PA&list=PL-JvKqQx2Atc61XCOHXm_ACNkOkAm3yO4' },
    { title: 'PPS', image: pps, link: 'https://www.youtube.com/watch?v=V7HBrSMEidc&list=PL-JvKqQx2AtdDyHzdsB1EzZuGCZN-3ucI' },
    { title: 'Artificial Intelligence', image: ai, link: 'https://www.youtube.com/watch?v=4ORelX5MDcY&list=PLUwI7zx-CMG1_OxCdn6ceo-YJOwIFzB_u' },
    { title: 'Soft Skill-I', image: ssi, link: 'https://www.youtube.com/watch?v=04A4PRikkCY&list=PL-JvKqQx2AteLNR8UO4UQiDmQF-Wotu5G' },
    { title: 'Engineering Chemistry', image: ec, link: 'https://www.youtube.com/watch?v=GmhI0QzGTb4&list=PLtxdcwCcWWQ3O1VE8t6KFAFvxMg4GgzNx' },
    { title: 'Engineering Mathematics-II', image: mtwo, link: 'https://www.youtube.com/watch?v=0THzxpXzxfA&list=PL5Dqs90qDljVlWQBPaa6FIsoF2CodPiQJ' },
    { title: 'Electronics Engineering', image: ee, link: 'https://www.youtube.com/watch?v=_r4YM5CjgQo&list=PLkojphh8hBnbk1YiRdV87sxhGf3l7doGp' },
    { title: 'Mechanical Engineering and Mechatronics', image: me, link: 'https://www.youtube.com/watch?v=lMdwCZPJfj0&list=PL-JvKqQx2Atd9ffOCQTTrzePu1K12Gf6K' },
    { title: 'Emerging Technology', image: et, link: 'https://www.youtube.com/watch?v=27_3ilfvlck&list=PLaGBxvvw_eMWvXPgdYd444ih2wp1QxZ_Z' },
    { title: 'Soft Skill-II', image: ssii, link: 'https://www.youtube.com/watch?v=TQWspT4kTPc&list=PL8nHpqzOrbFAvPeGY7_PJyoO4xFMs7a8a' },
    // Add more items here
  ];

  // Filtered lecture items based on search query
  const filteredItems = lectureItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="lecturetrd">
        <h1>1st year lecture</h1>
      </div>
      {/* Input field for search */}
      <div class='inputDiv'>
      <FaMagnifyingGlass className='left'/>

        <input
          type='text'
          className='inputField'
          placeholder='Search For Lecture ...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Display filtered lecture items */}
      {  filteredItems.length !== 0 ? <div className="container">
        {filteredItems.map((item, index) => (
          <div className="box" key={index}>
            <div className="upper">
              <img src={item.image} alt={item.title} />
            </div>
            <span className="text-box-in">{item.title}</span>
            <a href={item.link}>View Content</a>
          </div>
        ))}
      </div> : <NoResultsFound /> }
    </div>
  );
}

export default Lecture;
