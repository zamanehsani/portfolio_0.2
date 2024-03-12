import designer from '../../Designer.png';

export default function Index(){
    return (
        <>
        <div className="flex flex-col my-10">
            <div className="p-8 text-center items-center mt-10">
                <h1 className="text-4xl break-words bg-gradient-to-r from-green-900 to-green-400 text-transparent bg-clip-text font-bold">
                    Full Stack Web Developer In Dubai
                </h1> 
                <hr className='mx-auto px-15 py-1 w-1/2 text-green-600 border-t-2 border-green-500' />
                <p className='text-lg m-0 bg-gradient-to-r from-green-900 to-green-700 text-transparent bg-clip-text'>
                "Empowering People Through Technology, One Line of Code at a Time"</p>
            </div>
        </div>
        {/* the image */}
        <div className='flex items-center justify-center mb-10'>
            <img className='w-1/2 md:w-1/3'
             src={designer} alt="Zaman Ehsani - illustration is generated via microsoft designer" />
        </div>

        {/* introduction section */}
        <div className='flex flex-col justify-center bg-yellow-100 '>
            <div className='p-10 my-10 bg-gradient-to-r from-green-600 to-green-800'>
                <div className='break-words lg:w-8/12 mx-auto my-8 '>
                    <div className='text-center my-4'>
                        <h1 className='leading-10 text-4xl font-bold text-yellow-300'>
                            Hi, I’m Zaman.  Nice to meet you.
                        </h1>
                    </div>
                    <div className='text-center mb-20'>
                        <p className='break-words text-yellow-200 text-2xl'>
                        I'm a seasoned Full Stack Web Developer with 6 plus years of experience in software development 
                        and project management in software. I am currently living in Dubai. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-12 bg-gradient-to-r bg-yellow-100'>
                <div className="relative -top-24 rounded-xl bg-green-100 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">
                                     Details and skills icons 
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-green-900 sm:text-5xl">
                                Frontend
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">
                                    Details and skills icon 
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-green-900 sm:text-5xl">
                                Backend
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">
                                    Details and skill icons...
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-green-900 sm:text-5xl">
                                 Management
                                </dd>
                            </div>
                
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}