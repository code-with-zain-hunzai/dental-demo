import toothProtection from '../assets/toothProtection.png';
import DentalImplant from '../assets/DentalImplant.png';
import DentalCare from '../assets/DentalCare.png';
import teethWhitening from '../assets/teethWhitening.png';
import DentalCalculus from '../assets/DentalCalculus.png';
import prevention from '../assets/prevention.png';
const Services = () => {
  const dentalTopics = [
    {
      id: 1,
      className: "toothProtection",
      image: { src: toothProtection, alt: "Tooth Protection" },
      title: "Tooth Protection",
      description: "There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics"
    },
    {
      id: 2,
      className: "DentalImplants",
      image: { src: DentalImplant, alt: "hello" },
      title: "Dental Implants",
      description: `The implant fixture is first placed, so that it
      is likely to osseointegrate, then a dental
      prosthetic is added`
    },
    {
      id: 3,
      className: "DentalCare",
      image: { src: DentalCare, alt: "dental care" },
      title: "Dental Care",
      description: `We provide a wide range of oral health
      care services to patients, from routine
      checkups to fitting braces`
    },
    {
      id: 4,
      className: "TeethWhitening",
      image: { src: teethWhitening, alt: "teethWhite" },
      title: "Teeth Whitening",
      description: `Bleaching methods use carbamide
      peroxide which reacts with water to form
      hydrogen peroxide loremis`
    },
    {
      id: 5,
      className: "DentalCalculus",
      image: { src: DentalCalculus, alt: "DentalCalculus" },
      title: "Dental Calculus",
      description: `Types of bridges may vary, depending
      upon how they are fabricated and the way
      they anchor to the adjacent teeth`
    },
    {
      id: 6,
      className: "Prevention",
      image: { src: prevention, alt: "prevention" },
      title: "Prevention",
      description: `The most important part of preventive
      dentistry is to brush teeth with fluoride
      toothpaste approved by ADA`
    }
  ];

  const customStyledDentalTopics = dentalTopics.map((topic, index) => {

    if (index === 2) {
      return {
        ...topic,
        className: `${topic.className} dentalCare`,
        style: { marginBottom: "0px" }
      };
    } else {
      return topic;
    }
  });

  return (
    <div className="services">
      <div className="service mt-40 ml-[135px] mr-[129px]">
        <h2 className="heading text-4xl font-semibold">Our services</h2>
        <p className="textColor mt-4">We are dental care clinic that helps people to take care of their health and we</p>
      </div>
      <div className="grid sm:grid-cols-1 gap-x-4 md:grid-cols-2 xl:grid-cols-3 gap-4 ml-[135px] mr-[129px] mt-[52px]">
        {customStyledDentalTopics.map(topic => (
          <div key={topic.id} className={topic.className + " w-[346px] bg-[#FFFFFF]"}>
            {topic.image && <img className='mb-8 mx-auto mt-[32px]' src={topic.image.src} alt={topic.image.alt} />}
            <h2 className='text-[18px] text-center font-semibold'>{topic.title}</h2>
            <p className='textColor text-[16px] ml-[10px] mr-[9px] mb-7 mt-3'>{topic.description}</p>
          </div>
        ))}
      </div>

      <div className="dentalUpdate bg-[#FC8469] mt-20 ">
        <div className="updates mt-14 pb-8 ml-[135px] mr-[129px] bg-[#FC8469]">
          <div className="updatesService grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 pt-14 pb-8 gap-x-7 text-white">
            <div className="Emergency  sm:border-none md:border-none lg:border-none xl:border-r-2  2xl:border-r-2 sm:ml-36 md:ml-36 lg:ml-0 xl:ml-0 2xl:ml-0 flex-grow">
              <h2 className='text-[36px] mt-7 ml-6 font-bold'>10 +</h2>
              <p className='mt-4 text-[18px]'>Great Dentists</p>
            </div>
            <div className="Emergency  sm:border-none md:border-none lg:border-none xl:border-r-2  2xl:border-r-2 flex-grow text-center">
              <h2 className='text-[36px] mt-7 font-bold'>50 +</h2>
              <p className='mt-4 text-[18px]'>Dental Services</p>
            </div>
            <div className="Emergenc sm:border-none md:border-none lg:border-r-2 xl:border-r-2  2xl:border-r-2 flex-grow text-center">
              <h2 className='text-[36px] mt-7 font-bold '>100 +</h2>
              <p className='mt-4 text-[18px]'>Happy Clients</p>
            </div>
            <div className="Emergency flex-grow text-center">
              <h2 className='text-[36px] mt-7 font-bold'>15 +</h2>
              <p className='mt-4 text-[18px]'>Years of Experience</p>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
