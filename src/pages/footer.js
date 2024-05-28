import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='bg-white text-black p-10'>
        <div className='md:flex'>
            <div className='md:w-1/4'>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            75%
          </span>
            </div>
            <div className='md:w-3/4 justify-evenly md:flex'>
                <div className='md:w-1/3'>
                    <p className='text-black font-bold mt-8 block w-auto md:mt-0'>Company</p>
                    <ul className='text-gray-700 py-4'>
                        <li className='py-1 cursor-pointer'>About Us</li>
                        <li className='py-1 cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='md:w-1/3'>
                <p className='text-black font-bold w-auto block'>Legal Pages</p>
                    <ul className='text-gray-700 py-4 cursor-pointer'>
                        <li className='py-1 cursor-pointer'>Privacy Policy</li>
                        <li className='py-1 cursor-pointer'>Terms and Conditions</li>
                        <li className='py-1 cursor-pointer'>Cookie Policy</li>
                    </ul>
                </div>
                <div className='w-1/3'>
            <div className='md:justify-end'>
            <a href="https://github.com/AbhiDiva96/75per"><GitHubIcon className='cursor-pointer mr-4'/></a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-062231198/"><LinkedInIcon className='cursor-pointer'/></a>
            </div>
        </div>
            </div>
        </div>
        <div className='mt-10 text-black xl:flex justify-center font-semibold text-sm lg:text-lg xl:text-md'>Copyright @ 75%</div>
    </div>
  )
}

export default Footer