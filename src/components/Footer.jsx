import footerLogo from '../assets/footerLogo.png';
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    const links = [
        { name: "Home", url: "#" },
        { name: "About", url: "#" },
        { name: "Our Services", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "Blogs", url: "#" }
    ];

    return (
        <div>
            <div className={`footer bg- mt-36 `} style={{ background: '#F9876E' }}>
                <div className='footerImg flex justify-center items-center pt-20 mt-10'>
                    <img src={footerLogo} alt="" className='' />
                    <h2 className='font-extrabold text-xl text-white ml-3'>Dental Demo</h2>
                </div>

                <div className='footerLinks'>
                    <ul className='flex items-center justify-center text-white text-base font-normal mt-20 '>
                        {links.map((link, index) => (
                            <li key={index} className='ml-[56px]'>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='boder-b border-solid ml-[135px] mr-[129px] mt-11'>
                    <hr />
                </div>

                <div className='footerPara text-sm items-center text-white text-center mt-6'>
                    You can contact here
                </div>

                <div className=' flex justify-center items-center mt-8 pb-12'>
                    <div className='contact flex justify-center items-center '>
                        <div className='contactGmail flex text-white border  w-[280px] p-2 rounded-full'>
                            <CiMail className='mt-1 ml-2' />

                            <p className='outline-none bg-transparent text-sm text-white w-[250px] ml-2'>operations@Dental Demo.com </p>
                        </div>
                        <div className='contactPhone'></div>
                    </div>

                    <div className='ml-4 '>
                        <div className='contactGmail flex border  w-[144px] p-2 rounded-full'>
                            <div className='w-10 h-6 bg-white p-1 rounded-full '><FaPhoneVolume className={''} style={{ color: '#F9876E' }} /></div>

                            <p className='outline-none bg-transparent text-sm text-white w-[250px] ml-2'><a>Dubai, UAE</a></p>
                        </div>
                        <div className='contactPhone'></div>
                    </div>
                </div>
            </div>
            <div className="socialLinks mt-5 pb-5 flex sm:ml-16 md:ml-16 lg:ml-[200px] xl:ml-[500px] 2xl:ml-[650px]">
                <div className='text-xs font-bold'>
                    &copy; Dental Demo 2024
                </div>

                <div className='flex sm:ml-[300px] md:ml-[400px] lg:ml-28 xl:ml-[500px] 2xl:ml-[500px] gap-8'>
                    <FaFacebook className='text-[28px]' />
                    <FaInstagram className='text-[28px]' />
                    <FaYoutube className='text-[28px]' />
                </div>

            </div>
        </div>
    );
}

export default Footer;
