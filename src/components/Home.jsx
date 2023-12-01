
const Home = () => {
    return (
        <div className='w-full h-[500px]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-[200px]'>
                <p className='text-white'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#191970]'>
                    ALEX RODRIGO
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#00008B]'>
                    I am a Frontend Developer.
                </h2>
                <p className='text-[#ffffff] mx-auto py-4 max-w-[700px]'>
                    I’m a full-stack developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <button className='text-white group mx-auto border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00008B] hover:border-blue-800'>
                        View Works
                        <span className='group-hover:rotate-90 duration-300'>
            </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;