import car from '../../images/car.png';
import vessel from '../../images/local.jpg';
import beautybrands from '../../images/beautybrands.ae.png';

export default function Projects(){
    return (
        <>
         <div className="bg-yellow-100">
            <div className='flex flex-col items-center justify-center'>
            <h1 className='leading-10 text-4xl font-bold text-green-900'>Recent Projects</h1>
            <span className='text-sm mx-auto text-center px-10'>Take a look at some of my very recent projects. </span>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  px-8 py-2 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className=''>
                    
                    <h2 className=" flex items-center text-2xl font-bold tracking-tight">
                        {/* <span className='px-2 py-1 m-0 mx-1 rounded-full font-extrabold'>1.</span> */}
                        <a href="https://github.com/zamanehsani/carServiceFront" target='_blank'>Auto Service Shop</a> 
                        <span className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </h2>
                    <p className=" text-gray-600">
                        This application, powered by React and Django, serves three auto accessories shops in Abu Dhabi, facilitating daily management and organization for shop owners and staff, with a focus on customer management. 
                        It's available in multiple languages, including English, Arabic, Urdu, and Spanish.

                    </p>
                    <h1 className='font-bold text-gray-800 mt-5'>Tech Stacks: </h1>
                    <p className='text-gray-600'>
                        React, Redux, React-Router-Dom, React-Qeury, Axios, Tailwindcss, i18next,
                        Django, Django restframework, Postgresql.</p>
                    <p className='text-gray-600'>Hosted in AWS UAE region on linux based EC2. Files are stored in AWS S3 bucket.</p>
               
                </div>
                <div className=" grid lg:px-10 pt-5">
                <img
                    src={car}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />
              
                </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  px-8 py-2 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div className=''>
                    <h2 className=" flex items-center text-2xl font-bold tracking-tight">
                        <a href="https://github.com/zamanehsani/local" target='_blank'>Local Invoices</a> 
                        <span className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </h2>
                    <p className=" text-gray-600">
                    Local Invoices has been developed for a group of three companies to facilitate their daily invoice generation and internal operations. 
                    It has significantly boosted team productivity by over 40%.
                    It currently generates and manages over 50 local invoices for three offices and cargoes.
                    </p>
                    <h1 className='font-bold text-gray-800 mt-5'>Tech Stacks: </h1>
                    <p className='text-gray-600'>
                        React, Redux, React-Router-Dom, React-Qeury, Axios, bootstrape,
                        Django, Django restframework, Postgresql, Celery.</p>
                    <p className='text-gray-600'>Hosted in AWS UAE region on linux based EC2. Files are stored in AWS S3 bucket.</p>
               
                </div>
                <div className="lg:order-first grid lg:px-10">
                <img
                    src={vessel}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />
              
                </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  px-8 py-2 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div className=''>
                <h2 className=" flex items-center text-2xl font-bold tracking-tight">
                        <a href="https://beautybrands.ae" target='_blank'>beautybrands.ae</a> 
                        <span className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </h2>
                    <p className=" text-gray-600">
                    BeautyBrands.ae is dedicated to authentic beauty products, hygiene, and cosmetics. 
                    As my personal project, it embodies a grand vision. 
                    Imagine a platform driven by AI, offering product recommendations, skin scanning capabilities, 
                    and personalized subscription packages tailored to your skin's needs. Currently powered by Shopify, 
                    it's poised to revolutionize the beauty industry experience.

                    </p>
                   
            
                </div>
                <div className="grid lg:px-10">
                <img
                    src={beautybrands}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"/>
                </div>
            </div>
            <div className='flex items-center justify-center p-10'>
                <a href='https://github.com/zamanehsani/' target='_blank' className='m-1 underline text-green-900 p-2 px-4'>For more projects, click here to checkout my github or contact me via social media, email or whatsApp </a>
            </div>
        </div>
        </>
    )
} 