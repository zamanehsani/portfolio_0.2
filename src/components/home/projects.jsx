import car from '../../images/car.png';
import vessel from '../../images/vessel-local.png';
import beautybrands from '../../images/beautybrands.ae.png';

export default function Projects(){
    return (
        <>
         <div className="bg-yellow-100">
            <div className='flex flex-col items-center justify-center'>
            <h1 className='leading-10 text-4xl font-bold text-green-900'>Recent Project</h1>
            <span className='text-sm mx-auto text-center px-10'>Take a look at some of my very recent projects. For more, reach me out! </span>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  px-8 py-2 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className=''>
                    <span className='px-2 py-1 m-0 rounded-full bg-green-800 font-extrabold text-white'>1</span>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Auto Service</h2>
                <p className=" text-gray-500">
                    This is a react backed by django application that is being used by three auto acccessories shop in Abu Dhabi. 
                    This is system helps the shop owner and staffs to manage and organize their daily works. 
                    It specifically helps with customer management. 
                    Implemented in multiple languages of English, Arabic, Urdo, Spanish.

                </p>
               
                </div>
                <div className=" grid p-10">
                <img
                    src={car}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />
              
                </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  px-8 py-2 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div className='p-10 sm:px-0'>
                    <span className='px-2 py-1 m-0 rounded-full bg-green-800 font-extrabold text-white'>2</span>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Local Invoices </h2>
                <p className=" text-gray-500">
                    Local Invoices is build for Three companies group being used for there daily invoices generation and overall
                    for their internal tools in a daily bases. It has improved the productivity of the teams more then 40 percent.
                </p>
               
                </div>
                <div className="lg:order-first grid p-10">
                <img
                    src={vessel}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />
              
                </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  px-8 py-2 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div className='p-10 sm:px-0'>
                    <span className='px-2 py-1 m-0 rounded-full bg-green-800 font-extrabold text-white'>3</span>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">BeautyBrands.ae</h2>
                <p className=" text-gray-500">
                    Designed, Developed beautybrands.ae shopping website. This website is backed by Shopify and stripe. 
                    It handles daily volume of 200 to 500 orders. 
                </p>
                
                </div>
                <div className="grid p-10">
                <img
                    src={beautybrands}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />
              
                </div>
            </div>
            <div className='flex items-center justify-center p-10'>
                <p className='m-1 rounded-full border border-green-800 text-green-900 p-2 px-4 hover:bg-green-900 hover:text-yellow-100 hover:border-0'>For more project, contact me via social media, email or whatsApp </p>
            </div>
        </div>
        </>
    )
} 