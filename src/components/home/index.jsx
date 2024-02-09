import photo from '../../photo.jpeg';

export default function Index(){
    return (
        <div className="flex flex-col lg:flex-row">

            <div className="bg-green-100 p-8 lg:w-1/2">
                <h1 className=" text-center text-4xl text-green-900 font-bold mb-4">Web Developer</h1>
                <p className="text-lg">I build web applications with Node.js and Python.</p>
            </div>

            <div className="bg-green-100 lg:w-1/2 flex justify-center items-center">
                <img src={photo} className="max-w-full max-h-full" />
            </div>
        </div>
    )
}