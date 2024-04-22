import checking from '../assets/checking.png';
import './Dentel.css';
import bgColor from '../assets/bgColor.png'
const Dentel = () => {
    return (
        <div className="ml-[135px] mr-[129px]">
            <h2 className="heading justify-center text-center text-4xl font-semibold mt-20">Welcome to Dental Demo!</h2>
            <p className="textColor text-center mt-4">Highest level of service you can find</p>
            <div className="dentelDemo flex">
                <div className="dentelImg relative mt-20 ">
                    <div className="boxsize">
                        <img src={bgColor} alt="" />
                    </div>
                    <div className="checkingImg absolute">
                        <img src={checking} alt="" />
                    </div>
                </div>
                <div className='ml-14 mt-20'>
                    <p className='textColor text-sm'>Our focus is on your overall well being and helping you achieve <br /> optimal health and esthetics. We provide state-of-the-art <br /> dental care in a comfortable.</p>
                    <div className='mission mt-4'>
                        <h2 className='headingColor font-medium'>Our Mision</h2>
                        <p className='textColor mt-6 text-sm'>Has provided a high class facility for the treatment</p>
                    </div>
                    <div className="clinick mt-4">
                        <h2 className='headingColor font-medium'>Professionals in our Clinick</h2>
                        <p className='textColor text-sm mt-6'>Has provided a high class facility for the treatment</p>
                    </div>
                    <button className='bgBtn text-white font-semibold font-sm p-3 rounded-full mt-6'>More About Us</button>
                </div>
            </div>
        </div>
    )
}

export default Dentel
