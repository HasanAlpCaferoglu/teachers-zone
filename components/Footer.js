import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-20 w-screen left-0 bottom-0 h-auto flex justify-between items-center bg-[#0b4961] text-[#c4c6c9] xl:fixed">
      <div className='m-3'>
        <h1 className='text-sm xl:text-md'>Created by Hasan Alp Caferoglu © 2022</h1>
      </div>
      <div className="flex space-x-5 m-3 mr-10 text-sm xl:text-md ">
        <a href="https://github.com/HasanAlpCaferoglu" target="_blank" rel="noreferrer"> <FaGithub /> </a>
        <a href="https://twitter.com/caferoglu_alp" target="_blank" rel="noreferrer"> <FaTwitter /> </a>
        <a href="https://www.linkedin.com/in/hasanalpcaferoglu/" target="_blank" rel="noreferrer"> <FaLinkedinIn /> </a>
        <a href="https://www.instagram.com/alp.caferoglu/" target="_blank" rel="noreferrer"> <FaInstagram /> </a>
      </div>
    </footer>
  );
}

export default Footer;
