const About = () => {
    return (
        <div className='w-full text-black'>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:px-10 py-10 h-[800px]'>
                <div className='w-full sm:w-[50%]'>
                    <img className="rounded-3xl border mt-2 h-[650px] w-[450px]" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
                </div>
                <div className='w-full sm:w-[50%] grid sm:grid-cols-1 gap-4 px-1 mt-5'>
                    <div className='sm:text-left text-4xl font-bold'>
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
                            About me
                        </p>
                        <p className="mt-5">
                            Hi! I am Alex Rodrigo, nice to meet you.
                            Please take a look at my projects.
                        </p>
                    </div>
                    <div className="mr-5 text-white text-justify">
                        <p>I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
