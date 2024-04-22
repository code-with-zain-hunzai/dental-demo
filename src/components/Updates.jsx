import './Updates.css'
import cal from '../assets/cal.png'
import location from '../assets/location.png'
import calender from '../assets/calender.png'
const Updates = () => {
    return (
        <div className="updates mt-14">
            <div className="ml-[135px] updatesService grid pt-12 pb-8 text-white">
                <div className="Emergency  sm:border-none md:border-none lg:border-none xl:border-r-2  2xl:border-r-2 flex-grow">
                    <img src={cal} alt="" />
                    <h2 className='text-xl mt-7'>Emergency Call</h2>
                    <p className='mt-4'>At vero eos et accusamus et iusto odio <br />
                        dignissimos ducimus qui blanditiis.</p>
                    <button className='mt-3 border-b-2 bg-transparent'> Call us now</button>
                </div>
                <div className="location sm:border-none md:border-none lg:border-none xl:border-r-2  2xl:border-r-2  flex-grow ml-0 lg:ml-0 xl:ml-8 2xl:ml-8">
                    <img className='mt-2' src={location} alt="" />
                    <h2 className='text-xl mt-7'>Where Are We?</h2>
                    <p className='mt-4'>At vero eos et accusamus et iusto odio <br />
                        dignissimos ducimus qui blanditiis.</p>
                    <button className='mt-3 border-b-2 bg-transparent'> See on map</button>
                </div>
                <div className="openingTime  sm:border-none md:border-none lg:border-none xl:border-r-2  2xl:border-r-2 flex-grow  ml-0 lg:ml-0 xl:ml-8 2xl:ml-8">
                    <img className='mt-2' src={calender} alt="" />
                    <h2 className='text-xl mt-7'>Opening Hours</h2>
                    <div className='flex justify-between mr-20'>
                        <div>
                            <p>Mon - Fri:</p>
                        </div>
                        <div>
                            <span className="">8:00am - 7:00pm</span>
                        </div>

                    </div>
                    <div className='flex justify-between mr-20'>
                        <div><p>Saturday:</p></div>
                        <div> <span className='textLeft'>9:00am - 6:00pm</span></div>
                    </div>
                    <div className='flex justify-between mr-20 '>
                        <p>Sunday:</p>
                        <span className='textLeft'>Closed</span>
                    </div>
                    <button className='mt-3 border-b-2 bg-transparent'> Call us now</button>
                </div>
            </div>
        </div>

    )
}

export default Updates
