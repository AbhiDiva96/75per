import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

const Footer = () => {
  const [showCompanyList, setShowCompanyList] = useState(false);
  const [showLegalList, setShowLegalList] = useState(false);

  const toggleCompanyList = () => setShowCompanyList(!showCompanyList);
  const toggleLegalList = () => setShowLegalList(!showLegalList);

  const isExpanded = showCompanyList || showLegalList;

  return (
    <div className={`footer ${isExpanded ? 'expanded' : ''}`}>
      <div className='footer-content'>
        <div className='md:flex'>
          <div className='md:w-1/6 md:items-center md:flex'>
            <span className="text-2xl font-semibold text-black">
              75%
            </span>
          </div>
          <div className='md:w-5/6 justify-evenly gap-8 md:gap-0 md:flex'>
            <div className='md:w-1/6 my-2'>
              <p 
                className='text-black font-semibold text-md mt-8 block w-auto md:mt-0 cursor-pointer'
                onClick={toggleCompanyList}
              >
                Company
              </p>
              <ul className={`text-gray-700 py-4 toggle-list ${showCompanyList ? 'show' : ''}`}>
                <li className='py-1 cursor-pointer'>About Us</li>
                <li className='py-1 cursor-pointer'>Contact Us</li>
                <li className='py-1 cursor-pointer'>FAQ</li>
              </ul>
            </div>
            <div className='md:w-2/6 my-2 w-full text-black xl:flex justify-center font-semibold text-md lg:text-lg xl:text-md'>
              Copyright @ 75%
            </div>
            <div className='md:w-1/6 my-2'>
              <p 
                className='text-black font-semibold w-auto block cursor-pointer'
                onClick={toggleLegalList}
              >
                Legal Pages
              </p>
              <ul className={`text-gray-700 py-4 toggle-list ${showLegalList ? 'show' : ''}`}>
                <li className='py-1 cursor-pointer'>Privacy Policy</li>
                <li className='py-1 cursor-pointer'>Terms and Conditions</li>
                <li className='py-1 cursor-pointer'>Cookie Policy</li>
              </ul>
            </div>
            <div className='w-1/6 my-2'>
              <div className='md:justify-end'>
                <a href="https://github.com/AbhiDiva96/75per">
                  <GitHubIcon className='cursor-pointer mr-4'/>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-062231198/">
                  <LinkedInIcon className='cursor-pointer'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
