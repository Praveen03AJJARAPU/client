import { flex, flexXY } from "../constants"
import hero from '../assets/Hero.png'

function Hero() {
  return (
    <div className={`flex flex-col items-center justify-end mt-16`}>
      <div className={`${flex} gap-20 bg-bgBlue px-10 py-3 rounded-full`}>
        <p>Refer</p>
        <p>Benefits</p>
        <p>FAQs</p>
        <p>Support</p>
      </div>
      <div className={`${flex} px-10 items-start gap-10 rounded-3xl shadow-2xl bg-bgBlue mt-10`}>
        <div className='flex flex-col   gap-16'>
          <div className="font-bold text-7xl">
            <h1>Let's Learn</h1>
            <h1>& Earn</h1>
          </div>
          <p className="text-3xl">
            Get a chance to <br /> win up-to{" "}
            <span className="text-dBlue text-3xl">Rs. 15,000</span>
          </p>
          <button className="bg-dBlue text-white w-max px-10 py-2 rounded-lg">Refer Now</button>
        </div>
        <img src={hero}  alt="hero_img" className="h-full" />
      </div>
    </div>
  );
}

export default Hero