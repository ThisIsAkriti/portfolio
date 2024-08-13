const HeroPage = () => {
  return (
    <div className="bg-black min-h-screen border-l border-l-gray-100">
    <div className="flex flex-col lg:justify-center pt-28 lg:pt-0 items-center h-screen">
      <div className=" w-[400px] sm:w-[500px] md:w-[580px] lg:w-4/5 ">
        <div className="mb-4 sm:mb-0 flex justify-center sm:justify-end ">
          <img src="/pfp.webp" alt="pfp" className="h-44 flex lg:hidden w-fit  sm:-mb-32" />
        </div>
        <p className="text-center sm:text-start lg:text-center lg:text-6xl md:text-5xl text-4xl font-semibold sm:mb-6 lg:mb-10 mb-4 ">&lt;Hello, I'm <span className=" text-pink-900 lg:text-6xl md:text-5xl text-4xl font-semibold  ">Akriti</span>!&gt;</p>
        <p className="lg:text-6xl md:text-5xl text-4xl  font-semibold sm:mb-6 lg:mb-10 mb-4 text-center sm:text-start lg:text-center ">&lt;<span className="   text-pink-900">Reactjs</span> Developer.&gt;</p>
        <p className="md:text-3xl sm:text-2xl text-xl lg:font-bold font-semibold ml-2 text-center sm:text-start lg:text-center "> Continously Exploring, Creating and Growing.</p>
      </div>
    </div>
    
  </div>
  )
}

export default HeroPage
