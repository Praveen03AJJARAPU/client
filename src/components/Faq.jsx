import { faq, flex, selectedFaq } from "../constants";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { useState } from 'react';

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null)
    const [selected, setSelect] = useState(0)  
    return (
        <div>
            <h2 className="text-xl text-center">Frequently Asked <span className="text-dBlue">Questions</span></h2>
            <div className="flex gap-16 justify-center">
                <div className="flex flex-col gap-5 text-sm items-center">
                    {selectedFaq.map((select, id) => (
                        <p onClick={() => setSelect(id)} className={`${selected == id ? 'text-dBlue shadow-lg shadow-slate-300' : 'border-2  text-slate-600'} py-4 rounded-md px-10 text-center font-semibold w-[250px]`}>{select}</p>
                    ))}
                </div>
                <div className="w-[900px]">
                    {faq.map((f, id) => (
                        <div key={id} className="mb-10">
                            <div className={`${flex} items-start gap-4`} onClick={() => setOpenFaq(id)}> 
                                <p className={`${openFaq == id ? 'text-dBlue' : ''} text-lg font-semibold`}>{f.question}</p>
                                {openFaq == id ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                                <p className={openFaq == id ? 'block ml-4 mt-10 text-sm' : 'hidden'}>{f.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Faq;