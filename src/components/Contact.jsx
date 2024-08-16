
const Contact = () => {
  return (
    <div className="border-l border-l-gray-100 h-[680px]">

        <div className="flex flex-col justify-center h-full">
            <h1 className="font-bold md:text-4xl text-2xl pt-10 md:mb-14 mb-10 text-center ">&lt;Let’s Spark Some Ideas Together!✨&gt;</h1>
            <div className=" md:grid md:grid-cols-5 place-items-center flex flex-col">

                <div className="flex flex-col col-span-2 justify-center">
                    <h1 className="md:text-4xl text-3xl font-semibold mb-2 text-center">Get In Touch!</h1>
                    <p className="text-center text-sm md:text-md font-semibold md:w-64 w-[360px]">Whether you have a question, a project idea, or just want to say hi, I’m all ears!🐰🐰 </p>
                </div>
                <div className="flex justify-center col-span-3">
                    <div className=" flex flex-col justify-center md:w-[550px] w-[420px]">
                        <div className="mx-8 my-4 mt-10 border-t shadow-md shadow-pink-800 border-pink-800 rounded-md p-1 ">
                            <input type="text" placeholder="Name" className="outline-none text-pink-900 p-4 w-full rounded-md bg-black" />
                        </div>
                        <div className="mx-8 my-4 border-t shadow-md shadow-pink-800 border-pink-800 rounded-md p-1 ">
                            <input type="text" placeholder="Email" className="outline-none text-pink-900 p-4 w-full rounded-md bg-black" />
                        </div>
                        <div className="mx-8 my-4 border-t shadow-md shadow-pink-800 border-pink-800 rounded-md p-1 ">
                            <textarea type="text" placeholder="Got something to say?" className="outline-none text-pink-900 p-4 w-full rounded-md bg-black" rows={3} />
                        </div>
                        <div className="mx-8 my-4 mb-10 border-t shadow-md shadow-pink-800  active:shadow-none active:border hover:opacity-80 border-pink-800 rounded-md">
                            <button className="outline-none text-pink-900 p-4 w-full font-semibold text-xl " >Send</button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                
            </div>
        </div>
       
    </div>
  )
}

export default Contact
