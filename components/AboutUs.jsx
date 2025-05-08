import React from 'react';

function AboutUs() {
    return (
        <div className='p-6'>
            <img
                className='w-full h-100 object-cover rounded-md mb-4'
                src='src\assets\ChatGPT Image Apr 15, 2025, 11_23_59 AM.png'
                alt="ASOS Banner"
            />
            <h1 className='text-3xl'>About ASOS:</h1>
            <p className='text-lg leading-7 text-gray-700'>
                ASOS (As Seen On Screen) is a British online fashion and cosmetic retailer, known for its trendy, affordable, and diverse collection of clothing and accessories. Founded in 2000, ASOS has grown into a global fashion destination for young adults, offering over 850 brands as well as its own range of clothing and accessories. With a strong focus on inclusivity, sustainability, and customer experience, ASOS continues to redefine fashion for the digital generation.
            </p>
        </div>
    );
}

export default AboutUs;
