import React, { useState } from 'react';
const ContactUs = () => {
    const [inputs, setInputs] = useState([
        { id: "name", value: 'Name', placeholder: 'Name' },
        { id: "gmail", value: 'Gmail', placeholder: 'Gmail' },
        { id: "note", value: 'Note', placeholder: 'Note...' }
    ]);

    const handleInputChange = (id, event) => {
        const newInputs = inputs.map(input => {
            if (input.id === id) {
                return { ...input, value: event.target.value };
            }
            return input;
        });
        setInputs(newInputs);
    };

    return (
        <div className="ml-[135px] mr-[129px]">
            <h2 className="text-4xl mt-32 font-semibold" style={{ color: "#2E2C49" }}>Contact Us</h2>
            <div className="map mt-7">
                <div style={{ width: "100%" }}>
                    <iframe
                        width="100%"
                        height="280"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Empire%20State%20Building,%20New%20York,%20NY&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        title="Google Maps - Empire State Building"
                        aria-label="Google Maps iframe showing the Empire State Building">
                    </iframe>
                </div>
            </div>
            <div className='inputs mt-8'>
                {inputs.map(input => (
                    <div key={input.id} className='border mt-[21px]'>
                        <input
                            type="text"
                            placeholder={input.placeholder}
                            value={input.value}
                            onChange={(e) => handleInputChange(input.id, e)}
                            className={`mt-9 ml-7 mb-9 outline-none  w-[90%] h-2/4 ${input.id === 'note' ? 'special-note-style' : ''}`}
                            style={input.id === 'note' ? { marginBottom: "118px" } : {}}
                        />
                    </div>
                ))}
            </div>
            <div className='mb-9'>
            <button className='bookBtn w-[176px] h-[54px] rounded-full text-white float-right text-[16px] font-semibold mt-9 mb-9'>Submit</button>
            </div> 
            
        </div>
    );
}

export default ContactUs;
