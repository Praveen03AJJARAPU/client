import icon1 from '../assets/add_friend.png';
import icon2 from '../assets/notesIcon.png';
import icon3 from '../assets/walletIcon.png';
import { flex, referPara } from '../constants';

function Refer() {
  const icons = [icon1, icon2, icon3]
  return (
    <div className={`bg-bgBlue py-10 ${flex} flex-col gap-16 justify-center`}>
      <p className='font-semibold text-xl'>How Do I <span className='text-dBlue'>Refer?</span></p>
      <div className='flex justify-center items-center gap-16 text-center'>

        {referPara.map((p, id) => (
          <div key={id} className='w-[250px] gap-5 flex rounded-[350px] shadow-2xl p-12 font-medium   flex-col items-center'>
                <img src={icons[id]} alt="img_icons" />
                <p className='text-sm'>{p}</p>
            </div>
        ))}
      </div>
      <button className='bg-dBlue px-10 py-2 rounded-lg text-white'>Refer Now</button>
    </div>
  )
}

export default Refer