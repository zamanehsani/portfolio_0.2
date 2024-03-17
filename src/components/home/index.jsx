import designer from '../../images/Designer.png';
import Projects from './projects';
import IconGallery from './iconss';

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
            <div className='p-10 bg-gradient-to-r from-green-600 to-green-800'>
                <div className='break-words lg:w-8/12 mx-auto my-8 '>
                    <div className='text-center my-4'>
                        <h1 className='leading-10 text-4xl font-bold text-yellow-300'>
                            Hi, I’m Zaman.  Nice to meet you.
                        </h1>
                    </div>
                    <div className='text-center mb-20'>
                        <p className='break-words text-yellow-200 text-2xl'>
                        I am an experienced Full Stack Web Developer with over 6 years of experience in software development and project management. 
                        Currently based in Dubai, I bring expertise in both technical execution and project leadership to deliver high-quality software solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-12 bg-gradient-to-r bg-yellow-100'>
                <div className="relative -top-24 rounded-xl bg-green-300 py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <div className=" text-3xl font-semibold tracking-tight text-green-900 sm:text-5xl">
                                    Frontend
                                </div>
                                <div className="text-base leading-7 text-gray-600">
                                At the forefront, I assist teams, projects, and ideas. 
                                I've leveraged design tools and frameworks to create stunning designs and enhance project outcomes.
                                </div>

                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">
                                Led and managed diverse teams globally, recognizing that 'It's the people!' 
                                Led dynamic teams comprising developers, designers, testers, and data professionals, 
                                fostering collaboration across global and remote locations.
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-green-900 sm:text-5xl">
                                 Management
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4 ">
                                <dt className="text-base leading-7 text-gray-600">
                                Skilled in backend services and equipped with extensive knowledge, 
                                I am an experienced Python and JavaScript developer. 
                                I specialize in crafting systems that operate smoothly and scale effectively.
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-green-900 sm:text-5xl">
                                Backend
                                </dd>
                            </div>
                
                        </dl>
                        <div className='flex flex-col py-10'>
                           <div className='flex items-center justify-center'>
                                <h1 className=' text-xl font-semibold tracking-tight text-green-900 text-center'>
                                    Tools, Frameworks and langauges I use thougthout my work.
                                </h1>
                           </div>
                            <div>
                                <IconGallery />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* recent workds */}

       
        <Projects />
        {/* testonomails */}

        {/* get in touch call */}

        {/* footer */}
        </>
    )
}