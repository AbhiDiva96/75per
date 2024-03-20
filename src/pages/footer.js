import React from 'react'
import './footer.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function footer() {
  return (
     <div className='footer'>
      <div className="fram">

      <div className="github">
         <a href="https://github.com/AbhiDiva96/75per ">
          <GitHubIcon/>
         </a>
        </div>

     <div className="founder">
      <h4>made by @AbhiDiva</h4>
      </div>

      <div className="linkedin">
        <a href="https://www.linkedin.com/in/abhishek-kumar-062231198/">
          <LinkedInIcon/>
          </a>
      </div>
      </div>
    </div>
  )
}

export default footer
