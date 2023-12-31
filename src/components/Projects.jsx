import { data } from "../data/data.js";

const Projects = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div className='w-full md:h-screen text-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>
                        Projects
                    </p>
                    <p className='py-6 text-white'> Check out some of my recent projects</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

                    {/* Grid Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md
                            flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-xl font bold text-emerald-500 tracking-wider ">
                                {item.name}
                            </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Projects;