import logo from '../assets/logo.png.png'
import { IoChevronDownOutline } from "react-icons/io5";
import { flex } from '../constants';

function Nav() {
  
  return (
    <div>
      <div className="bg-[#1A73E826] font-medium text-center py-2">
        <p>
          Navigate your ideal career path with tailored expert advice
          <span className="ml-3 text-dBlue">Contact Expert</span>
        </p>
      </div>
      <div className="my-2">
        <div className={`${flex} justify-between mx-10`}>
          <div className={`${flex} gap-3`}>
            <img src={logo} alt="logo_img" />
            <div
              className={`${flex} bg-dBlue text-white px-3 py-2 rounded-lg gap-1`}
            >
              <button>Courses</button>
              <IoChevronDownOutline />
            </div>
          </div>
          <div className={`${flex} gap-8`}>
            <p>Refer & Earn</p>
            <p>Resources</p> <p>About us</p>
            <a href='https://home.accredian.com/login' className="px-4 py-2 rounded-lg bg-[#94A3B833]">Login</a>
            <a href='https://trial.accredian.com/' className="px-4 py-2 text-white rounded-lg bg-dBlue">Try for free</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav