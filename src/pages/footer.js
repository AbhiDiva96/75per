import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

const Footer = () => {

  return (
    <div className="footer bottom-0 bg-customGrey">
      <div className='footer-content'>
        <div className='sm:flex sm:flex-row justify-evenly flex-col gap-5 sm:gap-0 p-2'>
          <div className='sm:w-1/3 sm:items-center sm:justify-center sm:flex'>
            <span className="text-2xl font-semibold text-black my-4 sm:my-0">
              75%
            </span>
          </div>
            <div className='sm:w-1/3 w-full text-black flex sm:justify-center text-left font-semibold text-md my-4 sm:my-0 lg:text-xl'>
              Copyright @ 75%
            </div>
            <div className='w-1/3 flex text-left sm:justify-center my-4 sm:my-0 items-center'>
              <div className='sm:justify-center'>
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
  )
}

export default Footer;
