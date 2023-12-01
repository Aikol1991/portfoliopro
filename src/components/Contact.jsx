
const Contact = () => {
    return (
        <div className='w-full h-[880px] flex justify-center items-center p-5 sm:mt-0'>
            <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-5'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black'>Contact form</p>
                    <p className='text-white py-4'> Submit the form below or shoot me an email - alexrodrigo@gmail.com</p>
                </div>
                <input className='my-4 p-2 bg-[#000000]' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-[#000000] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#00008B] hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact me</button>
            </form>
        </div>
    )
}

export default Contact