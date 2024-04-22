import '../App.css'
import './header.css'
import teeth from '../assets/teeth.png'
import bgLogo from '../assets/bgLogo.png'
import doctor from '../assets/doctor.png'
const Header = () => {
    return (
        <div className="main ml-[135px] mr-[129px]">
            <div className="mainDemo-page sm:block  md:block lg:flex xl:flex 2xl:flex">
                <div className="main-heading relative">
                    <div>
                        <p className="textColor text-base mt-10
                    " >Highest level of service you can find</p>
                        <h1 className='heading font-bold text-lg md:text-xl lg:text-4xl xl:text-7xl 2xl:text-7xl mt-5'>Let us brighten <br />
                            your smile! </h1>
                    </div>
                    <div className='relative'>
                        <img className='teethLogo absolute ' src={teeth} alt="" />
                        </div>

                    <div className=' mt-12'>
                        <p className='textColor'>We are dental care clinic that helps people to take <br /> care of their health and we</p>
                        <button className='bookBtn  mt-10 border p-3 rounded-full text-white'>Book Services</button>
                    </div>
                </div>
                <div className="block relative ml-8 mt-12">
                    <div className='bg-logo ml-32 mt-10 relative'>
                        <img className='w-4/5' src={bgLogo} alt="" />
                    </div>
                    <div className='doctor absolute w-4/5 mt-24'>
                        <img src={doctor} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

