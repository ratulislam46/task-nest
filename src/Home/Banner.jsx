import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <div className="carousel lg:h-[700px] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/cH3vFWsz/68747.gif"

                        className="w-full h-[400px] lg:h-[700px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/YSbRt1Y7/freelance-male.gif"
                        className="w-full h-[400px] lg:h-[800px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/ZYr93JsB/freelancer.gif" className='w-full h-[400px] lg:h-[800px]' />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/Y0yT05Fp/female-developer-working-as-freelancer-animation-download-in-lottie-json-gif-static-svg-file-formats.gif"
                        className="w-full h-[400px] lg:h-[800px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}




            <div className='lg:flex justify-around items-center gap-28 bg-[#accadc] '>
                <div className='px-4 md:px-6 lg:px-10'>
                    <h1 className='text-4xl text-center lg:text-5xl font-semibold pt-10 md:pt-6 lg:pt-0'>Smart Marketplace for Freelance Tasks</h1>
                    <p className='text-gray-500 pt-2 lg:pt-4 text-center'>TaskNest is a reliable and easy-to-use freelance task marketplace where clients post tasks and skilled freelancers get them done efficiently. From graphic design to web development, find talent or work - all in one nest.</p>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <img src="https://i.postimg.cc/LXGF7xQx/1-AHYE5p7ry-TDc-VBtr-F0h-M7w.gif" alt="image" className='h-96 mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Banner;